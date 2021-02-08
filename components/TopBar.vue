<template>
   <div class="top-header">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="top-header-contact"> <a href="mailto:customerservice@clearviewenergy.com">customerservice@clearviewenergy.com</a> </div>
        <div class="top-header-socials"> <a href="https://instagram.com"><img src="https://cdn.cve.so/img/Themes/DefaultClean/Content/images/instagram-light.webp" alt="instagram"></a> <a href="https://facebook.com"><img src="https://cdn.cve.so/img/Themes/DefaultClean/Content/images/facebook-light.webp" alt="facebook"></a> <a href="https://youtube.com"><img src="https://cdn.cve.so/img/Themes/DefaultClean/Content/images/youtube-light.webp" alt="youtube"></a> <a href="https://twitter.com"><img src="https://cdn.cve.so/img/Themes/DefaultClean/Content/images/twitter-light.webp" alt="twitter"></a> </div>
        <div class="top-header-num"> <a href="tel:+800-746-4702" class="btn btn-secondary top-header-telBtn"><img src="https://cdn.cve.so/img/Themes/DefaultClean/Content/images/telephone-icon.webp" alt="+800-746-4702"></a> </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
.top-header {
  position: relative;
  background-color: #2079C7;
  padding: 15px 0; }
  @media (max-width: 991.98px) {
    .top-header .container {
      max-width: 100%; } }
  .top-header a {
    color: #ffffff; }

.top-header-contact {
  background: url("https://cdn.cve.so/img/Themes/DefaultClean/Content/images/email-icon.png") no-repeat left center;
  padding-left: 30px;
  font-size: 12px;
  margin-left: 15px; }

.top-header-socials {
  display: none;
  margin-right: 15px; }
  @media (min-width: 992px) {
    .top-header-socials {
      display: block; } }
@media (min-width: 992px) {
  .top-header-num {
    display: none; } }

.top-header-telBtn {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0; }

</style>