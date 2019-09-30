<template>
  <div id="app">
    <comHeader v-if="$route.meta.isShowHeader"></comHeader>
    <router-view/>
    <comFooter v-if="$route.meta.isShowFooter"></comFooter>
  </div>
</template>

<script>
  import comHeader from "@com/common/header"
  import comFooter from "@com/common/footer"
  import "../static/css/common.min.css"
  export default {
    name: 'App',
    components: {
      comHeader,
      comFooter
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #252525;
}
</style>
