<template>
  <div>a的子组件
    <grandSun>

    </grandSun>  
  </div>
</template>
<script>
import Bus from "@/bus/index.js";
import grandSun from "./grandSun.vue"
export default {
  data() {
    return {
      c: "c路由"
    };
  },
  created() {
    // console.log(this.$route.query.id);
  },
  mounted() {
    Bus.$on("msg", e => {
      // console.log(`传来的数据是：${e}`); // ===  console.log(`传来的数据是：` + e)111
    });
  },
   components: {
    grandSun
  },
};
</script>
<style>
</style>
