<template>
  <div id="app">
      <!--左侧导航-->
      <!--<left-nav></left-nav>-->
      <!--操作区域-->
      <!--<div class="main">-->
          <router-view></router-view>
      <!--</div>-->
  </div>
</template>
<script>
    import leftNav from './components/leftNav';
    export default{
        name: 'app',
        components: {
            leftNav
        }
    }
</script>
<style>
    @import "./assets/css/main.css";
    #app{
        font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
        height: 100%;
    }
    .main{
        float: left;
        width: 95%;
        background-color: #EFF2E7;
        height: 100%;
        overflow: auto;
    }

</style>
