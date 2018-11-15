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
            x:'actions'
        }
    },
    created(){
        this.$store.commit('addData',this.demo) 
    },
    // context.state
    components: {
        popwin
    },
    methods: {
        onC(){
            this.show = true
        }
    }
}
</script>
<style>

</style>
