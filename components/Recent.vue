<template>
  <mdb-container>
    <h2 class="h1-responsive font-weight-bold text-center my-5">Live Green</h2>
    <p class="text-center w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <mdb-row>
      <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
        <mdb-view hover class="rounded z-depth-2 mb-4">
          <img class="img-fluid" src="https://cdn.cve.so/img/Themes/DefaultClean/Content/images/residential-thumb.jpg" />
          <mdb-mask overlay="white-slight" waves/>
        </mdb-view>
        <a class="pink-text" href="blog" >
          <h6 class="font-weight-bold mb-3">
            <mdb-icon icon="map" class="pr-2" />Adventure</h6>
        </a>
        <h4 class="font-weight-bold mb-3">
          <strong>Title of the news</strong>
        </h4>
        <p>by
          <a class="font-weight-bold">Billy Forester</a>, 15/07/2018</p>
        <p class="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
          possimus voluptas.</p>
        <mdb-btn color="green"  href="/blog" size="md">Read more</mdb-btn>
      </mdb-col>
      <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
        <mdb-view hover class="rounded z-depth-2 mb-4">
          <img class="img-fluid" src="https://cvewebsa.blob.core.windows.net/site/0000055_Blog%20Wind%20Energy_300.jpeg" />
          <mdb-mask overlay="white-slight" waves/>
        </mdb-view>
        <a class="deep-orange-text">
          <h6 class="font-weight-bold mb-3">
            <mdb-icon icon="graduation-cap" class="pr-2" />Education</h6>
        </a>
        <h4 class="font-weight-bold mb-3">
          <strong>Title of the news</strong>
        </h4>
        <p>by
          <a class="font-weight-bold">Billy Forester</a>, 13/07/2018</p>
        <p class="dark-grey-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti atque corrupti quos dolores.</p>
        <mdb-btn color="deep-orange" rounded size="md">Read more</mdb-btn>
      </mdb-col>
      <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
        <mdb-view hover class="rounded z-depth-2 mb-4">
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg" />
          <mdb-mask overlay="white-slight" waves/>
        </mdb-view>
        <a class="blue-text">
          <h6 class="font-weight-bold mb-3">
            <mdb-icon icon="fire" class="pr-2" />Culture</h6>
        </a>
        <h4 class="font-weight-bold mb-3">
          <strong>Title of the news</strong>
        </h4>
        <p>by
          <a class="font-weight-bold">Billy Forester</a>, 11/07/2018</p>
        <p class="dark-grey-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione.</p>
        <mdb-btn color="info" rounded size="md">Read more</mdb-btn>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
  import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardBody, mdbMask, mdbIcon, mdbView, mdbBtn } from 'mdbvue';
  export default {
    name: 'BlogPage',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      mdbMask,
      mdbIcon,
      mdbView,
      mdbBtn
    }
  }
</script>

<style>

</style>