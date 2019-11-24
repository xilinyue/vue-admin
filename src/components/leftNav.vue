<template>
    <div class="left-nav">
        <ul>
            <li>
                <i class="iconfont icon-wodezichan"></i>
                <div>收银</div>
            </li>
            <li>
                <i class="iconfont icon-dianpu"></i>
                <div>店铺</div>
            </li>
            <li>
                <i class="iconfont icon-hanbao"></i>
                <div>商品</div>
            </li>
            <li>
                <i class="iconfont icon-31huiyuanqia"></i>
                <div>会员</div>
            </li>
            <li>
                <i class="iconfont icon-statistics1"></i>
                <div>统计</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import '../assets/css/font/iconfont.css';
    export default {
        name: "left-nav",
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
    .left-nav{
        color: #fff;
        font-size: 10px;
        height: 100%;
        background-color: #1D8ce0;
        float: left;
        width: 5%;
    }
    .iconfont{
        font-size: 24px;
    }
    .left-nav ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .left-nav li{
        text-align: center;
        border-bottom: 1px solid #20a0ff;
        padding: 10px;
    }
</style>