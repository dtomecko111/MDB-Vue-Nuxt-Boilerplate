<template>
  <div id="content">
    <TopbarCP />
    <ReferFriendsCP />
  </div>
</template>


<script>
import TopbarCP from "~/components/customer/TopbarCP.vue";
import ReferFriendsCP from "~/components/customer/ReferFriendsCP.vue";
  export default {
      layout: 'customer',
       components: {
            TopbarCP,
            ReferFriendsCP
      }
  }
</script>