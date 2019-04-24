<template>
  <div>
    C:{{c}}
    <input ref="getDom" @keyup="onKey()" @focus="onFocus" value="sdklfjsldjf">
    <button @click="onClick()">获取光标位置</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      c: "c路由"
    }
  },
  created() {
    // console.log(this.$route.query.id)
  },
  methods: {
    onClick() {
      var input = this.$refs.getDom
      // var e = event.srcElement
      // var r = e.createTextRange()
      input.focus()
      input.selectionStart = 3
      input.selectionEnd = 5
      // console.log(r)
    },
    onFocus() {
      // var e = event.srcElement
      // var r = e.createTextRange()
      // console.log(e.setSelectionRange(1, 1))
    },
    onKey() {
      // var input = this.$refs.getDom
      // var e = event.srcElement
      // var r = e.createTextRange()
      // console.log(r)
    }
  }
}
</script>
<style>
</style>
