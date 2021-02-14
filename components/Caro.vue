<template>
 <div class="card primary-header">  
   <mdb-carousel>
    :interval="8000"
    slide
    :items="items"
    indicators   
  </mdb-carousel>
   </div>
</template>

<script>
  import { mdbCarousel } from "mdbvue";
  export default {
    name: "CarouselPage",
    components: {
      mdbCarousel
    },
    data() {
      return {
        items: [
          {
            img: true,
            src:
              "https://www.boxcarcreative.com/clients/clearview/clearview-portal/img/blog.png"
          },
          {
            img: true,
            src:
              "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
          },
          {
            img: true,
            src:
              "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
          }
        ]
      };
    }
  };
</script>

<style>

</style>