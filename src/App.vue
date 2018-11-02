<template>
  <div id="app">
   <menu-h></menu-h>
   <router-view></router-view>
  </div>
</template>

<script>
import MenuH from "./components/menu";
export default {
  // name: 'App',
  components:{
      MenuH
  }
}
</script>

<style>

#app{
  height: 100%;
}
</style>
