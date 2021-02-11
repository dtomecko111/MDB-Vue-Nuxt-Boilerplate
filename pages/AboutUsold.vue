<template>
<div>
<TopicSections />
</div>
</template>

<script>
import TopicSections from "~/components/TopicSections.vue";
  export default {
      layout: 'about',
       components: {
            TopicSections
      }
  }
</script>

<style>
 <img :src="`https://cdn.cve.so/img/Themes/DefaultClean/Content/images/${this.slug.toLowerCase()}-hero-bg.webp`">
</style>