<template>
  <div style="height:1000px">
    A：{{a}}
    <div @click="onC" style="cursor: pointer">链接b跳转</div>
    <div @click="onCn" style="cursor: pointer">链接c跳转</div>
    <button @click="aSunClick">进入A的子组件</button>
    <a-sun v-show="isTrue">a的子组件</a-sun>
  </div>
</template>
<script>
import aSun from "./aSun.vue"
import Bus from "@/bus/index.js"

// import { jse } from '@/api/jse.js'
// import JsEncrypt from 'jsencrypt/bin/jsencrypt'
const privateKey = '私钥'
const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCyllCigI5N4m4++gVoFqqf+IpCAN1Daxo9pLeapl4hN7ST2S5GtKY43l2VWW3Xo6/c7HDHwOTSb1uQCx5yojAn/ZK+EgIUMxzjf9b+2k/rswhyF6GpTDuDHo4t/ac2znyjU9bh848jGV7N+XP8wyHgTgyJEdsQtDEHprvDCioQdwIDAQAB';
export default {
  data() {
    return {
      isTrue: false,
      a: "a路由",
      newDataCity: [
        {
          list: [
            {
              name: "北京"
            },
            {
              name: "上海"
            }
          ]
        },
        {
          list: [
            {
              name: "商丘"
            },
            {
              name: "杭州"
            }
          ]
        }
      ],
      arr: [
        { id: '11', name: 'A' },
        { id: '22', name: 'B' },
        { id: '33', name: 'C' },
      ],
      contrast: [
        { id: '44', name: 'D' },
        { id: '33', name: 'f' },
        { id: '22', name: 'E' },
      ],
      numArr: [ 8, 3, 4, 1, 6 ]
    }
  },
  mounted() {
    this.filterArr(this.arr)
    this.dbFilterArr(this.arr, this.contrast)
    // 滚动监听
    window.addEventListener("scroll", this.handleScroll, true)
    this.demoData()
    this.bubbleSort(this.numArr)
  },
  components: {
    aSun
  },
  methods: {
    // 单数组过滤重复数据
    filterArr(val) {
      const data = val.length ? val : []
      const hash = {}
      const arrTemp = []
      for(var i = 0; i < data.length; i++) {
        if (!hash[data[i].id]) {
          hash[data[i].id] = true
          arrTemp.push(data[i])
        }
      }
      // console.log('单数组过滤重复数据：', arrTemp)
    },
    // 双数组过滤重复数据
    dbFilterArr(newArr, oldArr) {
      const arr1 = newArr.length ? newArr : []
      const arr2 = oldArr.length ? oldArr : []
      arr1.forEach((e, i) => {
        arr2.forEach((k, j) => {
          if (e.id === k.id) {
            arr2.splice(j, 1)
          }
        })
      })
      // console.log('双数组过滤重复数据:', arr2)
    },
    // 冒泡排序
    bubbleSort(val) {
      let data = val.length ? val : []
      let tempData = ''
      let index = 0
      for (var i = 0; i < data.length; i++) {
        console.log('循环次数：',index += 1)
        for (var k = 0; k < data.length - i; k++) {
           if (data[k] < data[k + 1]) {
              tempData = data[k + 1]
              data[k + 1] = data[k]
              data[k] = tempData
           }
        }
      }
      console.log('冒泡排序:', data)
    },
    handleScroll: function() {
      // 滚动方法 .
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      // console.log(scrollTop)
      // console.log(document.body.scrollHeight)
    },
    onC() {
      this.$router.push({
        // 不在url中传值 .
        name: "b",
        params: {
          id: "bbbb"
        }
      })
      //   this.$bus.emit('myData',99988) // 通过BUS总线往B传值
    },
    onCn() {
      this.$router.push({
        // 在url中传值 .
        path: "c",
        query: {
          id: "cccc"
        }
      })
    },
    demoData() {
      let newData = []
      this.newDataCity.forEach(e => {
        // console.log(e)
        e.list.forEach(item => {
          // console.log(item.name)
          newData.push(item.name)
        })
      })
      // console.log(newData)
    },
    aSunClick() {
      // console.log(this.$jsEncrypt)
      // 加密
      let encrypted = this.$jsEncrypt.encrypt('Hello, world')
      // console.log('加密:', encrypted)
      // 解密
      // 解密公钥
      // let decrypt = this.$jsEncrypt.decrypt('Hello, world')
      // console.log('解密:', decrypt)

      // 输出加密结果
      // Bus.$emit('msg', '我要传给兄弟组件们，你收到没有')
      // Bus.$emit("msg", "我要传给兄弟组件们，你收到没有")
      // this.isTrue = true
    }
  }
}
</script>
<style>
</style>
