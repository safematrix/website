<template>
  <div class="Customers"> 
    <Header></Header>
    <Gamefi></Gamefi>
    <Defi></Defi>
    <ForOthers></ForOthers>
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
.Customers{
    // min-width: 1400px;
}
</style>
