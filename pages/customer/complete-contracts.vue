<template>
  <div id="content">
    <TopbarCP />
    <CompleatContractCP />
  </div>
</template>


<script>
import TopbarCP from "~/components/customer/TopbarCP.vue";
import CompleatContractCP from "~/components/customer/CompleatContractCP.vue";
  export default {
      layout: 'customer',
       components: {
            TopbarCP,
            CompleatContractCP
      }
  }
</script>
