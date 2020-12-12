<template>
  <div class="public-container bill-sign-container">
    <!-- 设备台账管理 -->
    <div class="wrapper">
      <div class="content">
        <div class="search">
          <el-input style="width: 195px; margin-right: 5px" class="inp" v-model.trim="listQuery.name" placeholder="设备名称" size="mini" clearable :maxlength="50"></el-input>
          <el-select v-model="listQuery.type" filterable clearable placeholder="设备类型">
            <el-option v-for="item in typeList" :key="item.key" :label="item.label" :value="item.key">
            </el-option>
          </el-select>
          <el-button type="primary" v-wave size="mini" @click="handleFilter()">查询</el-button>
        </div>
        <div class="button-operation">
          <el-button @click="handleAdd" v-if="elements['equipment_add']" type="primary" class="white" plain size="mini" :loading="btnLoading">新增</el-button>
          <el-button @click="handleEdit" v-if="elements['equipment_edit']" type="primary" class="white" :disabled="editDisabled" plain size="mini" :loading="btnLoading">编辑</el-button>
          <!-- <el-button  v-if="elements['materiel_detail']"  @click="handleDetail" type="primary" class="white" :disabled="detailDisabled" plain size="mini" :loading="btnLoading">详情</el-button> -->
        </div>
        <div class="gridList">
          <my-ag-grid ref="signGrid" isField="设备台账管理" rowSelection="single" :gridCfg="gridCfg" :isList="gridList" @onRowSelected="onRowSelected" :loading="loading"></my-ag-grid>
        </div>
        <div class="page">
          <div class="pagination">
            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.pageNum"
                           :page-sizes="[20,30,50]" :page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { pageAction } from '@/mixins'
  import { queryList, equipmentTypeList } from '@/api/setting/equipment'
  import { addRoutesForm } from '@/utils/webRouter' // 添加路由
  export default {
    mixins: [pageAction], // 分页通用方法 参数
    name: 'facilityManage',
    data() {
      return {
        btnLoading: false,
        loading: false,
        typeList: [],
        listQuery: {
          name: '',
          code: ''
        },
        gridCfg: [
          {
            'headerName': '',
            'suppressSorting': true,
            'suppressMenu': true,
            'suppressMovable': true,
            'width': 30,
            'pinned': 'left',
            'suppressResize': true,
            'suppressFilter': true,
            'checkboxSelection': true,
            'headerCheckboxSelection': true
          }
        ]
      }
    },
    computed: {
      editDisabled() {
        return !(this.selectRowData.length === 1)
      },
      detailDisabled() {
        return !(this.selectRowData.length === 1)
      }
    },
    created() {
      this.getOptions()
    },
    methods: {
      getOptions() {
        equipmentTypeList().then(res => {
          const list = []
          res.data.forEach(i => {
            const label = Object.values(i)[0]
            const key = Object.keys(i)[0]
            list.push({ label, key })
          })
          this.typeList = list
        })
      },
      handleAdd() { // 新增操作
        this.$router.push({ name: 'addFacility' })
      },
      // handleDetail() { // 详情
      //   addRoutesForm({ name: 'detailFacility', 'query': { 'id': this.selectRowData[0].id }})
      // },
      handleEdit() { // 编辑操作
        addRoutesForm({ 'name': 'editFacility', 'query': { 'id': this.selectRowData[0].id }})
      },
      //  获取接口列表
      getList() {
        const httpParams = JSON.parse(JSON.stringify(this.listQuery))
        this.loading = true
        queryList(httpParams).then(response => {
          this.loading = false
          const { data: { list, total }} = response
          this.selectRowData = []
          this.gridList = list
          this.total = total
        }).catch(() => {
          this.loading = false
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>
