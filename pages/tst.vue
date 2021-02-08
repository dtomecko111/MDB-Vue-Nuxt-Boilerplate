<template>
<div>
<MakeTheSwitch />
<Recent />
</div>
</template>

<script>
import MakeTheSwitch from "~/components/MakeTheSwitch.vue";
import Recent from "~/components/Recent.vue";
  export default {
      layout: 'plain',
       components: {
            MakeTheSwitch,
            Recent
      }
  }
</script>

<style>

</style>