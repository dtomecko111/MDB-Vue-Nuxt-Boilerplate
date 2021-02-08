<template>
 <mdb-container>
  <BreadCrumb />
  <br/>

    <mdb-row>
      <Recent />
   </mdb-row>
  </mdb-container>

</template>

<script>
import { mdbContainer , mdbRow, mdbCol} from "mdbvue";
import Recent from "~/components/Recent.vue";
import BreadCrumb from "~/components/BreadCrumb.vue";
export default {
  components: {
    Recent,
    BreadCrumb,
        mdbContainer,
      mdbRow,
      mdbCol
  }
};
</script>

<style>

</style>
