<template>
<div>
  <button @click="getSelectedRows()">Get Selected Rows</button>
  <ag-grid-vue
  style="width: 600px; height: 500px;"
  class="ag-theme-balham"
  :columnDefs="columnDefsGo"
  :rowData="rowDataGo"
  :enableSorting="true"
  :enableFilter= 'true'
  rowSelection="multiple"
  :gridReady="onGridReady"
  >
  <!-- 
  ag-grid组件定义:  
  columnDefs：表头，
  rowData：表格内容区,
  enableSorting:启用排序 
  enableFilter:启用过滤
  rowSelection="multiple" :启用多选
  :gridReady="onGridReady": 在gridReady事件中存储对网格和列API的引用
  -->
  </ag-grid-vue>
</div>
</template>
<script>
// 导入ag-Grid
import { AgGridVue } from "ag-grid-vue"
export default {
  name: 'App',
  data() {
    return {
      // 表头
      columnDefsGo: null,
      // 表格内容区
      rowDataGo: null,
      gridApi: null,
      columnApi: null,
      // 启用分组！添加autoGroupColumnDef属性
      autoGroupColumnDef: null,
      
    }
  },
  methods: {
    onGridReady(params){
      // console.log(params)
      this.gridApi = params.api
      this.columnApi = params.columnApi
    },
    // 获取选中的数据
    getSelectedRows() {
      const selectedNodes = this.gridApi.getSelectedNodes()
      // 选中行数据
      const selectedData = selectedNodes.map( node => node.data );
      // console.log(selectedData)
      const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
      alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }
  },
  beforeMount() {
    this.columnDefsGo = [
      // headerName：表头名子， field：表头对应内容区的内容， checkboxSelection: true：添加选择框
      // suppressFilter: true 打开过滤 器
      {headerName: '品牌', field: 'make', checkboxSelection: true},
      {headerName: '国家', field: 'model',suppressFilter: true},
      {headerName: '单价', field: 'price'}
    ]
    // fetch('https://api.myjson.com/bins/15psn9')
    fetch('https://api.myjson.com/bins/ly7d1')
      .then(result => {
        return result.json()
      })
      .then(rowData => {
        // console.log(rowData)
        return this.rowDataGo = rowData
      })
    // 手动添加的数据  
    // this.rowDataGo = [
    //   {make: 'Toyota', model: '日本', price: 35000},
    //   {make: 'Ford', model: '美国', price: 32000},
    //   {make: 'Porsche', model: '德国', price: 72000}
    // ]
    this.autoGroupColumnDef = {
      headerName: '国家',
      field: 'model',
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {
          checkbox: true
      }
    }
  },
  components: {
    AgGridVue
  }
}
</script>
<style>
  .ag-theme-balham{
    margin: 0 auto;
    text-align: left
  }
</style>
