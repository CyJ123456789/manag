<template>
<div id="app">
  <el-container v-if="$route.meta.keepAlive">
    <el-header>
      <keep-alive>
        <!-- 导航栏 -->
        <header-nav></header-nav>
      </keep-alive>
    </el-header>
    <el-container>
      <el-aside width="250px">
        <!-- 侧边栏 -->
        <keep-alive>
          <left></left>
        </keep-alive>
      </el-aside>
      <el-main>
        <!-- Body -->
        <router-view v-if="isRouterAlive"></router-view>
      </el-main>
    </el-container>
  </el-container>

  <!-- 登录页 -->
  <keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </keep-alive>
  
</div>
</template>

<script>
import Top from './components/home/Top.vue'
import Left from './components/home/Left.vue'
export default {
  name: 'App',
  components: {
    headerNav: Top,
    left: Left
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    }
  }
}
</script>
<style>
#app {
  width: 100%;
  min-height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgba(238, 238, 238, 1);
}
.el-container.is-vertical{
  width: 100%;
  height: 100%;
}
.el-header{
  padding: 0px;
  height: 50px !important;
}
.el-aside{
  width: 180px !important;
}
</style>
