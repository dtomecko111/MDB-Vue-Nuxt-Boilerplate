<template>
<div>
  <header>
    <TopBar />
    <MainBar />
  </header>
  <Hero />
  <main>
    <nuxt />
  </main>
  <br/>  <br/> <br/><br/>  <br/> <br/>
  <Footer />
</div>
</template>

<script>
  import {mdbContainer} from 'mdbvue';
  import TopBar from "~/components/TopBar.vue";
  import MainBar from "~/components/MainBar.vue";
  import Hero from "~/components/Hero.vue";
   import Footer from "~/components/Footer.vue";
export default {
      components: {
      mdbContainer,    
      TopBar,
      MainBar,
      Hero,
      Footer   
      }
}

</script>

<style>
</style>