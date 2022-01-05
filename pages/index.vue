<template>
  <div class="homePage"> 
    <Header></Header>
    <HomeTop></HomeTop>
    <Project></Project> 
    <Creation></Creation> 
    <Dao></Dao> 
    <JoinUs></JoinUs>
  </div>
</template>

<script>
export default {
  mounted(){
    new this.$wow.WOW().init()
  },
}
</script>
