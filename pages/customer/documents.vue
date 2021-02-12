<template>
  <div id="content">
    <TopbarCP />
    <DockumentsCP />
  </div>
</template>


<script>
import TopbarCP from "~/components/customer/TopbarCP.vue";
import DockumentsCP from "~/components/customer/DockumentsCP.vue";
  export default {
      layout: 'customer',
       components: {
            TopbarCP,
            DockumentsCP
      }
  }
</script>