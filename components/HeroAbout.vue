<template>
  <div class="sub-featured" v-bind:style="{ backgroundImage: 'url('+ pagename.hero.imgUrl +');' }"> 
  <div class="container">
    <div class="row">
      <div class="introduction col-md-7">
        <h1> {{pagename.hero.title }}</h1>
        <p> {{ pagename.hero.description }}</p>
      </div>
      <div class="col-md-4 offset-md-1">
        <div class="signup-form-header">
          	<ZipBox />
        </div>
      </div>
    </div>
  </div>
	<div class="sub-featured-divider">
		<img src="https://cdn.cve.so/img/Themes/DefaultClean/Content/images/sub-head-divider.webp">
	</div>
</div>
</template>

<script>
import ZipBox from "~/components/ZipBox";
export default {
	components:{ZipBox},
  props: ['pagename']
}
</script>

<style>

</style>