<template>
   <div class="master-column-wrapper container">
	  
	  <div class="row">
	  	<div class="breadcrumb">
			<ul>
				<li><a href="state-page/ct">Home</a></li>
				<li>Areas We Serve</li>
			</ul>
		 </div>
	  </div> 
	  
	  <div class="row justify-content-center">
	  	<div class="col-12">
			<form class="form-inline justify-content-center">
				<div class="form-group row">
				<label for="" class="mb-2 mr-sm-2"><div class="serviceIndicator"></div>States with Clearview Energy </label>
					
				<select class="form-control" name="AreasWeServe" id="serviceAreaDropdown">
                <option selected="" disabled="">Select A State:</option>
                <option value="connecticut">Connecticut</option>
                <option value="delaware">Delaware</option>
                <option value="illinois">Illinois</option>
                <option value="maine">Maine</option>
                <option value="maryland">Maryland</option>
                <option value="massachusetts">Massachusetts</option>
                <option value="new-jersey">New Jersey</option>
                <option value="new-york">New York</option>
                <option value="ohio">Ohio</option>
                <option value="pennsylvania">Pennsylvania</option>
                <option value="rhode-island">Rhode Island</option>
                <option value="texas">Texas</option>
                <option value="washington-dc">Washington D.C</option>
            </select>
				
				</div>
			
			</form>
		 </div>
	  </div>
	  
      <div class="row">
	  	<div class="col-12 map">
			<img id="statemap" src="images/map.webp" usemap="#clearviewstates">  
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