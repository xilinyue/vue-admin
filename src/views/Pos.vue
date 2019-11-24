<template>
    <div class="pos">
        <el-row>
            <el-col :span="7">
                <el-tabs  type="card">
                    <el-tab-pane label="点餐">
                        <el-table :data="tableData" border style="width: 100%">
                            <el-table-column prop="goodsName" label="商品"></el-table-column>
                            <el-table-column prop="count" label="数量" width="50"></el-table-column>
                            <el-table-column prop="price" label="金额" width="70"></el-table-column>
                            <el-table-column label="操作" width="100" fixed="right">
                                <template scope="scope">
                                    <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div>
                            <small>数量：</small>{{totalCount}} &nbsp;&nbsp;&nbsp;&nbsp; <small>金额：</small>{{totalMoney}}元
                        </div>
                        <el-button type="warning">挂单</el-button>
                        <el-button type="danger" @click="delAllGoods">删除</el-button>
                        <el-button type="success">结账</el-button>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">
                        挂单
                    </el-tab-pane>
                    <el-tab-pane label="外卖">
                        外卖
                    </el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="17">
                <div class="often-goods">
                    <div class="title">常用商品</div>
                    <div class="often-goods-list">
                        <ul>
                            <li v-for="item in oftenGoods" @click="addOrderList(item)">
                                <span>{{item.goodsName}}</span>
                                <span class="o-price">￥{{item.price}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="goods-type">
                    <el-tabs>
                        <el-tab-pane label="汉堡">
                            <ul class='cookList'>
                                <li v-for="item in type0Goods" @click="addOrderList(item)">
                                    <span class="foodImg"><img src="https://f12.baidu.com/it/u=2777289989,443417587&fm=72" width="100%"></span>
                                    <span class="foodName">{{item.goodsName}}</span>
                                    <span class="foodPrice">￥{{item.price}}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="小食">
                            <ul class='cookList'>
                                <li v-for="item in type1Goods" @click="addOrderList(item)">
                                    <span class="foodImg"><img src="https://f12.baidu.com/it/u=2777289989,443417587&fm=72" width="100%"></span>
                                    <span class="foodName">{{item.goodsName}}</span>
                                    <span class="foodPrice">￥{{item.price}}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                            <ul class='cookList'>
                                <li v-for="item in type2Goods" @click="addOrderList(item)">
                                    <span class="foodImg"><img src="https://f12.baidu.com/it/u=2777289989,443417587&fm=72" width="100%"></span>
                                    <span class="foodName">{{item.goodsName}}</span>
                                    <span class="foodPrice">￥{{item.price}}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                            <ul class='cookList'>
                                <li v-for="item in type3Goods" @click="addOrderList(item)">
                                    <span class="foodImg"><img src="https://f12.baidu.com/it/u=2777289989,443417587&fm=72" width="100%"></span>
                                    <span class="foodName">{{item.goodsName}}</span>
                                    <span class="foodPrice">￥{{item.price}}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import ElButton from "element-ui/packages/button/src/button";
    import ElTabPane from "element-ui/packages/tabs/src/tab-pane";
    import axios from 'axios';
    export default {
        components: {
            ElTabPane,
            ElButton
        },
        name: "pos",
        data(){
            return {
                tableData: [],
                oftenGoods:[],
                type0Goods:[],
                type1Goods:[],
                type2Goods:[],
                type3Goods:[],
                totalCount: 0,
                totalMoney: 0
            }
        },
        mounted(){
            // var orderHeight  = document.body.clientHeight;
            // document.getElementById("order-list").style.height = orderHeight + 'px';
        },
        created(){
            axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
                .then(response => {
                    this.oftenGoods = response.data;
                })
                .catch(error => {
                    alert("网络错误，不能访问");
                });
            axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods')
                .then(response => {
                    this.type0Goods = response.data[0];
                    this.type1Goods = response.data[1];
                    this.type2Goods = response.data[2];
                    this.type3Goods = response.data[3];
                })
                .catch(error => {
                    alert("网络错误，不能访问");
                });
        },
        methods: {
            //添加订单列表的方法
            addOrderList(good){
                this.totalCount = 0;
                this.totalMoney = 0;
                let isHave = false;
                //判断是否这个商品已经存在于订单列表
                for(let i = 0; i < this.tableData.length; i++){
                    if(this.tableData[i].goodsId == good.goodsId){
                        isHave = true; //存在
                    }
                }
                //根据isHave的值判断订单列表中是否有此商品
                if(isHave){
                    //存在就进行数量加加
                    let arr = this.tableData.filter(o => o.goodsId == good.goodsId);
                    arr[0].count++;
                }else{
                    //不存在就推入数组
                    let newGoods = {
                        goodsId: good.goodsId,
                        goodsName: good.goodsName,
                        price: good.price,
                        count: 1
                    };
                    this.tableData.push(newGoods);

                }
                //进行数量和结合的汇总计算
                this.tableData.forEach((element) => {
                    this.totalCount += element.count;
                    this.totalMoney = this.totalMoney + (element.price*element.count);
                })
            },
            delSingleGoods(goods){
                this.tableData=this.tableData.filter(o => o.goodsId !=goods.goodsId);
                //进行数量和结合的汇总计算
                this.totalCount = this.totalCount - goods.count;
                this.totalMoney = this.totalMoney - (goods.price*goods.count);
            },
            //删除所有商品
            delAllGoods() {
                this.tableData = [];
                this.totalCount = 0;
                this.totalMoney = 0;
            },
        }
    }
</script>

<style scoped>
    .title{
        height: 20px;
        border-bottom: 1px solid #D3DCE6;
        background-color: #F9FAFC;
        padding: 10px;
    }
    .often-goods::after{
        content: '';
        display: block;
        clear: both;
    }
    .often-goods-list ul li{
        list-style: none;
        float: left;
        border: 1px solid #E5E9F2;
        padding: 10px;
        margin: 5px;
        background-color: #fff;
    }
    .o-price{
        color: #58B7FF;
    }
    .cookList li{
        list-style: none;
        width:23%;
        border:1px solid #E5E9F2;
        height: auto;
        overflow: hidden;
        background-color:#fff;
        padding: 2px;
        float:left;
        margin: 2px;

    }
    .cookList li span{

        display: block;
        float:left;
    }
    .foodImg{
        width: 40%;
    }
    .foodName{
        font-size: 18px;
        padding-left: 10px;
        color:brown;

    }
    .foodPrice{
        font-size: 16px;
        padding-left: 10px;
        padding-top:10px;
    }
</style>
<style>
    .el-tabs__nav-scroll{
        background-color: #fff;
    }
</style>