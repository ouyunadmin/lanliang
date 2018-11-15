<template>
    <div>
        A：{{a}}
        <div @click="onC" style="cursor: pointer">链接跳转</div>
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
            
        }
    }
}
</script>
<style>

</style>
