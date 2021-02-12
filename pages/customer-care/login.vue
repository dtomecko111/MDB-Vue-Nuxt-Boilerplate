<template>
    <div class="sub-featured blank">
			  <div class="master-column-wrapper container">
	  <div class="row align-items-center">
			<div class="col-xl-6 landing-img">
		  		<img class="login-img" src="https://cdn.cve.so/img/Themes/DefaultClean/Content/images/portal-login-img@2x.webp" alt="Login to Your Account">
		  	</div>
		  <div class="col-xl-6">
			  <div class="introduction">
			  
			  </div>
			    <div class="signup-form-header portal-login">
          <form>
            	<h2>Login to Your Account</h2>
				  <p>Already a customer? Login to renew your plan, check your usage, transfer service, track rewards,refer your friends to Clearview Energy.</p>
			
			<div class="form-group">
				<label for="email">Email Address*</label>
            	<input id="email" class="form-control" name="email" type="text">
			 </div> 
			  
			<div class="form-group">
				<label for="password"> Password*</label>
				<input id="password" class="form-control" name="password" type="password">
			 </div> 
			  
			  <a href="">First Time User? Create an Account</a>
			  <a href="/customer-care/password-reset">Forgot your password?</a>
       
              <button onclick="window.location.href = '/customer';" type="button" class="btn btn-primary">Sign In</button>
          </form>
        </div>
			  
		  </div>
		  </div>
  		</div>
          		</div>
</template>

<script>
export default {
 layout: 'plain'
}
</script>

<style>

</style>