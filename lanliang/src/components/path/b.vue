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
        // console.log(this.$route.params.id)
    },
    mounted() {
        this.$bus.$on('myData', (val) => { // 通过BUS总线，接收A传递过来的值
            console.log(val)
            console.log('OK')
        })
    }
}
</script>
<style>

</style>
