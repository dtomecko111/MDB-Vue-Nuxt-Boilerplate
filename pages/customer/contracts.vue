<template>
  <div id="content">
    <TopbarCP />
    <ContractsCP />
  </div>
</template>


<script>
import TopbarCP from "~/components/customer/TopbarCP.vue";
import ContractsCP from "~/components/customer/ContractsCP.vue";
  export default {
      layout: 'customer',
       components: {
            TopbarCP,
            ContractsCP
      }
  }
</script>