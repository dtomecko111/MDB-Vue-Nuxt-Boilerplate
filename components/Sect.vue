<template>
   <div class="row section-description-row align-items-center align-content-center">
			<div class="col-md-6">
				<div class="section-description-thumbnail-wrap">
					<div class="section-description-thumbnail">
						<img :src="sect.imgUrl" alt="Our Story">
					</div>
				</div>
			</div>
			
			<div class="col-md-6">
				<div class="section-description">
					<h3>{{sect.title}}</h3>
					<p>{{sect.description}}</p>
					<a class="readmore" :href="sect.webUrl">{{sect.linkDesc}} &rsaquo;</a>
				</div>
			</div>
    	</div>
</template>

<script>
export default {
 props: {
    sect: {
      type: Object,
      default: () => ({}),
    },
  }
}
</script>

<style>

</style>