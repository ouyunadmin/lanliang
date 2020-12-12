<template>
  <div class="form-container public-container">
    <div class="wrapper">
  		<div class="content">
        <div class="tableTitle" style="margin-top: 0;">物料详情</div>
        <table class="table-border enterprisesUsersTable table-check supplier-table-w-pd">
          <colgroup>
            <col width="10%">
            <col width="40%">
            <col width="10%">
            <col width="40%">
          </colgroup>
          <tbody>
            <tr>
              <th class="">物料类型</th>
              <td>
                <span>{{dataObj.labelDes}}</span>
              </td>
              <th class="">物料名称</th>
              <td>
                <span>{{dataObj.name}}</span>
              </td>
            </tr>
            <tr>
              <th class="">物料编码</th>
              <td>
                <span>{{dataObj.code}}</span>
              </td>
              <th class="">单位</th>
              <td>
                <span>{{dataObj.unit}}</span>
              </td>
            </tr>
            <tr>
              <th class="">型号</th>
              <td>
                <span>{{dataObj.type}}</span>
              </td>
              <th class="">规格</th>
              <td>
                <span>{{dataObj.standard}}</span>
              </td>
            </tr>
            <tr>
              <th class="">物料简称</th>
              <td>
                <span>{{dataObj.simpleName}}</span>
              </td>
              <th class="">物料分类</th>
              <td>
                <span>{{dataObj.category}}</span>
              </td>
            </tr>
            <tr v-if="dataObj.label === 2">
              <th class="">堆号</th>
              <td colspan="3">
                <span>{{dataObj.stackNumber}}</span>
              </td>
            </tr>
            <tr>
              <th class="">备注</th>
              <td colspan="3">
                <span>{{dataObj.mark}}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="form-container">
          <div class="footer-box">
            <el-button @click.native="refresh">关闭</el-button>
          </div>
        </div>
  		</div>
    </div>
  </div>
</template>

<script>
import { detail } from '@/api/setting/materiel'
export default {
  name: 'detailFacility',
  data() {
    return {
      dataObj: {}
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    refresh() {
      this.$store.dispatch('delVisitedViews', this.$route).then((views) => {
        // if (isInArray(this.$store.getters.cachedViews, 'supplierSetting')) {
        //   setTimeout(() => {
        //     this.$parent.$parent.$refs.routerview.handleFilter()
        //   }, 300)
        // }
        this.$router.push({ name: 'facilityManage' })
      })
    },
    getData() {
      const id = this.$route.query.id
      detail({ id }).then(res => {
        this.dataObj = res.data
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @media screen and (min-width:1300px) and (max-width:1900px){
    .row-fied{
      width: 23%;
    }
  }
  @media screen and (min-width:1900px) {
    .row-fied{
      width: 16.6%;
    }
  }
  .enterprisesUsersTable {
    th {
      width: 120px;
      padding: 6px 0;
      font-weight: 600;
      color: #333;
    }
    td {
      padding: 0;
    }
  }
  .required:before {
    content: '*';
    color: #f56c6c;
    margin-right: 4px;
  }
  .el-date-editor {
    width: 100%;
  }
  .supplier-table-w-pd td{
    padding-left: 10px;
  }
</style>
