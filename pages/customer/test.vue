<template>
  <div>
    <!--/.Navbar-->

    <mdb-side-nav-2
      :value="true"
      :data="navigation"
      push
      slim
      :slim-collapsed="collapsed"
      @toggleSlim="collapsed = $event"
      class="navbar-nav"
      color="blue"
    >
      <div slot="header">
        <div
          class="d-flex align-items-center my-4"
          :class="
            collapsed ? 'justify-content-center' : 'justify-content-start'
          "
        >
          <mdb-avatar :width="10" style="flex: 0 0 auto">
            <img
              src="http://localhost:3000/_nuxt/assets/img/CLEARVIEW_LOGO.svg"
              class="img-fluid rounded-circle z-depth-1"
            />
          </mdb-avatar>
          <p
            class="m-t mb-0 ml-4 p-0"
            style="flex: 0 2 auto"
            v-show="!collapsed"
          >
           <img
              src="https://cdn.cve.so/img/Themes/DefaultClean/Content/images/clearview_logo.webp"
              class="img-fluid rounded-circle z-depth-1"
            />
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
        light
        color="blue"
      >
     <mdb-navbar-nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" left>
    <!-- Sidebar Toggle (Topbar) -->
    <button
      id="sidebarToggleTop"
      class="btn btn-link d-md-none rounded-circle mr-3"
    >
      <i class="fa fa-bars" />
    </button>

    <div class="contact-info small">
      <div class="contact-info__link">
        <a href="tel:+800-7464702" title="Tel"
          ><i class="fa fa-fw fa-phone-alt" /><span>+ 800-746-4702</span></a
        >
      </div>

      <div class="contact-info__link">
        <i class="fa fa-fw fa-envelope" />
        <a href="mailto:customerservice@clearviewenergy.com" title="Email"
          ><span>customerservice@clearviewenergy.com</span></a
        >
      </div>
    </div>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <!-- Nav Item - Alerts -->
      <li class="nav-item mx-1">
        <a class="nav-link" href="https://www.instagram.com/clearview.energy/">
          <i class="fab fa-instagram fa-fw" />
        </a>
      </li>

      <li class="nav-item mx-1">
        <a class="nav-link" href="https://www.facebook.com/ClearviewEnergy/">
          <i class="fab fa-facebook-square fa-fw" />
        </a>
      </li>

      <li class="nav-item mx-1">
        <a
          class="nav-link"
          href="https://www.youtube.com/channel/UCOe7Jo0Fmx7zBreMRypDivA"
        >
          <i class="fab fa-youtube fa-fw" />
        </a>
      </li>

      <li class="nav-item mx-1">
        <a class="nav-link" href="https://twitter.com/ClearviewEnergy">
          <i class="fab fa-twitter fa-fw" />
        </a>
      </li>

      <div class="topbar-divider d-none d-sm-block" />

      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown no-arrow">
        <a
          id="userDropdown"
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="mr-2 d-none d-lg-inline text-gray-600 small"
            >Douglas McGee</span
          >
          <img
            class="img-profile rounded-circle"
            src="https://cdn.cve.so/img/Themes/DefaultClean/Content/images/clearview_logo.webp"
          />
        </a>
        <!-- Dropdown - User Information -->
        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <a
            class="dropdown-item"
            href="#"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
            Logout
          </a>
        </div>
      </li>
    </ul>
  
          
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
        <AccountCP />
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
import AccountCP from "~/components/customer/AccountCP.vue";
import TopbarCP from "~/components/customer/TopbarCP.vue";
  export default {
    name: "DoubleNavigationPagev1",
     layout: 'customer',
    components: {
      mdbNavbar,
      mdbNavItem,
      mdbNavbarNav,
      mdbSideNav2,
      mdbAvatar,
      mdbBtn,
      mdbIcon,
      AccountCP,
      TopbarCP
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