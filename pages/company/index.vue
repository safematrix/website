<template>
  <div class="About"> 
    <Header></Header>
    <GlobalLeaders></GlobalLeaders>
    <OrganizationalCulture></OrganizationalCulture>
    <Roadmap></Roadmap>
  </div>
</template>

<script>
export default {
  mounted(){
    new this.$wow.WOW().init()
  },
  methods: {
   
  }
}
</script>
<style lang="scss">
// .About{
//   min-width: 1400px;
// }
</style>
