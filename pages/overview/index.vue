<template>
  <div class="Technology">
    <Header></Header>
    <ArchitectureDiagram></ArchitectureDiagram>
    <ComponentDiagram></ComponentDiagram>
    <CommunicationSecurity></CommunicationSecurity>
    <VerifiableAttestation></VerifiableAttestation>
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
@media screen and (min-width: 800px) {
  .Technology{
    min-width: 1400px;
  }
}
</style>
