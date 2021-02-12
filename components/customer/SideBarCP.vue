<template>
  <!-- Sidebar -->
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
      class="nav-item"
    >
      <nuxt-link :to="item.route" class="nav-link">
        <i :class="item.icon" />
        <span>{{ item.title }}</span>
      </nuxt-link>
    </li>

    <!-- Divider -->
    <hr class="my-2" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button id="sidebarToggle" class="rounded-circle border-0" />
    </div>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
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
    };
  },
};
</script>

<style></style>
