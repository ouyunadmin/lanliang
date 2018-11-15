<template>
    <div>
        C:{{c}}
    </div>
</template>
<script>
export default {
    data () {
        return{
            c: 'c路由'
        }
    },
    created(){
        console.log(this.$route.query.id)
    }
}
</script>
<style>

</style>
