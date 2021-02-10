<template>
  <form method="post" @submit.prevent="ziplookup">
        <h2>Enter your zip code to find the prices and plans that are right for you</h2>

        <input id="zip" class="form-control" name="zip" type="text" pattern="[0-9]*">

        <div class="form-check form-check-inline">
            <input type="radio" id="resi" class="form-check-input" name="BtnActType" value="Residential" checked=""> 
            <label class="form-check-label" for="resi">Residential</label>
        </div>

        <div class="form-check form-check-inline">
            <input type="radio" id="comm" class="form-check-input" name="BtnActType" value="Commercial">
            <label class="form-check-label" for="comm">Commercial</label>
        </div>

        <button type="submit" class="btn btn-primary" >Sign Up Today!</button>
    </form>
</template>

<script>
import Notification from '~/components/Notification.vue';
export default {
  components: {
    Notification,
  },

  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async ziplookup() {
      try {
        

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>

<style>

</style>