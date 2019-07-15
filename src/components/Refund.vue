<template>
  <div>
    <div class="header">
      <div class="h_top">
        <div class="top_btn">
          <div class="btn_d">
            <a class="btn_a" @click="wsx">
              <i class="el-icon-plus"></i>订单查询<i class="el-icon-caret-bottom"></i>
            </a>
            <div class="btn_b" v-show="qaz">
              <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="订单编号">
                  <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button @click="scrch">确定</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
        <div class="top_tt">
          <div class="tt_cen bo" @click="clph1">所有订单</div>
          <div class="tt_cen" @click="clph2">合作物流</div>
          <div class="tt_cen" @click="clph3">店铺评价</div>
        </div>
      </div>
      <div class="h_show">你可以在这里对订单进行管理</div>
      <!--表格-->
      <div class="rightTab">
        <div class="tab_op">
          <div class="tab_op_d">管理</div>
        </div>
        <div class="tab_in">
          <div class="tab_in_cen">订单信息</div>
        </div>
      </div>
      <!--      <div class="blch" v-for="items in ku.datas">-->
      <!--        <div class="blch_in">-->
      <!--          <div class="blch_in_tt">{{items.name}}</div>-->
      <!--          <div class="blch_in_ins">{{items.code}}</div>-->
      <!--        </div>-->
      <!--        <div class="blch_st">{{items.quantity}}</div>-->
      <!--        <div class="blch_op">-->
      <!--          <div class="blch_op_btn"><button>更改</button></div>-->
      <!--        </div>-->
      <!--      </div>-->
      <div class="blch">
        <div class="blch_in">
          <div class="blch_in_tt">摄入太多发（00001）</div>
          <div class="blch_in_ins">电话号码：15525467978</div>
          <div class="blch_in_dt">创建时间：2019.06.15 12:00:00</div>
        </div>
        <div class="blch_st">法山豆</div>
        <div class="blch_op">
          <div class="blch_op_btn"><button>更改</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Refund',
  data () {
    return {
      query: {},
      ku: {
        datas: []
      },
      formLabelAlign: {
        name: ''
      },
      qaz: false,
      pickerOptions0: {
        disabledDate (time) {
          return time.getTime() > Date.now() - 8.64e6
        }
      }
    }
  },
  mounted () {
  },
  methods: {
    clph1 () {
      this.$router.push({name: 'Refund'})
    },
    clph2 () {
      this.$router.push({name: 'Logistic'})
    },
    clph3 () {
      this.$router.push({name: 'Appraise'})
    },
    wsx () {
      this.qaz = !this.qaz
    },
    scrch () {}
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
  .h_top{
    margin-top: -16px;
  }
  .top_btn{
    float: right;
    margin-top: 7px;
  }
  .top_tt{
    padding: 0;
    margin: 0;
    text-align: left;
    margin-bottom: 16px;
    height: auto;
  }
  .tt_cen{
    width: auto;
    height: 56px;
    line-height: 56px;
    font-size: 17px;
    display: inline-block;
    padding-left: 14px;
    padding-right: 14px;
    cursor: pointer;
  }
  .bo{
    border-bottom: 2px solid #1cacfc;
  }
  .btn_d{
    position: relative;
    margin-left: 10px;
    display: inline-block;
  }
  .btn_a{
    background-color: #31af64;
    border-color: #2faa60;
    color: white;
    -moz-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    border-radius: 2px;
    border-width: 1px;
    border-style: solid;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600;
    padding: 11px 16px;
    letter-spacing: 0.4px;
    margin-bottom: 0px;
    display: inline-block;
    cursor: pointer;
  }
  .btn_b{
    width: 300px;
    position: absolute;
    right: -16px;
    top: 52px;
    padding-right: 14px;
    padding-top: 14px;
    background-color: white;
    z-index: 999;
    opacity: 1;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.2);
  }
  .btn_b .el-form-item__content button{
    float: right;
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
  /*列表头部*/
  .rightTab{
    margin-left: -16px;
    margin-right: -16px;
    border-bottom: 1px solid #dce0e6;
  }
  .tab_in{
    margin-bottom: 10px;
    text-align: left;
    height: auto;
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
  }
  .tab_in_cen{
    font-size: 15px;
    line-height: 25px;
    display: inline-block;
    margin-left: 10%;
  }
  .tab_op{
    float: right;
    margin-right: 10%;
  }
  .tab_op_d{
    display: inline-block;
    position: relative;
  }
  /*列表项/内容*/
  .blch{
    margin: -16px;
    margin-top: 0px;
    margin-bottom: 0px;
    height: 100px;
    border-bottom: 1px solid #dce0e6;
  }
  .blch_in{
    display: inline-block;
    width: 40%;
    height: 100%;
    float: left;
    margin-left: 16px;
  }
  .blch_in_tt{
    width: 100%;
    height: 40%;
    line-height: 40px;
    font-weight: 600;
    font-size: 16px;
  }
  .blch_in_ins{
    width: 100%;
    height: 30%;
    font-size: 14px;
    color: #7f8fa4;
    line-height: 30px;
    letter-spacing: 1px;
  }
  .blch_in_dt{
    width: 100%;
    height: 30%;
    font-size: 14px;
    color: #7f8fa4;
    line-height: 30px;
    letter-spacing: 1px;
  }
  .blch_st{
    display: inline-block;
    float: left;
    height: 100%;
    width: 10%;
    line-height: 100px;
    margin-left: 10%;
    text-align: center;
    color: #7f8fa4;
  }
  .blch_op{
    min-width: 80px;
    height: 100%;
    display: inline-block;
    float: right;
    margin-right: 8%;
    line-height: 100px;
  }
  .blch_op_btn button{
    width: 80px;
    height: 40px;
    background-color: #2faa60;
    border: none;
    border-radius: 2px;
    letter-spacing: 4px;
    outline: none;
    color: white;
  }
</style>
