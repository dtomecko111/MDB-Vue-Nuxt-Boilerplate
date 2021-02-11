<template>
  <div>
    <mdb-row>
      <MegaMenu />
   </mdb-row>

    <mdb-side-nav-2
      :value="true"
      :data="navigation"
      push
      slim
      :slim-collapsed="collapsed"
      @toggleSlim="collapsed = $event"
      sidenav-class="unique-color-dark"
      color="white"
    >
      <div slot="header">
        <div
          class="d-flex align-items-center my-4"
          :class="
            collapsed ? 'justify-content-center' : 'justify-content-start'
          "
        >
          <mdb-avatar :width="40" style="flex: 0 0 auto">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/avatar-7.jpg"
              class="img-fluid rounded-circle z-depth-1"
            />
          </mdb-avatar>
          <p
            class="m-t mb-0 ml-4 p-0"
            style="flex: 0 2 auto"
            v-show="!collapsed"
          >
            <strong
              >John Smith
              <mdb-icon
                color="success"
                icon="circle"
                class="ml-2"
                size="sm"
            /></strong>
          </p>
        </div>
        <hr class="w-100" />
      </div>
      <div slot="content" class="mt-5 d-flex justify-content-center">
        <mdb-btn
          tag="a"
          class="mx-0"
          size="sm"
          transparent
          floating
          :icon="collapsed ? 'chevron-right' : 'chevron-left'"
          icon-class="white-text"
          @click="collapsed = !collapsed"
        ></mdb-btn>
      </div>
      <mdb-navbar
        slot="nav"
        tag="div"
        :toggler="false"
        position="top"
        dark
        color="unique-color-dark"
      >
        <mdb-navbar-nav class="nav-flex-icons" right>
          <mdb-nav-item
            to="/navigation/pro/double-navigation-v1"
            waves-fixed
            icon="code-branch"
            ><span class="ml-1">v.1</span></mdb-nav-item
          >
          <mdb-nav-item
            to="/navigation/pro/double-navigation-v2"
            waves-fixed
            icon="eye"
            ><span class="ml-1">v.2</span></mdb-nav-item
          >
          <mdb-nav-item
            to="/navigation/pro/double-navigation-v3"
            waves-fixed
            icon="file-code"
            far
            ><span class="ml-1">v.3</span></mdb-nav-item
          >
          <mdb-nav-item
            to="/navigation/pro/double-navigation-v4"
            waves-fixed
            icon="terminal"
            ><span class="ml-1">v.4</span></mdb-nav-item
          >
          <mdb-nav-item
            active
            to="/navigation/pro/double-navigation-v5"
            waves-fixed
            icon="smile"
            far
            ><span class="ml-1">v.5</span></mdb-nav-item
          >
          <mdb-nav-item
            to="/navigation/pro/double-navigation-v6"
            waves-fixed
            icon="user"
            far
            ><span class="ml-1">v.6</span></mdb-nav-item
          >
        </mdb-navbar-nav>
      </mdb-navbar>

      <div slot="main" style="height: 100vh">
         <nuxt />
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
    import MegaMenu from "~/components/MegaMenu.vue";

  export default {
    name: "DoubleNavigationPagev1",
    components: {
      mdbNavbar,
      mdbNavItem,
      mdbNavbarNav,
      mdbSideNav2,
      mdbAvatar,
      mdbBtn,
      mdbIcon,
      MegaMenu
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
            name: "Getting started",
            icon: "mdb",
            fab: true,
            children: [
              {
                name: "Quick start",
                href:
                  "https://mdbootstrap.com/docs/vue/getting-started/quick-start/"
              },
              {
                name: "Technical Support",
                href: "https://mdbootstrap.com/support/"
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
  .view {
    background: url("https://mdbootstrap.com/img/Photos/Others/img (55).jpg")
      no-repeat center center;
    background-size: cover;
    height: 100%;
  }

  .navbar i {
    cursor: pointer;
    color: white;
  }
</style>