<template>
  <div>
    <!--编辑-->
    <div class="header">
      <div class="h_show">你可以在这里添加商品</div>
      <div class="form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="商品编码" prop="name">
            <el-input v-model="obj.code" :disabled="true" style="width: 40%"></el-input>
          </el-form-item>
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="ruleForm.name" style="width: 40%"></el-input>
          </el-form-item>
          <el-form-item label="商品类型" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择商品类型">
              <el-option label="单品" value="danping"></el-option>
              <el-option label="套餐" value="taocan"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品价格" required>
            <el-input v-model="ruleForm.price1" style="width: 19.5%" placeholder="售价"></el-input>&nbsp;
            <el-input v-model="ruleForm.price2" v-if="flag" style="width: 19.5%" placeholder="原价"></el-input>
          </el-form-item>
          <el-form-item label="出售日期" required>
            <el-date-picker
              class="spacing"
              v-model="ruleForm.date1"
              type="datetime"
              placeholder="出售时间开始"
              :picker-options="pickerOptions0">
            </el-date-picker>
            <div style="display: inline-block;position: relative;width: 1%;height: 20px" v-if="flag">
              <span style="position: absolute;top: 0px;left: 0px;">&ndash;</span>
            </div>
            <el-date-picker
              class="spacing"
              v-model="ruleForm.date2"
              type="datetime"
              placeholder="出售时间结束"
              v-if="flag">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="上传图片" style="height: 140px">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
            <el-button @click="resetForm('ruleForm')">重置返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Addition',
  data () {
    return {
      obj: {
        code: '',
        detailList: []
      },
      fileList: [],
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        price1: '',
        price2: '',
        delivery: true,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择商品类型', trigger: 'change' }
        ],
        price1: [
          { required: true, message: '请输入商品出售价', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        price2: [
          { required: true, message: '请输入商品原价', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ]
      }
    }
  },
  mounted () {
  },
  computed: {
    flag: function () {
      return this.ruleForm.region === 'taocan'
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.$router.push({name: 'List'})
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style scoped>
  .header {
    height: auto;
    margin: 0 auto;
    padding: 16px;
    background-color: #FFFFFF;
    max-width: 1280px;
  }
  /*提示信息*/
  .h_show{
    margin: -16px;
    background-color: #f7f8fa;
    padding: 16px;
    margin-bottom: 0px;
    border-top: 1px solid #dce0e6;
    border-bottom: 1px solid #dce0e6;
    color: #7f8fa4;
    font-size: 15px;
  }
  .form{
    width: 90%;
    margin-top: 30px;
    margin-left: 5%;
  }
  .form .el-upload__tip{
    width: 50%;
    height: 30px;
    display: inline-block;
    position: absolute;
    top: 0px;
    left: 120px;
  }
  .el-button--primary{
    width: 100px;
    height: 40px;
  }
  .el-button--default{
    width: 60px;
    height: 40px;
  }
</style>
