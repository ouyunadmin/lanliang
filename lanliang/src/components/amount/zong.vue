<template>
  <div>
    <ul>
      <li @click="onaa">aa</li>
      <li @click="onbb">bb</li>
      <li @click="oncc">cc</li>
    </ul>
    <aa v-if="isaa"></aa>
    <bb v-if="isbb"></bb>
    <cc v-if="iscc"></cc>
    <div v-if="!isShowaa">
      在aa的时候不展示
    </div>
  </div>
</template>
<script>
import aa from './aa.vue'
import bb from './bb.vue'
import cc from './cc.vue'
export default {
  data() {
    return {
      isaa: false,
      isbb: false,
      iscc: false,
      isShowaa: ''
    }
  },
  methods: {
    onaa() {
      this.isaa = true,
      this.isbb = false,
      this.iscc = false
    },
    onbb() {
      this.isaa = false,
      this.isbb = true,
      this.iscc = false,
      this.$store.dispatch('getbbShow','')
      // this.$store.commit('bbisShow',2)
      // this.$store.dispatch('getbbShow',2)
      // console.log(this.$store.getters.getisShow)
    },
    oncc() {
      this.isaa = false,
      this.isbb = false,
      this.iscc = true,
      this.$store.dispatch('getbbShow','')
    },
  },
  components: {
    aa,bb,cc
  },

  created() {
    // console.log(this.$store.getters.getisShow)
  },
  watch: {
    'isShow': function(val){
      // console.log(val)
      this.isShowaa = val
    }
  },
  computed: {
    isShow() {
      // console.log(this.$store.getters.getisShow)
      return this.$store.getters.getisShow?this.$store.getters.getisShow:''
    }
  }
}
</script>
<style>
  li{
    cursor: pointer;
  }
</style>
