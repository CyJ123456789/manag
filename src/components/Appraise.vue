<template>
  <div>
    <div class="header">
      <div class="h_top">
        <div class="top_tt">
          <div class="tt_cen" @click="clph1">所有订单</div>
          <div class="tt_cen" @click="clph2">合作物流</div>
          <div class="tt_cen bo" @click="clph3">店铺评价</div>
        </div>
      </div>
      <div class="h_show">你可以在这里对所有评价进行管理</div>
      <!--表格-->
      <div class="rightTab">
        <div class="tab_op">
          <div class="tab_op_d">管理</div>
        </div>
        <div class="tab_in">
          <div class="tab_in_cen">评价详情</div>
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
        <div style="overflow: hidden">
          <div class="blch_in">
            <div class="blch_in_tt">摄入太多发（00001）</div>
            <div class="blch_in_ins">创建时间：2019.06.15 12:00:00</div>
            <div class="blch_in_dt">内容水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水杀杀杀杀杀杀杀杀杀</div>
            <div class="blch_in_answer"><div class="answer_name">沙发沙发：</div><div class="answer_cen">爱的是广水水水水水水水水水水水水水水水水水水水东省官方是否三个地方和</div></div>
          </div>
          <div class="blch_st"><div class="st_cen">啊啊水山豆</div></div>
          <div class="blch_op">
            <div class="blch_op_btn"><button @click="editor">回复</button></div>
          </div>
        </div>
        <div class="blch_revert" v-show="exhibit">
          <el-input v-model="input" placeholder="说点什么吧！" style="width: 75%"></el-input>
          <el-button @click="btnfs">确定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Appraise',
  data () {
    return {
      obj: {
        'datas': []
      },
      exhibit: false,
      input: ''
    }
  },
  mounted () {
  },
  methods: {
    editor () {
      this.exhibit = !this.exhibit
    },
    clph1 () {
      this.$router.push({name: 'Refund'})
    },
    clph2 () {
      this.$router.push({name: 'Logistic'})
    },
    clph3 () {
      this.$router.push({name: 'Appraise'})
    },
    btnfs () {
      if (this.input !== '' && this.input !== null) {
      }
      this.exhibit = false
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
  .h_top{
    margin-top: -16px;
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
    border-bottom: 1px solid #dce0e6;
    overflow: hidden;
    position: relative;
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
    height: 40px;
    line-height: 40px;
    font-weight: 600;
    font-size: 16px;
  }
  .blch_in_ins{
    width: 100%;
    height: 30px;
    font-size: 14px;
    color: #7f8fa4;
    line-height: 30px;
    letter-spacing: 1px;
  }
  .blch_in_dt{
    width: 100%;
    min-height: 30px;
    font-size: 14px;
    color: #7f8fa4;
    letter-spacing: 1px;
  }
  .blch_in_answer{
    margin-top: 10px;
    width: 80%;
    font-size: 13px;
    overflow: hidden;
    margin-bottom: 5px;
  }
  .answer_name{
    display: inline-block;
    float: left;
    min-width: 25%;
    height: 100%;
  }
  .answer_cen{
    display: inline-block;
    float: left;
    width: 60%;
  }
  .blch_st{
    display: inline-block;
    float: left;
    height: 100px;
    width: 10%;
    margin-left: 10%;
    color: #7f8fa4;
    position: relative;
  }
  .st_cen{
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  .blch_op{
    min-width: 80px;
    height: 100px;
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
  .blch_revert{
    width: 40%;
    height: 40px;
    margin-top: 5px;
    margin-bottom: 10px;
    margin-left: 16px;
  }
</style>
