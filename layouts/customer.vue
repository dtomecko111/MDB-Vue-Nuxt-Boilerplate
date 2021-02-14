<template>
<div id="wrapper">
    <ejs-sidebar  id="accordionSidebar" :enableDock='enableDock' :width='width' :dockSize='dockSize' ref="dockSidebar" :position = "position">
                <div class="dock">
                   <ul
    id="accordionSidebar"
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  >
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="/"
    >
      <div class="sidebar-brand-icon">
        <img src="~/assets/img/clearview-icon.svg" />
      </div>
      <div class="sidebar-brand-text mx-3">
        <img
          src="~/assets/img/CLEARVIEW_LOGO.svg"
          alt="Clearview Energy - Live Green"
        />
      </div>
    </a>
        
    <li
      v-for="item in items"
      :key="item.title"
      :to="item.route"
      class="sidebar-item">
    >
      <nuxt-link :to="item.route" class="nav-link">
        <i :class="item.icon" />
        <span>{{ item.title }}</span>
      </nuxt-link>
      
    </li>
       <hr class="my-2" />
    <li class="sidebar-item" id="toggle" v-on:click="toggleClick">
                            <span class="e-icons expand"></span>
                            <span class="e-text" title="menu">Menu</span>
                        </li>
    <!-- Divider -->
 

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button id="sidebarToggle" class="rounded-circle border-0" v-on:click="toggleClick"/>
    </div>
  </ul>
                </div>
            </ejs-sidebar>
            <div id="main-content container-fluid col-md-12 ">
               <Nuxt />
            </div>
      </div>
<!--end of main content declaration -->
</template>

<script>

import Vue from "vue";
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
Vue.use(SidebarPlugin);

export default {
    data () {
        return {
            enableDock:  true,
            dockSize : '80px',
            width : '220px',
            position :'Left',
             items: [
        { icon: "fas fa-fw fa-tachometer-alt", title: "Dashboard", route: "/customer" },
        {
          icon: "fas fa-fw fa-user-alt",
          title: "My Account",
          route: "/customer/account/",
        },
        {
          icon: "fas fa-fw fa-file-signature",
          title: "Complete Contracts",
          route: "/customer/complete-contracts/",
        },
        {
          icon: "fas fa-fw fa-file-contract",
          title: "Contracts",
          route: "/customer/contracts/",
        },
        {
          icon: "fas fa-fw fa-file",
          title: "Documents",
          route: "/customer/documents/",
        },
        {
          icon: "fas fa-fw fa-user-friends",
          title: "Refer a Friend",
          route: "/customer/refer-a-friend/",
        },
      ],
        }
    },
     methods: {
        toggleClick: function() {
           this.$refs.dockSidebar.toggle();
        }
    },
   head() {
    return {
      link: [{ rel: "stylesheet",  href: "https://www.boxcarcreative.com/clients/clearview/clearview-portal/css/sb-admin-2.min.css" }  ],     
      bodyAttrs: {
        class: "page-top",
      }
    }
   }
}
</script>



<style></style>