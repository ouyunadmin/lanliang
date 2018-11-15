<template>
    <div>
        子:{{data}}
        <div style="cursor: pointer" @click="onC">传给父</div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      data: this.trun,
      sunData: "子数据"
    };
  },
  methods: {
    onC() {
      this.$emit('chuan', this.sunData);
    }
  },
  props: ["trun"]
};
</script>
<style>
</style>
