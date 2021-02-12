<template>
<div>
    <HeroAbout  v-for="pagename in leftArticles"
          :key="pagename.id"
          :pagename="pagename"/>
    <TopicSections />
   
</div>
</template>

<script>
  
  import TopicSections from "~/components/TopicSections.vue";
  import HeroAbout from "~/components/HeroAbout.vue";

  export default {      
      computed: {
    leftArticlesCount() {
      return 0;
    },
    leftArticles() {
      return this.$store.state.pageList.slice(1, 2);
    }
    
},
    async asyncData({ params }) {
      const slug = params.slug // When calling /abc the slug will be "abc"
      return { slug }
    },
     components: {
         HeroAbout,
            TopicSections
      }
  }
</script>

