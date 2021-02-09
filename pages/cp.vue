<template>
    <div>
        <Sect
          v-for="sect in leftArticles"
          :key="sect.id"
          :sect="sect"
        />
      </div>
</template>

<script>
import Sect from "~/components/Sect.vue";

export default {
   layout: 'plain',  
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
      return this.$store.state.pageList[0].sectionList.slice(0,2);
    }
  },
};
</script>

<style>

</style>