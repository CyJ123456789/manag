<template>
  <div>
    <div class="dt"><span></span>发货</div>
    <!--保存按钮-->
    <div class="header">
      <div class="scech">
        <el-input class="spacing" v-model="query.conditions.numberLike" placeholder="订单号"></el-input>
        <el-input class="spacing" v-model="query.conditions.sellerCodeLike" placeholder="订单类型"></el-input>
        <el-input class="spacing" v-model="query.conditions.supplierCodeLike" placeholder="买家姓名"></el-input>
        <el-input class="spacing" v-model="query.conditions.commodityNameLike" placeholder="商品名称"></el-input>
        <el-date-picker
          class="spacing"
          v-model="query.conditions.submitStartDt"
          type="datetime"
          placeholder="创建时间开始"
          :picker-options="pickerOptions0">
        </el-date-picker>
        <div style="display: inline-block;position: relative;width: 1%;height: 20px">
          <span style="position: absolute;top: 10px;left: 5px;">&ndash;</span>
        </div>
        <el-date-picker
          class="spacing"
          v-model="query.conditions.submitOverDt"
          type="datetime"
          placeholder="创建时间结束">
        </el-date-picker>
        <el-button class="queryButton" type="primary">查询</el-button>
      </div>
      <!--商品信息-->
      <div class="RightShift">
        <el-table
          :data="obj.detail"
          border
          style="width: 100%;font-size: 18px">
          <el-table-column
            prop="commodityCode"
            label="订单号"
            min-width="25%"
            align="center">
          </el-table-column>
          <el-table-column
            prop="commodityName"
            label="订单类型"
            min-width="10%"
            align="center">
          </el-table-column>
          <el-table-column
            prop="commodityPrice"
            label="卖家姓名"
            min-width="10%"
            align="center">
          </el-table-column>
          <el-table-column
            prop="quantity"
            label="商品名称"
            min-width="15%"
            align="center">
          </el-table-column>
          <el-table-column
            prop="money"
            label="总金额"
            min-width="10%"
            align="center">
          </el-table-column>
          <el-table-column
            prop="createDt"
            label="创建时间"
            min-width="20%"
            align="center">
          </el-table-column>
          <el-table-column
            calss="bp"
            prop="submit"
            label="操作"
            min-width="9%"
            align="center">
            <template slot-scope="scope">
              <el-button type="text" size="medium">发货</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Consignment',
  data () {
    return {
      query: {
        'conditions': {
          'commodityCodeLike': '',
          'commodityNameLike': '',
          'numberLike': '',
          'sellerCodeLike': '',
          'submitOverDt': '',
          'submitStartDt': '',
          'supplierCodeLike': ''
        },
        'pn': 1,
        'ps': 10
      },
      obj: {
        detail: []
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
  }
}
</script>

<style scoped>
  .dt{
    width: 90%;
    height: 30px;
    line-height: 30px;
    text-align: left;
    margin-bottom: 20px;
    border-bottom: 1px solid #c4d5e0;
  }
  .dt span{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-left: 1px solid blue;
  }
  .header {
    width: 70%;
    height: 80vh;
    position: absolute;
    top: 110px;
    float: left;
  }
  .scech{
    width: 90%;
    margin-top: 20px;
    margin-left: 5%;
  }
  .spacing {
    width: 13%;
    margin-left: 0.5%;
  }
  .queryButton {
    width: 5%;
    height: 40px;
    margin-left: 0.5%;
  }
  .RightShift{
    width: 90%;
    margin-top: 30px;
    margin-left: 5%;
  }
</style>
