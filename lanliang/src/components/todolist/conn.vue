<template>
  <div>
    <n-header></n-header>
    <section class="container" :class="{'hide': table}">
        <n-add></n-add>
        <n-list></n-list>
    </section >
  </div>
</template>
<script>
import nHeader from './file/header.vue'
import nAdd from './file/add.vue'
import nList from './file/list.vue'
export default {
  components: {
    nHeader,nAdd,nList
  }
}
</script>
<style>

</style>
