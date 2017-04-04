<template>
  <section>
    <header>
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
    </header>
    <article>
      <img :src="imageLink" />
      <p> {{ description }} </p>
    </article>
  </section>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      title: 'Marie-Maxime',
      subtitle: "Développeuse web",
      imageLink: "https://firebasestorage.googleapis.com/v0/b/blog-d25af.appspot.com/o/portfolio%2Fmarie-maxime-tanguay.png?alt=media&token=1a849ce8-e873-49eb-b0c5-207c88315448",
      description: "JavaScript, CSS, ReactJS, Redux, PHP, WordPress"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  header{
   text-align: left;
   margin: 0 auto;
   width: 100%;
  }

  header div{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
  }

  h1,h2,h3,p{
   margin: 0;
   color: #5a5a5a;
   padding: 0;
   -webkit-margin-before: 0em;
   -webkit-margin-after: 0em;
   -webkit-margin-start: 0px;
   -webkit-margin-end: 0px;
  }

  h1{
   margin-top: 0.25em;
   font-family: 'Roboto', sans-serif;
   font-weight: 900;
   font-size: 26vw;
   color: #efefef;
   text-align: left;
   line-height: 0.8em;
  }

  h2{
   margin-top: 0.8em;
   color: #efefef;
   font-size: 10vw;
   font-family: 'Roboto', sans-serif;
   font-weight: 900;
   text-align: left;
   width: 50%;
   line-height: 1em;
  }

  section{
   padding-top: 4em;
  }


  h1, h2, p{
     padding-left:15px;
  }

  article p{
     color: #efefef;
     font-family: "Roboto";
     font-weight: 100;
     font-size: 6vw;
     width: 65%;
     line-height: 1.25em;
     letter-spacing: 0.15em;
  }

  img{
     display: block;
     margin: 1.5em auto;
     width: 60%;
  }

</style>
