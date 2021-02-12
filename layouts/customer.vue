<template>
  <div id="wrapper">
    <SideBarCP />
    <div id="content-wrapper" class="d-flex flex-column">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import {mdbContainer} from 'mdbvue';
  import SideBarCP from "~/components/customer/SideBarCP.vue";
export default {
      components: {
      mdbContainer,    
      SideBarCP},
  head() {
    return {
      
      bodyAttrs: {
        class: "page-top",
      },
    };
  },
};
</script>

<style></style>