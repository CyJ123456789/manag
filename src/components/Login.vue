<template>
  <div class="login-container">
    <div class="login-block">
      <h5>用户登录</h5>
      <div class="login-block-info">
        <el-form ref="loginForm" :rules="loginDataRule" :model="loginData" size="small" @keypress.native.enter="login(loginData)">
          <el-form-item prop="username">
            <el-input v-model="loginData.username" placeholder="请输入帐号">
              <template slot="prepend"><span class="fas fa-user">用户</span></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginData.password" placeholder="请输入密码" type="password">
              <span slot="prepend" class="fas fa-lock">密码</span>
            </el-input>
          </el-form-item>
          <el-form-item align="right">
            <el-button @click="enrol">注  册</el-button>
            <el-button type="primary" @click="login(loginData)">登  录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      loginData: {
        username: '',
        password: ''
      },
      userToken: '',
      userName: '',
      loginDataRule: {
        username: [
          { required: true, message: '请输入登录帐号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['changeLogin']),
    ...mapMutations(['changeUser']),
    login (user) { // 登录
      let _this = this
      if (user.username === '' || user.password === '') {
        alert('账号或密码不能为空')
      } else {
        this.axios({
          method: 'post',
          url: '',
          data: this.loginData
        }).then(res => {
          this.userToken = 'Bearer ' + res.data.data.body.token // 将用户token保存到vuex中
          this.userName = this.loginData.username
          _this.changeLogin({Authorization: this.userToken})
          _this.changeUser({userName: this.userName})
          _this.$router.push({name: 'Import'}, {params: {uname: user.username}})
          alert('登陆成功')
        }).catch(error => {
          alert('账号或密码错误')
          console.log(error)
        })
      }
    },
    enrol () {
      this.$router.push({name: 'Enrol'})
    }
  }
}
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background: url('http://news.mydrivers.com/Img/20120217/2012021709492293.jpg') center no-repeat;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}
.login-block {
    width: 320px;
    border-radius: 10px;
    background-color: #FFFFFF;
    margin-right: 150px;
    font-size: 18px;
}
.login-block h5 {
  padding: 20px 20px 10px;
  border-bottom: 1px solid #aaa;
  margin-bottom: 10px;
}
.login-block-info{
  padding: 0 20px;
  font-size: 16px;
}
.fas{
  font-family: 宋体;
}
</style>
