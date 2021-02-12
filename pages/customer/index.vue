<template>
  <div id="content">
    <TopbarCP />
    <DashboardCP />
  </div>
</template>


<script>
import TopbarCP from "~/components/customer/TopbarCP.vue";
import DashboardCP from "~/components/customer/DashboardCP.vue";
  export default {
      layout: 'customer',
       components: {
            TopbarCP,
            DashboardCP
      }
  }
</script>

<style></style>
