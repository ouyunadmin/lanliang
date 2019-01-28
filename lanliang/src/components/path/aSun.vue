<template>
    <div>
        asdfasdfasdfasdfasdfasdfasdfd
    </div>
</template>
<script>
import Bus from '@/bus/index.js'
export default {
    data () {
        return{
            c: 'c路由'
        }
    },
    created(){
        console.log(this.$route.query.id)
    },
    mounted() {
      Bus.$on('msg', (e) => {
         self.message = e
　　　　　console.log(`传来的数据是：${e}`)
       })
    }
}
</script>
<style>

</style>
