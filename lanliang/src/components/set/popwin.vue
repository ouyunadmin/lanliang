<template>
    <div>
        子组件:
        {{data}}
        <!-- {{getData}} -->
    </div>    
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            data:''
        }
    },
    created(){
        this.data = this.$store.getters.getData  // 获取vuex方式一
    },
    // computed: mapGetters(['getData']), // 获取vuex方式二
    mounted(){
        // console.log(this.$store.getters.getData)
        console.log(this.$store.dispatch('addData'))
    }
}
</script>
<style>

</style>
