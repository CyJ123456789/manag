<template>
  <div id="left">
    <div class="img1">
      <a><i class="el-icon-arrow-left"></i></a>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      background-color="#333744"
      active-text-color="#ffffff"
      text-color="#ffffff"
      v-bind:router="true"
      unique-opened>
      <el-menu-item index="/Import">
        <i class="el-icon-s-shop"></i>
        <span class="ds2">店铺信息</span>
      </el-menu-item>
      <el-menu-item index="/Refund">
        <i class="el-icon-s-order"></i>
        <span class="ds2">销售信息</span>
      </el-menu-item>
      <el-menu-item index="/Sold">
        <i class="el-icon-success"></i>
        <span class="ds2">商品详情</span>
      </el-menu-item>
      <el-menu-item index="/Editor">
        <i class="el-icon-present"></i>
        <span class="ds2">优惠活动</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Left',
  computed: {
    activeIndex () {
      if (this.$route.path.indexOf('/Import') == 0) {//eslint-disable-line
        return '/Import'
      } else if (this.$route.path.indexOf('/Sold') == 0) {//eslint-disable-line
        return '/Sold'
      } else if (this.$route.path.indexOf('/Editor') == 0) {//eslint-disable-line
        return '/Editor'
      } else if (this.$route.path.indexOf('/Refund') == 0) {//eslint-disable-line
        return '/Refund'
      }
    }
  }
}
</script>

<style>
  #left{
    width: 180px;
    height: 100vh;
    background-color: #333744;
    color: white;
    position: fixed;
    left: px;
  }
  .img1{
    width: 100%;
    height: 30px;
    background: #4a5064;
    text-align: center;
    line-height: 30px;
  }
  .img1 a{
    display: inline-block;
    width: 100%;
    height: 30px;
  }
  .img1 i{
    color: #909399;
  }
  .img1:hover i{
    color: #FFFFFF;
  }
  .el-menu-item, .el-submenu__title{
    height: 40px;
    line-height: 40px;
    padding: 0px;
  }
  .el-menu-item:hover{
    background: #4a5064 !important;
  }
  .el-menu-item:hover i{
    color: #FFFFFF !important;
  }
  .el-menu-item-group__title{
    height: 0px !important;
    padding: 0px;
  }
  .el-submenu .el-menu-item{
    height: 40px;
    line-height: 40px;
    min-width: 179px;
    padding: 0px;
  }
  span{
    font-size: 12px;
  }
  .el-menu-item.is-active{
    background-color: #00c1de !important;
  }
</style>
