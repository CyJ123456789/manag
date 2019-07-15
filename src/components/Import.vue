<template>
  <div>
    <div class="import">
      <div class="header">
        <div class="dt"><span></span>店铺信息</div>
        <div class="tab">
          <table cellspacing="0" cellpadding="20">
            <tr>
              <td class="td1">店铺名称</td>
              <td class="td2">
                <span v-show="!exhibit1">{{obj.name}}</span>
                <el-input v-model="name" :placeholder="obj.name" v-show="exhibit1"></el-input>
                <button @click="editor(1)" v-show="!exhibit1">修改</button>
                <button @click="affirm(1)" v-show="exhibit1">确认</button>
              </td>
            </tr>
            <tr>
              <td class="td1">店铺地址</td>
              <td class="td2">
                <span v-show="!exhibit2">{{obj.dpdz}}</span>
                <el-input v-model="dpdz" :placeholder="obj.dpdz" v-show="exhibit2"></el-input>
                <button @click="editor(2)" v-show="!exhibit2">修改</button>
                <button @click="affirm(2)" v-show="exhibit2">确认</button>
              </td>
            </tr>
            <tr>
              <td class="td1">所属类型</td>
              <td class="td2">
                <span v-show="!exhibit3">{{obj.sslx}}</span>
                <el-input v-model="sslx" :placeholder="obj.sslx" v-show="exhibit3"></el-input>
                <button @click="editor(3)" v-show="!exhibit3">修改</button>
                <button @click="affirm(3)" v-show="exhibit3">确认</button>
              </td>
            </tr>
            <tr>
              <td class="td1">创建日期</td>
              <td class="td2">{{obj.total}}</td>
            </tr>
            <tr>
              <td class="td3">店铺说明</td>
              <td class="td2">
                <span v-show="!exhibit4">{{obj.explain}}</span>
                <textarea class="form-control" maxlength="200" rows="5" v-model="explain" v-show="exhibit4"></textarea>
                <button @click="editor(4)" v-show="!exhibit4">修改</button>
                <button @click="affirm(4)" v-show="exhibit4">确认</button>
              </td>
            </tr>
            <tr>
              <td class="td3">店铺标签</td>
              <td class="td4">
                <el-tag
                  :key="tag"
                  v-for="tag in dynamicTags"
                  closable
                  :disable-transitions="false"
                  @close="handleClose(tag)">
                  {{tag}}
                </el-tag>
                <el-input
                  class="input-new-tag"
                  v-if="inputVisible"
                  v-model="inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm"
                  @blur="handleInputConfirm">
                </el-input>
                <el-button v-else class="button-new-tag" size="small" @click="showInput">添加标签</el-button>
              </td>
            </tr>
          </table>
          <div class="up-image">
            <div class="up-img1">
              <!-- <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess1"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload> -->
              <div class="img-prompt">
                <div class="prompt1">这里上传店铺头像</div>
                <div class="prompt2"><div style="font-size: 14px;color: #000;margin-bottom: 10px">文件名：{{imgname1}}</div>上传最大文件大小不超过2M</div>
              </div>
            </div>
            <div class="up-img2">
              <!-- <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess2"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload> -->
              <div class="img-prompt">
                <div class="prompt1">这里上传推广图像</div>
                <div class="prompt2"><div style="font-size: 14px;color: #000;margin-bottom: 10px">文件名：{{imgname2}}</div>上传最大文件大小不超过2M</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Import',
  data () {
    return {
      dynamicTags: ['物美价廉'],
      inputVisible: false,
      inputValue: '',
      obj: {
        name: '',
        sslx: '食品',
        dpdz: '',
        explain: ''
      },
      name: '',
      sslx: '',
      dpdz: '',
      explain: '',
      uname: '',
      imageUrl1: '',
      imageUrl2: '',
      imgname1: '111.jpg',
      imgname2: '',
      exhibit1: false,
      exhibit2: false,
      exhibit3: false,
      exhibit4: false
    }
  },
  mounted () {
    this.uname = this.$route.params.uname
    this.imageUrl1 = require('../assets/111.jpg')
  },
  methods: {
    handleAvatarSuccess1 (res, file) {
      this.imageUrl1 = URL.createObjectURL(file.raw)
      this.imgname1 = file.name
    },
    handleAvatarSuccess2 (res, file) {
      this.imageUrl2 = URL.createObjectURL(file.raw)
      this.imgname2 = file.name
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    editor (exhibit) {
      if (exhibit === 1) {
        this.exhibit1 = !this.exhibit1
      } else if (exhibit === 2) {
        this.exhibit2 = !this.exhibit2
      } else if (exhibit === 3) {
        this.exhibit3 = !this.exhibit3
      } else if (exhibit === 4) {
        this.exhibit4 = !this.exhibit4
      }
    },
    affirm (exhibit) {
      if (exhibit === 1) {
        this.obj.name = this.name
        this.name = ''
        this.exhibit1 = !this.exhibit1
      } else if (exhibit === 2) {
        this.obj.dpdz = this.dpdz
        this.dpdz = ''
        this.exhibit2 = !this.exhibit2
      } else if (exhibit === 3) {
        this.obj.sslx = this.sslx
        this.sslx = ''
        this.exhibit3 = !this.exhibit3
      } else if (exhibit === 4) {
        this.obj.explain = this.explain
        this.explain = ''
        this.exhibit4 = !this.exhibit4
      }
    },
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput () {
      if (this.dynamicTags.length < 5) {
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      } else {
        this.$alert('你最多只能有5个标签！', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })
      }
    },

    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style scoped lang="scss">
  .import{
    width: 100%;
  }
  .header {
    margin: 0 auto;
    padding: 16px;
    background-color: #FFFFFF;
    max-width: 1280px;
   }
  .dt{
    height: 56px;
    line-height: 56px;
    background-color: #f7f8fa;
    text-align: center;
    margin: -16px;
    border-bottom: 1px solid #dce0e6;
  }
  .tab{
    width: 100%;
    margin-top: 20px;
    position: relative;
  }
  table{
    width: 65%;
    border-collapse: collapse;
  }
  .td1{
    width: 15%;
    height: 50px;
    text-align: center;
  }
  .td2{
    width: 80%;
    height: 50px;
    text-align: left;
    padding-left: 10px;
    position: relative;
  }
  .td2 span{
    display: inline-block;
    width: 70%;
  }
  .td3{
    width: 20%;
    height: 120px;
    text-align: center;
  }
  .form-control{
    height: auto;
    width: 70%;
    border-radius: 2px;
    font-size: 15px;
    border: 1px solid #e7e9ed;
  }
  textarea{
    resize: vertical;
    overflow: auto;
  }
  .form-control:focus{
    border-color: #7f8fa4;
    box-shadow: inset 0px 1px 1px rgba(0,0,0,0.075), 0px 0px 8px rgba(127,143,164,0.6);
  }
  .td4{
    width: 80%;
    height: 120px;
    text-align: left;
    padding-left: 10px;
  }
  .el-input{
    width: 70%;
    font-size: 15px;
  }
  .td2 span{
    font-size: 16px;
  }
  /*上传图片*/
  .up-image{
    width: 30%;
    height: auto;
    position: absolute;
    right: 2.5%;
    top: 15px;
  }
  .up-img1{
    width: 100%;
    height: 120px;
    background-color: #f8fafc;
  }
  .up-img2{
    width: 100%;
    height: 120px;
    background-color: #f8fafc;
    margin-top: 30px;
  }
  .img-prompt{
    width: 58%;
    height: 100%;
    margin-left: 5%;
    float: left;
    @media screen and (max-width: 1340px){
      width: 45%;
      font-size: 12px;
    };
    @media screen and (max-width: 1060px){
      width: 5%;
    }
  }
  .prompt1{
    width: 100%;
    height: 40px;
    text-align: left;
    line-height: 40px;
    color: #7f8fa4;
    border-bottom: 1px solid #eeeeee;
    @media screen and (max-width: 1060px){
      height: 100%;
      line-height: 15px;
      border-bottom: none;
    }
  }
  .prompt2{
    width: 100%;
    height: auto;
    margin-top: 10px;
    color: #7f8fa4;
    @media screen and (max-width: 1060px){
      display: none;
    }
  }
  .avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 118px;
    height: 118px;
    display: inline-block;
    float: left;
  }
  .avatar-uploader:hover {
    border-color: #FFB90F;
  }
  .avatar-uploader-icon {
    font-size: 20px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
  }
  /*按钮*/
  .td2 button{
    width: 35px;
    height: 25px;
    color: #2faa60;
    border: none;
    background-color: white;
    position: absolute;
    top: 50%;
    right: 15%;
    margin-top: -12.5px;
  }
  /*标签*/
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
