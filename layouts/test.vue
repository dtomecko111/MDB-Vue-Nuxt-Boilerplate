<template>
<div v-mdb-resize:start="checkWidth">    
    <mdb-side-nav-2
      :value="true"
      :data="navigation"
      push
      slim
      :slim-collapsed="collapsed"
      @toggleSlim="collapsed = $event"
      color="white" 
      background-color="blue"
      :sidenav-class="['grey', 'darken-3']"

         >
    
      <div slot="main" style="height: 100vh">
        <Nuxt />
      </div>
    </mdb-side-nav-2>
   </div>
</template>
<script>
  import {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbSideNav2,
    mdbAvatar,
    mdbBtn,
    mdbIcon
  } from "mdbvue";
import TopbarCP from "~/components/customer/TopbarCP.vue";
  export default {
    components: {
      mdbNavbar,
      mdbNavItem,
      mdbNavbarNav,
      mdbSideNav2,
      mdbAvatar,
      mdbBtn,
      mdbIcon,     
      TopbarCP
    },
head() {
    return {
      link: [{ rel: "stylesheet",  href: "https://www.boxcarcreative.com/clients/clearview/clearview-portal/css/sb-admin-2.min.css" }  ],     
      bodyAttrs: {
        class: "page-top",
      },
    };
  },
    data() {
      return {
        show: true,
        collapsed: false,
        navigation: [
          {
            name: "Double navigation",
            icon: "bars",
            children: [
              {
                name: "Version 1",
                to: "/navigation/pro/double-navigation-v1"
              },
              {
                name: "Version 2",
                to: "/navigation/pro/double-navigation-v2"
              },
              {
                name: "Version 3",
                to: "/navigation/pro/double-navigation-v3"
              },
              {
                name: "Version 4",
                to: "/navigation/pro/double-navigation-v4"
              },
              {
                name: "Version 5",
                to: "/navigation/pro/double-navigation-v5"
              },
              {
                name: "Version 6",
                to: "/navigation/pro/double-navigation-v6"
              }
            ]
          },         
          {
            name: "Documentation",
            icon: "graduation-cap",
            href: "https://mdbootstrap.com/docs/vue/"
          }
        ]
      };
    }
  };
  
</script>

<style scoped>
  
  .navbar i {
    cursor: pointer;
    color: white;
  }
</style>