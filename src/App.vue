<template>
  <div class="wrap">
    <h1 class="main-title">GHIBLI STUDIO</h1>
    <div class="container">
      <Transition name="fade">
      <div class="intro" v-if="show"></div>
      </Transition>
      <router-view @hide="hideIntro"/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import $ from 'jquery'

export default {

  setup(){
    // vuex 에 dispatch 
    const store = useStore();
    store.dispatch('fetchMovieList')

    const show = ref(true)
    const hideIntro = () => {
      show.value = false;
      document.querySelector('html').style.overflowX = 'auto';
      document.querySelector('html').style.overflowY = 'auto';
    }

  $('html').on('mousewheel', function (e) {
    const wheelDelta = e.originalEvent.wheelDelta;
    if (wheelDelta > 0) {
      console.log("up");
      $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
    } else {
      console.log("down");
      $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
    }
  });
  


    return{
      show,
      hideIntro
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

a {
  color: #fff;
  text-decoration: none;
}

html{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 16px;
  background: #222;
  color: #fff;
  overflow-x: hidden;
  overflow-y: hidden;
  scroll-behavior:smooth;
}

.wrap{
  position: relative;
  display: block;
}

.container{
  position: relative;
  display: flex;
}


.intro{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background:#000 url('@/assets/intro.png') no-repeat 20% center;
  background-size: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


/* scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 5px;
  background-color: #f7f7f7;
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  border-radius: 0px;
}

::-webkit-scrollbar-thumb {
  background-color: #aaa;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}

.main-title{
  font-size: 37px;
  position: fixed;
  top: 0;
  left: 50%;
  display: block;
  width: 100%;
  height: 77px;
  text-align: center;
  background-color: #222;
  transform: translateX(-50%);
  padding-top: 20px;
  z-index: 98;
}

</style>