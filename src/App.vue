<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from "./components/Index"
export default {
  name: 'App',
  components:{
    Index
  },
  data(){
    return {
        list : []
    }
  }
}
</script>

<style>

</style>
