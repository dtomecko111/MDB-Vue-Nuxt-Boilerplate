<template>
  <!-- Topbar -->
  <nav
    class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
  >
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
  </nav>
  <!-- End of Topbar -->
</template>

<script>
export default {};
</script>

<style></style>
