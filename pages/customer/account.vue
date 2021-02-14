<template>

    <AccountCP />

</template>


<script>
import TopbarCP from "~/components/customer/TopbarCP.vue";
import AccountCP from "~/components/customer/AccountCP.vue";
  export default {
      layout: 'tryt',
       components: {
            TopbarCP,
            AccountCP
      }
};
</script>