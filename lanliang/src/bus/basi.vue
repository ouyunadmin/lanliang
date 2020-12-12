<template>
  <div class="public-container bill-sign-container">
    <!-- 基本规则设置 -->
    <div class="wrapper">
      <div class="tableTitle" style="margin-top: 0; font-size: 18px;">基本参数设置 说明：设置规则策略后，后台会控制对应的作业操作</div>
      <div class="content basic-rule-cn">
        <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
          <el-tab-pane label="基本规则" name="first">
            <div class="basic-rule-le">
              <div>装车确认规则</div>
              <div>超时自动确认时间</div>
              <div>后台执行超时确认任务时间周期</div>
              <div>启用排队控制</div>
            </div>
            <div class="basic-rule-line"></div>
            <div class="basic-rule-rg">
              <div>
                <div class="basic-rule-span">
                  <el-checkbox v-model="CAR_RULE.ruleValue" :disabled="isEdit">启用装车单确认告知门卫控制出厂道闸</el-checkbox>
                </div>
              </div>
              <div>
                <div class="basic-rule-span">
                  <input-cleave v-model="SCHEDULE_EXECUTE_TIME.ruleValue" :min="1" :disabled="isEdit"></input-cleave>
                </div>
                <span class="basic-rule-span">单位：小时</span>
              </div>
              <div>
                <div class="basic-rule-span">
                  <el-input type="text" v-model="SCHEDULE_EXECUTE_TIME_UINT.ruleValue" :disabled="isEdit"></el-input>
                </div>
              </div>
              <div>
                <div class="basic-rule-span">
                  <el-checkbox v-model="DRIVER__QUEUE_CONTROLLER.ruleValue" :disabled="isEdit">判断袋装车道刷卡装车时是否按车辆排队序号控制,如果启用则控制,需按排队装车插队刷卡无效</el-checkbox>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="袋装控制" name="second">
            <div class="basic-rule-le">
              <div>补包规则</div>
              <div>袋装出厂确认</div>
            </div>
            <div class="basic-rule-line"></div>
            <div class="basic-rule-rg">
              <div>
                <span class="basic-rule-span">补包最大数：</span>
                <div class="basic-rule-span">
                  <input-cleave v-model="MAX_BAG_AMOUNT.ruleValue" :min="1" placeholder="请输入补包最大数" :disabled="isEdit"></input-cleave>
                </div>
                <span class="basic-rule-span">单位：包</span>
              </div>
              <div>
                <div class="basic-rule-span">
                  <el-checkbox v-model="BGA_CONFIRM_SWITCH.ruleValue" :disabled="isEdit">袋装出厂确认控制开关</el-checkbox>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="散装控制" name="third">
            <div class="basic-rule-le">
              <div>散装下料</div>
              <div>刷卡重量限制</div>
              <div>散装最大允装数量</div>
            </div>
            <div class="basic-rule-line"></div>
            <div class="basic-rule-rg">
              <div>
                <span class="basic-rule-span">最大刷卡次数：</span>
                <div class="basic-rule-span">
                  <input-cleave v-model="MAX_SWIPE_AMOUNT.ruleValue" :min="1" placeholder="请输入最大刷卡次数" :disabled="isEdit"></input-cleave>
                </div>
              </div>
              <div>
                <div class="basic-rule-span">
                  <input-cleave v-model="BULK_LIMIT_WEIGHT.ruleValue" :min="1" placeholder="请输入补包最大数" :disabled="isEdit"></input-cleave>
                </div>
                <span class="basic-rule-span">单位：吨</span>
              </div>
              <div>
                <span class="basic-rule-span">
                  <el-checkbox @change="isChange(BULK_MAX_LOAD_AMOUNT_ON_OFF.ruleValue)" v-model="BULK_MAX_LOAD_AMOUNT_ON_OFF.ruleValue" :disabled="isEdit">设置所有车辆最大装载量</el-checkbox>
                </span>
                <div class="basic-rule-span">
                  <input-cleave :disabled="isMax" v-model="BULK_MAX_LOAD_AMOUNT.ruleValue" :min="1" :isDecimal="0" :isMaxLength="2" placeholder="请输入散装最大允装数量" ></input-cleave>
                </div>
                <span class="basic-rule-span">单位：吨</span>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="原材料" name="fourth">
            <div class="basic-rule-le">
              <div>RFID读卡离线时间</div>
              <div>RFID打卡有效设置</div>
            </div>
            <div class="basic-rule-line"></div>
            <div class="basic-rule-rg">
              <div>
                <div class="basic-rule-span">
                  <input-cleave v-model="RFID_READ_CARD_OFF_LINE_TIME.ruleValue" :min="1" placeholder="请输入最大刷卡次数" :disabled="isEdit"></input-cleave>
                </div>
                 <span class="basic-rule-span"><span style="margin-right: 20px;">S</span>判断RFID在线读卡时间，如果超过设定时间未收到电子标签频率，表示设备不在线。</span>
              </div>
              <div>
                <div class="basic-rule-span">
                  <input-cleave v-model="RFID_IN_EFFECT_SETTING.ruleValue" :min="1" placeholder="请输入补包最大数" :disabled="isEdit"></input-cleave>
                </div>
                <span class="basic-rule-span"><span style="margin-right: 20px;">次</span>判断电子标签打卡 RFID，如果在设定时间未达到设置频次和阈值，忽略此处读卡。</span>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="取样控制" name="five">
            <div class="basic-rule-le basic-rule-bt-div">
              <div class="basic-rule-head">水泥取样</div>
              <div>取样方式：</div>
              <div>控制阈值：</div>
              <div>采样时长：</div>
              <div>采样次数：</div>
              <div class="basic-rule-head">原材料取样</div>
              <div>取样方式：</div>
              <div>控制阈值：</div>
              <div>采样时长：</div>
              <div>采样次数：</div>
              <!-- <div>间隔多少：</div> -->
            </div>
            <div class="basic-rule-line" style="height: 580px;"></div>
            <div class="basic-rule-rg basic-rule-bt-div">
              <!-- 水泥取样 -->
              <div><div class="basic-rule-span" style="height: 30px;"></div></div>
              <div>
                <div class="basic-rule-span">
                  <el-select v-model="CEMENT_SAMPLE_TYPE.ruleValue" placeholder="请选择" :disabled="isEdit">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div>
                <div class="basic-rule-span">
                  <input-cleave v-model="CEMENT_SAMPLE_THRESHOLD_VALUE.ruleValue" :min="1" placeholder="" :disabled="isEdit"></input-cleave>
                </div>
                <span class="basic-rule-span" v-if="CEMENT_SAMPLE_TYPE.ruleValue === '按吨位'">吨</span>
                <span class="basic-rule-span" v-if="CEMENT_SAMPLE_TYPE.ruleValue === '按车次'">车次</span>
                <span class="basic-rule-span" v-if="CEMENT_SAMPLE_TYPE.ruleValue === '按时间'">分</span>
                <!-- <span class="basic-rule-span">天</span> -->
              </div>
              <div>
                <div class="basic-rule-span">
                  <input-cleave v-model="CEMENT_SAMPLE_TIME.ruleValue" :min="1" placeholder="" :disabled="isEdit"></input-cleave>
                </div>
                <span class="basic-rule-span">S</span>
              </div>
              <div>
                <div class="basic-rule-span">
                  <input-cleave v-model="CEMENT_SAMPLE_FREQUENCY.ruleValue" :min="1" placeholder="" :disabled="isEdit"></input-cleave>
                </div>
                <span class="basic-rule-span">次</span>
              </div>
              <!-- 原材料取样 -->
              <div><div class="basic-rule-span" style="height: 30px;"></div></div>
              <div>
                <div class="basic-rule-span">
                  <el-select v-model="RAW_SAMPLE_TYPE.ruleValue" placeholder="请选择" :disabled="isEdit">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div>
                <div class="basic-rule-span">
                  <input-cleave v-model="RAW_SAMPLE_THRESHOLD_VALUE.ruleValue" :min="1" placeholder="" :disabled="isEdit"></input-cleave>
                </div>
                <span class="basic-rule-span" v-if="RAW_SAMPLE_TYPE.ruleValue === '按吨位'">吨</span>
                <span class="basic-rule-span" v-if="RAW_SAMPLE_TYPE.ruleValue === '按车次'">车次</span>
                <span class="basic-rule-span" v-if="RAW_SAMPLE_TYPE.ruleValue === '按时间'">分</span>
              </div>
              <div>
                <div class="basic-rule-span">
                  <input-cleave v-model="RAW_SAMPLE_TIME.ruleValue" :min="1" placeholder="" :disabled="isEdit"></input-cleave>
                </div>
                <span class="basic-rule-span">S</span>
              </div>
              <div>
                <div class="basic-rule-span">
                  <input-cleave v-model="RAW_SAMPLE_FREQUENCY.ruleValue" :min="1" placeholder="" :disabled="isEdit"></input-cleave>
                </div>
                <span class="basic-rule-span">次</span>
              </div>
              <!-- <div>
                <div class="basic-rule-span">
                  <input-cleave v-model="RAW_SAMPLE_INTERVAL.ruleValue" :min="1" placeholder="" :disabled="isEdit"></input-cleave>
                </div>
                <span class="basic-rule-span"><span style="margin-right: 20px;">H</span>、重新取样，主要针对日批次取样</span>
              </div> -->
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="form-container">
      <div class="footer-box">
        <el-button :loading="loading" type="primary" @click="edit">编辑</el-button>
        <el-button v-if="elements['rule_save']" :loading="loading" type="primary" @click="save">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { getList, updateRule, sampleTypeList } from '@/api/setting/basicRule'
import { mapGetters } from 'vuex'

export default {
  name: 'basicRule',
  data() {
    return {
      options: [],
      isEdit: true,
      // 补包规则
      MAX_BAG_AMOUNT: {
        ruleValue: 10
      },
      // 散装下料
      MAX_SWIPE_AMOUNT: {
        ruleValue: 3
      },
      // 装车确认规则
      CAR_RULE: {
        ruleValue: false
      },
      // 是否启用排队控制
      DRIVER__QUEUE_CONTROLLER: {
        ruleValue: false
      },
      // 下次刷卡重量限制
      BULK_LIMIT_WEIGHT: {
        ruleValue: ''
      },
      // 超时自动确认时间
      SCHEDULE_EXECUTE_TIME: {
        ruleValue: ''
      },
      // 超时确认后台任务执行时间
      SCHEDULE_EXECUTE_TIME_UINT: {
        ruleValue: ''
      },
      // 袋装出厂确认
      BGA_CONFIRM_SWITCH: {
        ruleValue: ''
      },
      // 是否允许散装最大允装数量
      BULK_MAX_LOAD_AMOUNT_ON_OFF: {
        ruleValue: ''
      },
      // 散装最大允装数量
      BULK_MAX_LOAD_AMOUNT: {
        ruleValue: ''
      },
      // RFID读卡离线时间
      RFID_READ_CARD_OFF_LINE_TIME: {
        ruleValue: ''
      },
      // RFID打卡有效设置
      RFID_IN_EFFECT_SETTING: {
        ruleValue: ''
      },
      // 水泥取样
      CEMENT_SAMPLE_TYPE: {
        ruleValue: ''
      },
      CEMENT_SAMPLE_THRESHOLD_VALUE: {
        ruleValue: ''
      },
      CEMENT_SAMPLE_TIME: {
        ruleValue: ''
      },
      CEMENT_SAMPLE_FREQUENCY: {
        ruleValue: ''
      },
      // CEMENT_SAMPLE_INTERVAL: {
      //   ruleValue: ''
      // },
      // 原材料
      RAW_SAMPLE_TYPE: {
        ruleValue: ''
      },
      RAW_SAMPLE_THRESHOLD_VALUE: {
        ruleValue: ''
      },
      RAW_SAMPLE_TIME: {
        ruleValue: ''
      },
      RAW_SAMPLE_FREQUENCY: {
        ruleValue: ''
      },
      // RAW_SAMPLE_INTERVAL: {
      //   ruleValue: ''
      // },
      isMax: false,
      loading: false,
      activeName: 'first'
    }
  },
  computed: {
    ...mapGetters(['elements'])
  },
  mounted() {
    getList().then(res => {
      const list = res.data
      list.forEach(i => {
        if (this[i.ruleType]) {
          Object.assign(this[i.ruleType], {
            id: i.id,
            ruleType: i.ruleType,
            ruleValue: (i.ruleType === 'CAR_RULE' || i.ruleType === 'BGA_CONFIRM_SWITCH' || i.ruleType === 'BULK_MAX_LOAD_AMOUNT_ON_OFF' || i.ruleType === 'DRIVER__QUEUE_CONTROLLER') ? JSON.parse(i.ruleValue) : i.ruleValue
          })
        }
        if (i.ruleType === 'BULK_MAX_LOAD_AMOUNT_ON_OFF') {
          this.isChange(JSON.parse(i.ruleValue))
        }
      })
    })
    this.getOption()
  },
  methods: {
    isChange(val) {
      if (!val) {
        this.BULK_MAX_LOAD_AMOUNT.ruleValue = ''
        this.isMax = true
      } else {
        this.isMax = false
      }
    },
    getOption() {
      this.option = []
      sampleTypeList().then(res => {
        res.data.map(e => {
          for (const k in e) {
            const o = { value: '', label: '' }
            o.value = k
            o.label = e[k]
            this.options.push(o)
          }
        })
        // console.log(this.options)
      })
    },
    handleClick(tab, event) {
      // console.log('tab', tab)
    },
    // 编辑
    edit() {
      this.isEdit = false
    },
    save() { // 保存
      const CAR_RULE = Object.assign({}, this.CAR_RULE)
      CAR_RULE.ruleValue = JSON.stringify(this.CAR_RULE.ruleValue)

      const BGA_CONFIRM_SWITCH = Object.assign({}, this.BGA_CONFIRM_SWITCH)
      BGA_CONFIRM_SWITCH.ruleValue = JSON.stringify(this.BGA_CONFIRM_SWITCH.ruleValue)

      const DRIVER__QUEUE_CONTROLLER = Object.assign({}, this.DRIVER__QUEUE_CONTROLLER)
      DRIVER__QUEUE_CONTROLLER.ruleValue = JSON.stringify(this.DRIVER__QUEUE_CONTROLLER.ruleValue)

      const BULK_MAX_LOAD_AMOUNT_ON_OFF = Object.assign({}, this.BULK_MAX_LOAD_AMOUNT_ON_OFF)
      BULK_MAX_LOAD_AMOUNT_ON_OFF.ruleValue = JSON.stringify(this.BULK_MAX_LOAD_AMOUNT_ON_OFF.ruleValue)

      const data = [this.MAX_BAG_AMOUNT, this.MAX_SWIPE_AMOUNT, CAR_RULE, this.BULK_LIMIT_WEIGHT, this.DRIVER__QUEUE_CONTROLLER,
        this.SCHEDULE_EXECUTE_TIME, this.SCHEDULE_EXECUTE_TIME_UINT, BGA_CONFIRM_SWITCH, BULK_MAX_LOAD_AMOUNT_ON_OFF,
        this.BULK_MAX_LOAD_AMOUNT, this.RFID_READ_CARD_OFF_LINE_TIME, this.RFID_IN_EFFECT_SETTING, this.CEMENT_SAMPLE_TYPE,
        this.CEMENT_SAMPLE_FREQUENCY, this.CEMENT_SAMPLE_TIME, this.CEMENT_SAMPLE_THRESHOLD_VALUE,
        this.RAW_SAMPLE_TYPE, this.RAW_SAMPLE_THRESHOLD_VALUE, this.RAW_SAMPLE_FREQUENCY,
        this.RAW_SAMPLE_TIME]
      if (!this.isMax) {
        if (!this.BULK_MAX_LOAD_AMOUNT.ruleValue) {
          this.$message.error('请输入目前散装最大允装量，不予为空')
          return
        }
      }
      this.loading = true
      updateRule(data).then(({ message }) => {
        this.loading = false
        this.isEdit = true
        this.$message({ type: 'success', message, showClose: true })
      })
        .catch(() => {
          this.loading = false
          this.isEdit = true
        })
    }
  }
}
</script>
<style lang="scss" scoped>
  .basic-rule-cn{
    padding: 15px 0 90px 0px;
    position: relative;
    overflow: hidden;
    .basic-rule-le{
      float: left;
      text-align: right;
      margin-right: 10px;
      padding-top: 5px;
      &>div{
        margin-bottom: 50px;
        font-size: 14px;
        line-height: 30px;
      }
    }
    .basic-rule-line{
      float: left;
      width: 1px;
      background-color: #7d7878;
      height: 520px;
    }
    .basic-rule-rg{
      float: left;
      margin-left: 20px;
      padding-top: 5px;
      &>div{
        margin-bottom: 50px;
        font-size: 14px;
        overflow: hidden;
      }
      .basic-rule-span{
        float: left;
        line-height: 30px;
        margin-right: 5px;
        position: relative;
      }
    }
    .basic-rule-bt-div{
      &>div{
        margin-bottom: 25px !important;
      }
    }
    .basic-rule-head{
      background: #eee;
      text-align: center;
      padding: 0px 12px;
    }
  }
</style>
