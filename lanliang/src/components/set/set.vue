<template>
  <div>
    要发送的数据
    <button @click="onC">发送</button>
    <popwin v-if="show"></popwin>
  </div>
</template>
<script>
import popwin from "./popwin.vue";
export default {
  data() {
    return {
      demo: "要发送的数据",
      show: false,
      x: "actions",
      log: {
        to: "qweqwe"
      }
    };
  },
  created() {
    this.$store.commit("addData", this.demo);
    // console.log(this.$store.dispatch('addCurrent')) // action
  },
  // context.state
  components: {
    popwin
  },
  methods: {
    onC(x = 0, y = 1) {
      this.show = true;
      // window.localStorage.setItem('loginInfo', JSON.stringify(this.log)) // localStorage
      this.$store.dispatch("setToken", "987654321"); // 通过vuex的actions传值
      this.$router.push({
        path: "/get"
      })
    },
    demo() {
      let insert = value => ({
        into: array => ({
          after: afterValue => {
            array.splice(array.indexOf(afterValue) + 1, 0, value)
            return array; 
          }
        })
      });
      insert(2)
        .into([1, 3])
        .after(1)
    }
  }
};
</script>
<style>
</style>
