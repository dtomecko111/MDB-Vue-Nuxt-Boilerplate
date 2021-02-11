<template>
<div>
  <header>
    <TopBar />
    <MainBar />
  </header>
  
  <main>
    <HeroAbout :pagename="pagename"/>
    <nuxt />
  </main>
<Footer />
</div>
</template>

<script>
  import {mdbContainer} from 'mdbvue';
  import TopBar from "~/components/TopBar.vue";
  import MainBar from "~/components/MainBar.vue";
  import HeroAbout from "~/components/HeroAbout.vue";
  import Footer from "~/components/Footer.vue";
export default {
      components: {
      mdbContainer,    
      TopBar,
      MainBar,
      HeroAbout,
      Footer   
      },
      data() {
   return {     
       pagename: "https://cdn.cve.so/img/Themes/DefaultClean/Content/images/about-us-hero-bg.webp"
     }
   }

}

</script>

<style>
</style>