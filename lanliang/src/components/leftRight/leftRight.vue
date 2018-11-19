<template>
    <div >
        <div ref="ice" @keydown="down">
            <input ref="in1" type='text'>
            <input ref="in2" type='text'>
            <input ref="in3" type='text'>
            <!-- <input ref="in4" type='text'> -->
            <select ref="in4" name="" id="">
              <option value="1">11</option>
              <option value="2">22</option>
              <option value="3">33</option>
            </select>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      currentCol: 0,
      objtab: null
    };
  },
  methods: {
    // 按键
    down(e) {
      e = window.event || e;
      switch (e.keyCode) {
        case 37: //左键
          this.currentCol--;
          this.changeItem(e);
          break;
        case 39: //右键
          this.currentCol++;
          this.changeItem(e);
          break;
      }
    },
    changeItem(e) {
      this.objtab = this.$refs.ice;
      if(this.currentCol < 0 ){
        this.currentCol = 0
      }
      if(this.currentCol > this.objtab.children.length-1){
        this.currentCol = this.objtab.children.length-1
      }
      // this.objtab.children[this.currentCol].select();
      if(this.currentCol == 0){
        this.$refs.in1.select()
      }else if(this.currentCol == 1){
        this.$refs.in2.select()
      }else if(this.currentCol == 2){
        this.$refs.in3.select()
      }else if(this.currentCol == 3){
        this.$refs.in4.select()
      }
    }
  },
  mounted() {
    // this.$refs.ice.children[1].select();
    this.$refs.in1.select()
  },
};
</script>
<style>
input {
  /* display: block */
}
</style>
