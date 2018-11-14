<template>
    <div>
        获取数据::{{data}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            data:''
        }
    },
    created(){
        this.data = this.$store.getters.getData
        console.log(this.$store.getters.getData)
    }
}
</script>
<style>

</style>
