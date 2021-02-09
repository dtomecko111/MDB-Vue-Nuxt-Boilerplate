<template>
   <div class="master-column-wrapper container">
	  <div class="row">
	  	<div class="breadcrumb white">
			<ul>
				<li><a href="/">Home</a></li>
				<li>About Us</li>
			</ul>
		 </div>
	  </div>
	   <div>
        <Sect
          v-for="sect in leftArticles"
          :key="sect.id"
          :sect="sect"
        />
      </div>     	
	  
	  
  </div>
</template>

<script>
import Sect from "~/components/Sect.vue";

export default {
     components: {
    Sect,
  },
  props: {
    sect: {
      type: Array,
      default: () => [],
    },
  },
   computed: {
    leftArticles() {
      return this.$store.state.pageList[0].sectionList.slice(0,3);
    }
  },
};   
</script>

<style>

</style>