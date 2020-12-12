<template>
  <div>
    C:{{c}}
    <input ref="getDom" @keyup="onKey()" @focus="onFocus" value="sdklfjsldjf">
    <button @click="onClick()">获取光标位置</button>
    <div>
      flex川宁、科轮、
    </div>
    <div class="flex-cn">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
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
.flex-cn{
  width: 1000px;
  height: 700px;
  margin: 20px auto;
  display: flex;
  background: rgba(200,0,0,.4);
  justify-content: space-between;
  align-items: center;
}
.flex-cn div{
  width:200px;
  height:200px;
  background: #ccc;
  border-radius: 10px;
}
</style>
