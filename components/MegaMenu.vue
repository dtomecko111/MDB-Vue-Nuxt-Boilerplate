<template>
  <mdb-container>
    <!--Navbar-->
    <mdb-navbar class="mt-2" color="primary" dark>
         <mdb-navbar-brand href="/">
        <img alt="Online" src="https://cvewebsa.blob.core.windows.net/themes/DefaultClean/Content/images/clearview_logo.webp"  />
        </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav left>
          <mdb-dropdown tag="li" megaMenu class="nav-item">
            <mdb-dropdown-toggle slot="toggle" tag="a" active transparent navLink waves-fixed>Gadgets</mdb-dropdown-toggle>
            <mdb-dropdown-menu class="mega-menu v-3 z-depth-1 primary-color-dark py-5 px-3">
              <div class="row">
                <div class="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-5">
                  <ul class="list-unstyled">
                    <li class="sub-title text-uppercase">
                      <a class="menu-item pl-1 mt-2" href="#!">
                        Technology
                      </a>
                    </li>
                    <li class="sub-title text-uppercase">
                      <a class="menu-item pl-1 mt-2" href="#!">
                        Design
                      </a>
                    </li>
                    <li class="sub-title text-uppercase">
                      <a class="menu-item pl-1 mt-2" href="#!">
                        Lifestyle
                      </a>
                    </li>
                    <li class="sub-title text-uppercase">
                      <a class="menu-item pl-1 mt-2" href="#!">
                        Laptops
                      </a>
                    </li>
                    <li class="sub-title text-uppercase">
                      <a class="menu-item pl-1 mt-2" href="#!">
                        Phones
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                  <!--Featured image-->
                  <a href="#!" class="view overlay z-depth-1 p-0 mb-3">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(41).jpg" class="img-fluid" alt="First sample image">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                  <h4 class="mb-2">
                    <a class="news-title font-weight-bold pl-0" href="#!">Lorem ipsum dolor sit amet.</a>
                  </h4>
                  <p class="font-small text-uppercase white-text">
                    <i class="far fa-clock pr-2" aria-hidden="true"></i>July 17, 2017 / <i class="fas fa-comments-o px-1" aria-hidden="true"></i> 20
                  </p>
                </div>
                <div class="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                  <!--Featured image-->
                  <a href="#!" class="view overlay z-depth-1 p-0 mb-3">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(43).jpg" class="img-fluid" alt="First sample image">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                  <h4 class="mb-2">
                    <a class="news-title font-weight-bold pl-0" href="#!">Neque porro quisquam est.</a>
                  </h4>
                  <p class="font-small text-uppercase white-text">
                    <i class="far fa-clock pr-2" aria-hidden="true"></i>July 16, 2017 / <i class="fas fa-comments-o px-1" aria-hidden="true"></i> 46
                  </p>
                </div>
                <div class="col-md-6 col-xl-3 sub-menu mb-0">
                  <!--Featured image-->
                  <a href="#!" class="view overlay z-depth-1 p-0 mb-3">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(9).jpg" class="img-fluid" alt="First sample image">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                  <h4 class="mb-2">
                    <a class="news-title font-weight-bold pl-0" href="#!">Quis autem vel iure reprehit.</a>
                  </h4>
                  <p class="font-small text-uppercase white-text">
                    <i class="far fa-clock pr-2" aria-hidden="true"></i>July 15, 2017 / <i class="fas fa-comments-o px-1" aria-hidden="true"></i> 35
                  </p>
                </div>
              </div>
            </mdb-dropdown-menu>
          </mdb-dropdown>
        </mdb-navbar-nav>
        <form>
          <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
  </mdb-container>
</template>
<script>
  import { mdbContainer,   mdbRow, mdbIcon, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem } from 'mdbvue';
  export default {
    name: 'MegaMenu',
    components: {
      mdbContainer,        
      mdbRow,
      mdbIcon,
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbInput,
      mdbDropdown,
      mdbDropdownToggle,
      mdbDropdownMenu,
      mdbDropdownItem
    }
  }
</script>

<style>

</style>