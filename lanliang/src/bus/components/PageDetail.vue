<template>
  <div>
    <base-info ref="baseInfo" :typeList="typeList" :businList="businList" :materList="materList" :temp="temp" :isEdit="isEdit" v-loading="pageLoading"></base-info>
    <div class="form-container">
      <div class="footer-box">
        <el-button type="primary" v-if="!isEdit" :loading="loading" @click.native="handleAdd">新增</el-button>
        <el-button type="primary" v-else :loading="loading" @click.native="save">保存</el-button>
        <el-button :loading="loading" @click.native="refresh">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// getSupplier,
// import { addMateriel, detail, updateMateriel } from '@/api/setting/materiel'
import { BaseInfo } from './addForm'
// import { isInArray } from '@/utils'
import { cloneDeep } from 'lodash'
import { getDetail, addEquipment, equipmentTypeList, updateEquipment, businessTypeList } from '@/api/setting/equipment'
import { queryList } from '@/api/setting/materiel'
const defaultForm = {
  ip: '',
  port: '', // 端口
  name: '',
  type: '',
  code: '',
  materielIdList: [], // 归属物料
  businessType: '', // 业务类型
  area: '', // 位置信息
  mark: ''
}
export default {
  name: 'wagonMessageAddWeighingScaleWagon',
  components: {
    BaseInfo
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      typeList: [],
      businList: [],
      materList: [],
      pageLoading: false,
      loading: false,
      temp: JSON.parse(JSON.stringify(defaultForm))
    }
  },
  mounted() {
    this.getOptions()
  },
  watch: {
    '$route.query.id': {
      handler(val) {
        if (val) {
          this.getData()
        }
      },
      immediate: true
    }
  },
  methods: {
    // 枚举
    getOptions() {
      equipmentTypeList().then(res => {
        const list = []
        res.data.forEach(i => {
          const label = Object.values(i)[0]
          const key = Number(Object.keys(i)[0])
          list.push({ label, key })
        })
        this.typeList = list
      })
      businessTypeList().then(res => {
        this.businList = res.data.map(e => {
          const label = Object.keys(e)[0]
          // const value = Object.values(e)[0]
          return { label: label, value: e[label] }
        })
        // console.log(this.businList)
      })
      queryList({ pageNum: 1, pageSize: 10000 }).then(res => {
        this.materList = res.data.list
      })
    },
    // 新增
    handleAdd() {
      this.$refs.baseInfo.validate(valid => {
        if (!valid) return
        this.loading = true
        const temp = cloneDeep(this.temp)
        addEquipment(temp).then(({ message }) => {
          this.loading = false
          this.$message({
            message: '增加成功',
            type: 'success'
          })
          this.refresh()
        })
          .catch(() => {
            this.loading = false
          })
      })
    },
    // 编辑保存
    save() {
      this.$refs.baseInfo.validate(valid => {
        if (!valid) return
        this.btnLoading = true
        const temp = cloneDeep(this.temp)
        updateEquipment(temp).then(({ message }) => {
          this.btnLoading = false
          this.$message({
            message: '修改成功',
            type: 'success'
          })
          this.refresh()
        })
          .catch(() => {
            this.btnLoading = false
          })
      })
    },
    // 编辑获取
    getData() { // 赋值 编辑时
      this.pageLoading = true
      const id = this.$route.query.id
      getDetail({ id: id }).then(res => {
        this.pageLoading = false
        const { id, ip, code, port, name, type, mark, materielList, area, businessType } = res.data
        Object.assign(this.temp, {
          id,
          ip,
          code,
          name,
          type,
          mark,
          port,
          area,
          businessType
        })
        this.temp.materielIdList = materielList.map(e => {
          return e.id
        })
      }).catch(() => {
        this.pageLoading = false
      })
    },
    refresh() { // 关闭并跳转刷新详情
      this.$store.dispatch('delVisitedViews', this.$route).then((views) => {
        this.$router.push({ name: 'facilityManage' })
      })
    }
  }
}
</script>

<style scoped>
  .public-container .wrapper .content {
    min-height: calc(100vh - 88px - 92px) !important;
    padding-bottom: 50px;
  }
</style>
