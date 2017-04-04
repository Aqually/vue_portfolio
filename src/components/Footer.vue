<template>
  <footer>
    <p>{{ msg }}</p>
  </footer>
</template>

<script>
export default {
  name: 'footerSite',
  data () {
    return {
      msg: 'Site web créer par Marie-Maxime Tanguay'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer{
    margin-top: 2em;
    font-size: 3vw;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
  }
</style>
