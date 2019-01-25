<template>
  <div>
    aaaa
    <!-- <div @click="aa">h点</div> -->
  </div>
</template>
<script>
export default {
  methods: {
    aa() {
      // this.$store.commit('bbisShow',2)
      // this.$store.dispatch('getbbShow',2)
      // console.log(this.$store.getters.getisShow)
    }
  },
  watch: {
    'this.$store.getters.getisShow': function(val){
      // console.log(val)
    }
  }
  // id: "ORGA19010200163001A000"
}
</script>
<style >

</style>
