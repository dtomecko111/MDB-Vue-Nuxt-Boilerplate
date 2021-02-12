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
      link: [{ rel: "stylesheet",  href: "https://www.boxcarcreative.com/clients/clearview/clearview-portal/css/sb-admin-2.min.css" }  ],     
      bodyAttrs: {
        class: "page-top",
      },
    };
  },
};
</script>

<style></style>