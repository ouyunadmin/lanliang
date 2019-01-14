<template>
    <div style="height:1000px;">
        A：{{a}}
        <div @click="onC" style="cursor: pointer">链接b跳转</div>
        <div @click="onCn" style="cursor: pointer">链接c跳转</div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            a: 'a路由',
            newDataCity:[
                {
                    list: [
                        {
                            name: '北京'
                        },
                        {
                            name: '上海'
                        }
                    ]
                },
                {
                    list: [
                        {
                            name: '商丘'
                        },
                        {
                            name: '杭州'
                        }
                    ]
                }
            ]
        }
    },
    mounted() {
        // 滚动监听
        window.addEventListener('scroll', this.handleScroll, true); 
        this.demoData()
    },
    methods: {
        handleScroll: function () {
            // 滚动方法
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            console.log(scrollTop)
            console.log(document.body.scrollHeight)
        },
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
        },
        demoData() {
            let newData = []
            this.newDataCity.forEach(e => {
                // console.log(e)
                e.list.forEach(item => {
                    // console.log(item.name)
                    newData.push(item.name)
                })
            })
            console.log(newData)
        }
    }
}
</script>
<style>

</style>
