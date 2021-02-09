<template>
<div> 
     <header>
    <TopBar />
    <MainBar />
  </header>
    <main> 
    <nuxt />
  </main>
<Footer />
</div>
</template>

<script>
  import {mdbContainer} from 'mdbvue';
  import TopBar from "~/components/TopBar.vue";
  import MainBar from "~/components/MainBar.vue";
  import Caro from "~/components/Caro.vue";
  import Footer from "~/components/Footer.vue";
export default {
      components: {
      mdbContainer,    
      TopBar,
      MainBar,
      Caro,
      Footer   
      }
}

</script>

<style>
</style>