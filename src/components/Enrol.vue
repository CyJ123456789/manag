<template>
<div>
  <div class="header">
    <div class="d_form">
      <div class="form_tt"><span>店铺注册申请</span></div>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="店铺名称">
          <el-input v-model="form.name" placeholder="请输入你的店铺名称（仅限汉字 2-10个之间）"></el-input>
        </el-form-item>
        <el-form-item label="店铺地址">
          <el-input v-model="form.address" placeholder="请输入你店铺的所在地址"></el-input>
        </el-form-item>
        <el-form-item label="店铺类型">
          <el-radio-group v-model="form.resource">
            <el-radio label="个人店铺"></el-radio>
            <el-radio label="企业商铺"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="店铺绑定手机号">
          <el-input v-model="form.desc" placeholder="请输入你的手机号码"></el-input>
        </el-form-item>
        <el-form-item label="设置登陆密码">
          <el-input v-model="form.password" placeholder="请设置你的登陆密码（可以数字、字母、符号相互组合 8位以上）"></el-input>
        </el-form-item>
        <el-form-item label="再次输入密码">
          <el-input v-model="form.password" placeholder="请在此输入你的密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即申请</el-button>
          <el-button @click="resetForm">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Enrol',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: true,
        type: [],
        resource: '个人店铺',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$router.push({name: 'Import'})
    },
    resetForm () {
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style scoped>
  .header {
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    background: url('http://news.mydrivers.com/Img/20120217/2012021709492293.jpg') center no-repeat;
    position: relative;
  }
  .d_form{
    width: 600px;
    height: auto;
    background-color: #FFFFFF;
    padding: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50%;
    margin-left: -300px;
  }
  .form_tt{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 600;
  }
</style>
