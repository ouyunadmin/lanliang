<template>
  <div>
    a的孙组件
  </div>
</template>
<script>
import Bus from "@/bus/index.js";
export default {
  created() {
     Bus.$on("msg", e => {
      console.log(`ye传来的数据是：${e}`); // ===  console.log(`传来的数据是：` + e)111
    });
  },
}
</script>

