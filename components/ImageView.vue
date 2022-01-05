<template>
    <div @touchmove.prevent class="ImageView" v-if="url">
        <img class="close" src="~assets/imgH5/close-white.png" @click="url = ''" alt=""/>
        <img class="img" :src="require(`~/assets/img/${url}.png`)" alt="">
    </div>    
</template>
<script>
export default {

  data(){
      return{
          show:false,
          url:''
      }
  },
  methods:{
      init(url){
          this.url = url
      }
  }

}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 800px) {
    .ImageView{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100000;
        background-color: rgba(0,0,0,0.8);
        .close{
            position: absolute;
            color: #fff;
            top: 20px;
            right: 20px;
            width: 30px;
        }
        .img{
            width: 100%;
            height: auto;
        }
    }
}
@media screen and (min-width: 800px) {
    .ImageView{
        display: none;
    }
}
</style>