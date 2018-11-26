<template>
    <div>
        获取数据::{{data}}
        <div @click="onC" style="cursor: pointer"> 点击传值 </div>
        <div>这是子组件信息{{sunData}}</div>
        <div>localS {{ lo }}</div>
        <sun v-if="show" :trun="tran" @chuan="chuanD"></sun>
    </div>
</template>
<script>
import sun from './sun.vue'
export default {
    data(){
        return{
            data:'',
            tran: '了了了了',
            show: true,
            sunData: '',
            lo:'',
            
        }
    },
    created(){
        this.lo = window.localStorage.getItem('loginInfo')
        console.log(this.$store.getters.getToken)
        // this.data = this.$store.getters.getData  // 获取vuex中的数据
        // console.log(this.$store.getters.getData)
    },
    methods: {
        onC(){
            this.show = true
        },
        chuanD(val){
            this.sunData = val
        }
    },
    components: {
        sun
    }
}
</script>
<style>

</style>
