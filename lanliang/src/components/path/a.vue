<template>
    <div>
        A：{{a}}
        <div @click="onC" style="cursor: pointer">链接b跳转</div>
        <div @click="onCn" style="cursor: pointer">链接c跳转</div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            a: 'a路由'
        }
    },
    methods: {
        onC(){
          this.$router.push({ // 不在url中传值
              name: 'b',
              params: {
                  id:'bbbb'
              },
          })  
          this.$bus.emit('myData',999) // 通过BUS总线往B传值
        },
        onCn(){
            this.$router.push({ // 在url中传值
                path: 'c',
                query: {
                    id:'cccc'
                }
            })
        }
    }
}
</script>
<style>

</style>
