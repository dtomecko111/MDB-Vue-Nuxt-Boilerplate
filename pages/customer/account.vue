<template>
  <div id="content">
    <TopbarCP />
    <AccountCP />
  </div>
</template>


<script>
import TopbarCP from "~/components/customer/TopbarCP.vue";
import AccountCP from "~/components/customer/AccountCP.vue";
  export default {
      layout: 'customer',
       components: {
            TopbarCP,
            AccountCP
      }
  }
</script>