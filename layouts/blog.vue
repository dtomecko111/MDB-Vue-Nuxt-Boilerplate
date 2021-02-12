<template>
<div> 
     <header>
    <TopBar />
    <MainBar />
  </header>
  <div class="sub-featured blog">
  <div class="container">
    <div class="row justify-content-center">
      <div class="introduction col-md-12">
        <h1>Living Green</h1>
      </div>
    </div>
  </div>
  <div class="sub-featured-divider"> <img src="https://cdn.cve.so/img/Themes/DefaultClean/Content/images/sub-head-divider.webp"> </div>
</div>
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