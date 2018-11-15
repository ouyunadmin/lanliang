<template>
    <div>
        A：{{a}}
        <div @click="onC" style="cursor: pointer">链接跳转b</div>
        <div @click="onCn" style="cursor: pointer">链接跳转c</div>
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
            this.$router.push({  // 获取 this.$route.params.id
                name: 'b',
                params:{
                    id: 'bbb'
                }
            })
        },
        onCn(){
            this.$router.push({  // 传递数据会显示在url后， this.$route.query.id
                // path: '/c',
                name: 'c',
                query:{
                    id: 'ccc'
                }
            })
        }
    }
}
</script>
<style>

</style>
