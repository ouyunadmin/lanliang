<template>
    <div>
        B:{{b}}
    </div>
</template>
<script>
export default {
    data () {
        return{
            b: 'b路由'
        }
    },
    created(){
        console.log(this.$route.params.id)
    }
}
</script>
<style>

</style>
