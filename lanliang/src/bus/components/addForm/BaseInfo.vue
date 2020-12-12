<template>
  <div class="form-container">
    <el-form ref="dataForm" class="table-error" :model="temp" :show-message="false" label-width="0">
      <div class="tableTitle" style="margin-top: 0;">{{ !isEdit ? '新增' : '编辑'}}物料</div>
      <table class="table-border enterprisesUsersTable table-check">
        <tbody>
          <tr>
            <th class="required">所属类型</th>
            <td>
              <el-form-item
                class="no-height"
                prop="type"
                :rules="$rules({ required: true, message: '请选择所属类型' })">
                <el-select v-model="temp.type" filterable>
                  <el-option v-for="item in typeList" :key="item.key" :label="item.label" :value="item.key">
                  </el-option>
                </el-select>
              </el-form-item>
            </td>
            <th class="required">设备IP</th>
            <td>
              <el-form-item  prop="ip" :rules="$rules({required:true, message:'请填写设备ip'})">
                <el-input v-model.trim="temp.ip" maxlength="20" clearable placeholder=""></el-input>
              </el-form-item>
            </td>
            <th>端口</th>
            <td>
              <el-form-item prop="unit">
                <el-input v-model.trim="temp.port" maxlength="20" clearable placeholder=""></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <th>设备名称</th>
            <td>
              <el-form-item class="no-height">
                <el-input v-model.trim="temp.name" maxlength="20" clearable placeholder=""></el-input>
              </el-form-item>
            </td>
            <th>设备编码</th>
            <td>
              <el-form-item class="no-height" >
                <el-input v-model.trim="temp.code" maxlength="20" clearable placeholder=""></el-input>
              </el-form-item>
            </td>
            <th >归属物料</th>
            <td>
              <el-form-item class="no-height">
                <el-select v-model="temp.materielIdList" multiple  filterable clearable>
                  <el-option v-for="item in materList" :key="item.id" :label="item.name" :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <th v-if="temp.type === 7">位置信息</th>
            <td v-if="temp.type === 7">
              <el-form-item class="no-height" >
                <el-input v-model.trim="temp.area" placeholder="请填写位置信息" :maxLength="20"></el-input>
              </el-form-item>
            </td>
            <th v-if="temp.type === 7">业务类型</th>
            <td style="border-right: 1px solid #e4e7ed;" v-if="temp.type === 7" >
              <el-form-item class="no-height">
                <el-select v-model="temp.businessType" filterable clearable>
                  <el-option v-for="item in businList" :key="item.value" :label="item.value" :value="item.label">
                  </el-option>
                </el-select>
              </el-form-item>
            </td>
            <th v-if="temp.type === 7"></th>
            <td style="border-right: 1px solid #e4e7ed;" v-if="temp.type === 7" ></td>
          </tr>
          <tr>
            <th>备注</th>
            <td colspan=5>
              <el-form-item class="no-height" >
                <el-input v-model.trim="temp.mark" type="textarea" maxlength="200" :autosize="{ minRows: 3, maxRows: 4 }" resize="none" placeholder="备注 4-200字"></el-input>
                <!-- <el-input v-model.trim="temp.mark" type="text" maxlength="200"  placeholder="备注 4-200字"></el-input> -->
              </el-form-item>
            </td>
          </tr>
        </tbody>
      </table>
    </el-form>
  </div>
</template>

<script>
// import { materialTypeList } from '@/api/setting/materiel'
export default {
  name: 'BaseInfo',
  props: {
    temp: {
      type: Object,
      default: {}
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    typeList: {
      type: Array,
      default: []
    },
    businList: {
      type: Array,
      default: []
    },
    materList: {
      type: Array,
      default: []
    }
  },
  created() {
    // this.materialTypeList()
    // this.getNcMaterielList(this.temp.label)
  },
  data() {
    return {
      // typeList: [],
      // new
      inputValue: '',
      inputVisible: false
    }
  },
  watch: {
    // 'temp.label': {
    //   handler(val) {
    //     if (val) {
    //       this.getNcMaterielList(val)
    //       if (val === 2) {
    //         this.temp.dynamicTags = []
    //       }
    //     }
    //   },
    //   deep: true
    // }
  },
  methods: {
    // 堆号处理
    // handleClose(tag) {
    //   this.temp.dynamicTags.splice(this.temp.dynamicTags.indexOf(tag), 1)
    // },
    // showInput() {
    //   this.inputVisible = true
    //   this.$nextTick(_ => {
    //     this.$refs.saveTagInput.$refs.input.focus()
    //   })
    // },
    // handleInputConfirm() {
    //   const inputValue = this.inputValue
    //   if (inputValue) {
    //     this.temp.dynamicTags.push(inputValue)
    //   }
    //   this.inputVisible = false
    //   this.inputValue = ''
    // },
    // materialTypeList() { // 获取物料类别信息
    //   materialTypeList().then(res => {
    //     res.data.forEach(i => {
    //       const label = Object.values(i)[0]
    //       const key = Number(Object.keys(i)[0])
    //       this.typeList.push({ label, key })
    //     })
    //   })
    // },
    validate(callback) {
      this.$refs.dataForm.validate(v => {
        callback(v)
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
  .textBox {
    padding-left: 10px
  }
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
