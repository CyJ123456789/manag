<template>
  <el-container>
    <div>
      <div id="top">
        <div class="tt">甜点·高保真</div>
        <div class="u0">
          <a class="u0-a" href="#">{{username}}</a>
          <div class="u1">
            <div class="u1-top"></div>
            <div class="u1-bot">
              <a href="index.html">退出管理平台</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-container>
</template>
<script>
export default {
  name: 'Top',
  data () {
    return {
      username: 'qwersss'
    }
  },
  mounted () {
    this.username = this.$store.state.userName
    if (this.username === '' || this.username === null) {
      this.username = 'qwersss'
    }
  }
}
</script>

<style>
  #top{
    width: 100%;
    height: 48px;
    position: fixed;
    top: 0px;
    background-color: #000000;
    color: white;
    border-bottom: 2px solid black;
    line-height: 50px;
    z-index: 99999;
  }
  .tt{
    float: left;
    line-height: 50px;
    margin-left: 50px;
    font-size: 14px;
  }
  .u0{
    height: 100%;
    width: auto;
    float: right;
    position: relative;
  }
  .u0:hover .u1{
    display: block;
  }
  .u0-a{
    display: block;
    width: 100%;
    height: 50px;
    color: white;
    line-height: 50px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .u1{
    position: absolute;
    top: 50px;
    right: 0px;
    width: 270px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.2);
    display: none;
    background-color: #FFFFFF;
  }
  .u1-bot{
    width: 100%;
  }
  .u1-bot{
    width: 100%;
    height: 50px;
  }
  .u1-bot a{
    display: block;
    width: 100%;
    height: 50px;
    color: #000;
    line-height: 50px;
    text-align: center;
    font-size: 12px;
    border-top: 1px solid #f5f5f5;
  }
  .u1-bot a:hover{
    background: #f5f5f5;
  }
</style>
