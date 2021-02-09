<template>
<div>
    <div class="sub-featured" style="background-image:url(https://cdn.cve.so/img/Themes/DefaultClean/Content/images/state-connecticut-hero-bg.webp);">
    <div class="container">
        <div class="row">
        <div class="col-md-4 offset-md-8">
            <div class="signup-form-header">
            <form>
                <h2>Enter your zip code to find the prices and plans that are right for you</h2>
                <input id="zip" class="form-control" name="zip" type="text" pattern="[0-9]*">
                <div class="form-check form-check-inline">
                <input type="radio" id="resi" class="form-check-input" name="BtnActType" value="Residential" checked="">
                <label class="form-check-label" for="resi">Residential</label>
                </div>
                <div class="form-check form-check-inline">
                <input type="radio" id="comm" class="form-check-input" name="BtnActType" value="Commercial">
                <label class="form-check-label" for="comm">Commercial</label>
                </div>
                <button onclick="window.location.href = 'rates-plans-wrates.html';" type="button" class="btn btn-secondary">Sign Up Today!</button>
            </form>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div class="state-page-divider">
    <div class="container">
        <div class="row state-divider-row">
        <div class="state-map"> <img src="https://cdn.cve.so/img/Themes/DefaultClean/Content/images/map-connecticut.webp" alt="connecticut"> </div>
        <h1>Here's What's Available in <span class="highlight">Connecticut.</span></h1>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>