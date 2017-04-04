<template>
  <section id="propos">
    <h2>{{ title }}</h2>
    <article className="propos_article">
        <p>{{ p1 }}</p>
        <p>{{ p2 }}</p>
    </article>
  </section>
</template>

<script>
export default {
  name: 'apropos',
  data () {
    return {
      title: 'À propos de moi',
      p1: "Je suis Marie-Maxime Tanguay, étudiante en multimédia qui adore la programmation et l’intégration Web et qui désire une carrière dans ce domaine.",
      p2: "Amatrice de jeux vidéo, de technologies, de films de super héros et de patin à roues alignées."
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #propos{
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
  }

  #propos h2{
   color: white;
   font-size: 18vw;
   margin-bottom: -0.5em;
   line-height: 1.1em;
  }

  #propos article{
   margin-top: 1.5em;
   font-size: 5vw;
   padding-left: 15px;
   padding-right: 15px;
   line-height: 1.5em;
   font-family: Roboto;
   letter-spacing: 0.15vw;
   margin-top: 1.5em;
   word-spacing: 0.3vw;
  }

  #propos article p{
   color: #e5e5e5;
   font-family: Open sans;
   margin-top: 1.5em;
  }
</style>
