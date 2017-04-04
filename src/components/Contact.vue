<template>
  <section>
    <h2>Contacte-moi</h2>
    <form>
      <div>
          <input type="text" id="name" ref="nom" name="user_name" :placeholder="phName" required/>
          <input type="email" id="mail" ref="email" name="user_mail" :placeholder="phEmail" required/>
      </div>
      <textarea id="msg" name="user_message" ref="message" required/>
      <button type="submit">Envoyer</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'form',
  data () {
    return {
      phName: 'Votre nom',
      phEmail: "Votre courriel",
      message: "Votre message"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h2{
    color: black;
    padding-top: 2em;
    font-size: 8vw;
  }

  section{
    background-color: white;
    height: 80%;
  }

  #contact{
   background-color: #FFF;
   min-height: 70vh;
  }

  #contact h2{
   padding-top: 1em;
  }

  form{
   padding-top: 2em;
   margin: 0 auto;
   width: 90%;
  }

  form div{
   display: flex;
   width: 100%;
  }

  form div input{
   width: 50%;
   margin-bottom: 1em;
  }

  form div input:first-of-type{
   margin-right: 1em;
  }

  form textarea{
   width: 100%;
   box-sizing: border-box;
   height: 10em;
  }

  form button{
   color: #FFF;
   background-color: black;
   width: 7.5em;
   height: 2.25em;
   font-family: "Roboto";
   font-weight: 600;
   font-size: 5vw;
   margin-top: 0.5em;
   margin-bottom: 2em;
   border: none;
  }
</style>
