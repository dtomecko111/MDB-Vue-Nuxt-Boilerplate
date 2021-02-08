<template>
  <div class="featured" style="background-image:url(https://cdn.cve.so/img/Themes/DefaultClean/Content/images/home-hero-bg.webp);">
			  <div class="container">
			  	<div class="row">
					<div class="introduction col-md-7">
						<h1> We’re Providing Power <span class="highlight">for a Better World</span> </h1>
						
					</div>
					
					<div class="col-md-4 offset-md-1">
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

								<button onclick="window.location.href = 'rates-plans-wrates.html';" type="button" class="btn btn-primary" >Sign Up Today!</button>

							</form>
						</div>
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