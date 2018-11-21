<template>
    <div>
        要发送的数据
        <button @click="onC">发送</button>
        <popwin v-if="show"></popwin>
    </div>    

</template>
<script>
import popwin from './popwin.vue';
export default {
    data(){
        return{
            demo: '要发送的数据',
            show:false,
            x:'actions',
            log:{
                to:'qweqwe'
            }
        }
    },
    created(){
        this.$store.commit('addData',this.demo) 
        // console.log(this.$store.dispatch('addCurrent')) // action
    },
    // context.state
    components: {
        popwin
    },
    methods: {
        onC(){
            this.show = true
            window.localStorage.setItem('loginInfo', JSON.stringify(this.log))
        }
    }
}
</script>
<style>

</style>
