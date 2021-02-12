<template>
  <div id="wrapper">
    <SideBarCP />
    <div id="content-wrapper" class="d-flex flex-column">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      
      bodyAttrs: {
        class: "page-top",
      },
    };
  },
};
</script>

<style></style>