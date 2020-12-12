<template>
    <div>
        B:{{b}}
        <div id="app">
            <form @submit.prevent="submitForm">
                <input type="text" v-model="formData.text"><br>
                <input type="submit" value="submit">
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            b: 'b路由',
            formData: {
               text: '' 
            }
        }
    },
    created(){
        // console.log(this.$route.params.id)
        // 【背包问题】有一个背包，容量是M=150，有7个物品，物品可以分割成任意大小。要求尽可能让装入背包中的物品总价值最大，但不能超过总容量。
        // 【背包问题】有一个背包，容量是M=150，有70个物品，物品可以分割成任意大小。要求尽可能让装入背包中的物品总价值最大，但不能超过总容量。
        // 物品：A  B  C  D  E  F  G
        // 重量：35 30 60 50 40 10 25
        // 价值：10 40 30 50 35 40 30
    },
    mounted() {
        this.$bus.$on('myData', (val) => { // 通过BUS总线，接收A传递过来的值
            console.log(val)
            // console.log('OK')
        })
    },
    methods: {
        submitForm() {
            console.log(this.formData)
        }
    }
}
</script>
<style>

</style>
