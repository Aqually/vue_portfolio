<template>
  <div id="app">
    <SiteMenu></SiteMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import SiteMenu from './components/Menu'
export default {
  name: 'app',
  components: {
    SiteMenu
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,900');

  html,body,main, #app{
     width: 100%;
     height: 100%;
     margin: 0 auto;
  }

  body{
     font-family: "Open Sans";
     background-color: black;
     color: black;
     -webkit-font-smoothing: antialiased;
     text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
     text-align: left;
     margin: auto;
  }

  #app {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    background-color: black;
  }
</style>
