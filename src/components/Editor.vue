<template>
  <div>
    <!--保存按钮-->
    <div class="header">
      <!--添加商品-->
      <el-dialog title="添加活动" :visible.sync="dialogFormVisible" width="30%" center>
        <el-form :model="currentSku" :rules="currentSkuRule" ref="ruleFormBox">
          <el-form-item label="活动名称" :label-width="formLabelWidth" prop="name">
            <el-input v-model="currentSku.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="优惠规则" :label-width="formLabelWidth" class="matb" prop="arules">
            <el-input v-model="currentSku.arules" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动时间" :label-width="formLabelWidth" prop="date">
            <el-date-picker
              class="spacing"
              v-model="currentSku.date1"
              type="datetime"
              placeholder="活动时间开始"
              :picker-options="pickerOptions0">
            </el-date-picker>
            <div style="display: inline-block;position: relative;width: 100%;height: 20px">
              <span style="position: absolute;top: 0px;left: 45%;">至</span>
            </div>
            <el-date-picker
              class="spacing"
              v-model="currentSku.date2"
              type="datetime"
              placeholder="活动时间结束">
            </el-date-picker>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeBox('ruleFormBox')">取 消</el-button>
          <el-button type="primary" @click="addProduct('ruleFormBox')">确 定</el-button>
        </div>
      </el-dialog>
      <div class="h_top">
        <div class="top_btn">
          <div class="btn_d">
            <a class="btn_a" @click="openBox">
              <i class="el-icon-plus"></i>添加活动<i class="el-icon-caret-bottom"></i>
            </a>
          </div>
        </div>
        <div class="top_tt">
          <div class="tt_cen">活动列表</div>
        </div>
      </div>
      <div class="h_show">你可以在这里对所有活动进行管理</div>
      <!--表格-->
      <div class="rightTab">
        <div class="tab_op">
          <div class="tab_op_d">管理</div>
        </div>
        <div class="tab_in">
          <div class="tab_in_cen">活动信息</div>
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
      <div class="blch" @click="editor">
        <div style="overflow: hidden">
          <div class="blch_in">
            <div class="blch_in_tt">满减优惠（00001）</div>
            <div class="blch_in_ins">满100减20</div>
            <div class="blch_in_dt">2019.06.15 12:00:00&nbsp;-&nbsp;2019.06.18 12:00:20</div>
          </div>
          <div class="blch_st">进行中</div>
          <div class="blch_op">
            <div class="blch_op_btn"><button>添加商品</button></div>
          </div>
        </div>
        <div  style="overflow: hidden" v-show="exhibit">
          <div class="blch_list">
            <div class="blch_list_in">
              <div class="blch_list_in_tt">杀杀杀（00001）</div>
            </div>
            <div class="blch_list_st">出售中</div>
            <div class="blch_list_op">
              <div class="blch_list_op_btn"><button>删除</button></div>
            </div>
          </div>
          <div class="blch_list">
            <div class="blch_list_in">
              <div class="blch_list_in_tt">杀杀杀（00001）</div>
            </div>
            <div class="blch_list_st">出售中</div>
            <div class="blch_list_op">
              <div class="blch_list_op_btn"><button>删除</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ElForm from '../../node_modules/element-ui/packages/form/src/form'
import ElFormItem from '../../node_modules/element-ui/packages/form/src/form-item'
export default {
  name: 'Editor',
  components: {
    ElFormItem,
    ElForm
  },
  data () {
    return {
      isAble: false,
      dialogFormVisible: false,
      formLabelWidth: '120px',
      currentSku: {
        name: '',
        arules: '',
        date1: '',
        date2: ''
      },
      exhibit: false,
      obj: {
        detailList: [],
        detail: []
      },
      currentSkuRule: {
        name: [
          {required: true, message: '请填写活动名称', trigger: 'change'}
        ],
        arules: [
          {required: true, message: '请填写活动规则', trigger: 'blur'}
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ]
      },
      pickerOptions0: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e6
        }
      }
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    addProduct (formName) {
    },
    closeBox (formName) {
      this.$refs[formName].resetFields()
      this.dialogFormVisible = false
      this.currentSku = {name: null, arules: null, date1: null, date2: null}
    },
    editorForm (row) {
      this.isAble = true
      this.currentSku.name = row.commodityname
      this.currentSku.arules = row.commodityarules
      this.currentSku.date1 = row.commoditydate1
      this.currentSku.date2 = row.commoditydate2
      this.dialogFormVisible = true
    },
    openBox () {
      this.isAble = false
      this.dialogFormVisible = true
    },
    editor () {
      this.exhibit = !this.exhibit
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
  .el-form--inline .el-form-item{
    margin-right: 0px !important;
  }
  /*对话框*/
  .dialog-footer{
    width: 180px;
    height: 30px;
    margin: 0 auto;
  }
  .dialog-footer button{
    width: 60px;
    height: 30px;
  }
  .matb{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .el-select{
    width: 100% !important;
  }
  .el-date-editor.el-input{
    width: 100%;
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
    border-bottom: 2px solid #1cacfc;
    padding-left: 14px;
    padding-right: 14px;
    cursor: pointer;
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
    overflow: hidden;
    border-bottom: 1px solid #dce0e6;
  }
  .blch_in{
    display: inline-block;
    width: 40%;
    height: 100px;
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
    height: 100px;
    width: 10%;
    line-height: 100px;
    margin-left: 10%;
    text-align: center;
    color: #7f8fa4;
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
  .blch_list{
    width: 100%;
    overflow: hidden;
  }
  .blch_list_in{
    display: inline-block;
    width: 40%;
    height: 35px;
    float: left;
    margin-left: 16px;
    padding-left: 5%;
  }
  .blch_list_in_tt{
    width: 100%;
    line-height: 35px;
    font-size: 16px;
  }
  .blch_list_st{
    display: inline-block;
    float: left;
    height: 35px;
    width: 10%;
    line-height: 35px;
    margin-left: 5%;
    text-align: center;
    color: #7f8fa4;
  }
  .blch_list_op{
    min-width: 80px;
    height: 35px;
    display: inline-block;
    float: right;
    margin-right: 8%;
    line-height: 35px;
  }
  .blch_list_op_btn button{
    width: 80px;
    height: 33px;
    background-color: #2faa60;
    border: none;
    border-radius: 2px;
    letter-spacing: 4px;
    outline: none;
    color: white;
  }
</style>
