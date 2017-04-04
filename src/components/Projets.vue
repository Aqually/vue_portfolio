<template>
  <div>
    <h2>Mes Projets</h2>
    <section>
      <article v-for="projet in projets" v-bind:style="{ backgroundImage: projet.url}" class="projet">
        <div>
            <h3>{{projet.titre}}</h3>
            <p>{{projet.description}}</p>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'porfolio',
  data () {
    return {
      projets: [
        {
          "class":"ascension",
          "description" : "Site web sur un prototype de jeu sur le thème de l'environnement",
          "github" : "#",
          "id" : 4,
          "lien" : "/portfolio/design2/index.html",
          "titre" : "Ascension de la Nature",
          "url" : "url('https://firebasestorage.googleapis.com/v0/b/blog-d25af.appspot.com/o/portfolio%2Fascension.jpg?alt=media&token=0a94b5f9-29f1-47af-a5b5-a15505a79908')"
        },
        {
          "class":"escargo",
          "description" : "Jeu de carte réalisé avec JavaScript et Jquery en programmation orienté objet",
          "github" : "https://github.com/Aqually/Escargo-Express",
          "id" : 5,
          "lien" : "/portfolio/anim2/",
          "titre" : "Escargo Express",
          "url" : "url('https://firebasestorage.googleapis.com/v0/b/blog-d25af.appspot.com/o/portfolio%2Fescargo.png?alt=media&token=bc24df5e-2616-4c61-a6b4-4375d7e97325')"
        },
        {
          "class":"rollin",
          "description" : "Refonte du design d'un site de planche à roulette",
          "github" : "#",
          "id" : 3,
          "lien" : "/portfolio/design3/index.html",
          "titre" : "Boutique Rollin",
          "url" : "url('https://firebasestorage.googleapis.com/v0/b/blog-d25af.appspot.com/o/portfolio%2Frollin.jpg?alt=media&token=4428d666-02f1-46fe-9435-2a96476904f5')"
        },
        {
          "class":"tetrablock",
          "description" : "Jeu de bloc réaliser avec PhaserJS basé sur Tetris",
          "github" : "https://github.com/Aqually/TetraBlock",
          "id" : 1,
          "lien" : "/portfolio/anim3/",
          "titre" : "Tetra Bloc",
          "url" : "url('https://firebasestorage.googleapis.com/v0/b/blog-d25af.appspot.com/o/portfolio%2Ftetrabloc.jpg?alt=media&token=fce235d2-06ba-4f15-a975-5cd1f19892f6')"
        },
        {
          "class":"tim",
          "description" : "Refonte du site départementale du TIM à Maisonneuve",
          "github" : "#",
          "id" : 2,
          "lien" : "http://tim4.mariemt.webfactional.com/",
          "titre" : "TIM Maisonneuve",
          "url" : "url('https://firebasestorage.googleapis.com/v0/b/blog-d25af.appspot.com/o/portfolio%2Ftim.png?alt=media&token=fb478c02-59e3-4d7c-8629-9276702716b5')"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  section .projet{
     background-position: center;
     background-size: cover;
     background-repeat: no-repeat;
     width: 100%;
     height: 100vh;
     display: flex;
     flex-direction: column;
     justify-content: center;
     text-align: center;
     align-items: center;
     border-top: 3em solid black;
     border-bottom: 3em solid black;
  }

  section{
     margin-top: 2.5em;
  }

  section .escargo{
     background-repeat: repeat;
     background-size: contain;
     background-position: top;
  }

  section .projet div{
     display: inline-block;
     padding:  10px 15px;
     background-color: white;
     width: 80%;
  }

  section h2, #contact h2, #propos h2{
     font-size: 17.2vw;
     padding-left:15px;
     margin: 0;
     padding-bottom: 0.5em;
     font-family: "Roboto";
     font-weight: 900;
     line-height: 0.9em;
  }

  section h2{
     margin-top: .75em;
     padding-bottom: 1.25em;
  }


  section article div h3{
     font-size: 9vw;
  }

  section article div p{
     font-size: 5vw;
  }

  section {
     margin-top: 5em;
     padding-top: 5em;
     background-color: #FFF;
     color: black;
  }

  article .projet:first-of-type{
     border-top: none;
  }

  article .projet:last-of-type{
     border-bottom: none;
  }

</style>
