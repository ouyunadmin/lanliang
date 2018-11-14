<template>
    <div>
        要发送的数据
    </div>    

</template>
<script>
export default {
    data(){
        return{
            demo: '要发送的数据'
        }
    },
    created(){
        this.$store.commit('addData',this.demo)
    }
}
</script>
<style>

</style>
