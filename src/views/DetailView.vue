<template>
  <Transition name="fade">
  <div class="detail-intro" v-if="show"></div>
  </Transition>
    <div class="movie-box">
      <a class="a-back" @click.stop="back">Home</a>
      <div class="movie-detail">
        <img class="movie-image" :src="movieInfo.image">
        <div class="movie-info-wrap">
          <h2 class="movie-title">{{movieInfo.title}}</h2>
          <span>{{movieInfo.original_title}}</span>
          <p class="movie-info">
            {{movieInfo.release_date}}'s <br>
            Director - {{movieInfo.director}} <br>
            Producer - {{movieInfo.producer}} <br>
            Running Time : {{movieInfo.running_time}} min
          </p>
          <p class="movie-desc">{{movieInfo.description}}</p>
        </div>
      </div>
    </div>
</template>

<script>
import { computed, onMounted, onUpdated, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex';
export default {
  setup(props,context){
    const route = useRoute();
    const id = route.params.id;
    
    const store = useStore();
    store.dispatch('fetchMovieInfo', id)
    const movieInfo = computed( () => store.getters.getMovieInfo )
    
    const router = useRouter();
    const back = () => {
      router.push('/page-ghibli/')
    }

    const show = ref(true);
    onMounted( () => {
      window.scrollTo(0,0);
      document.querySelector('html').style.overflowY = "hidden";
    })

    onUpdated( () => {
      show.value = false;
      document.querySelector('html').style.overflowY = "auto";
      context.emit('hide');
    })


    return{
      id,
      movieInfo,
      back,
      show
    }
  }
}
</script>

<style scoped>
.movie-box{
  position: relative;
  display: block;
  width: 100%;
  height: 105vh;
}

.a-back{
  position: sticky;
  right: 30px;
  top: 20px;
  display: block;
  float: right;
  margin: 20px 30px; 
  font-size: 19px;
  cursor: pointer;
  color: #999;
  transition: color 0.3s;
  z-index: 9999
}
.a-back:hover{
  color: #fff;
}

.movie-detail{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

}
.movie-image{
  position: relative;
  display: block;
  width: 33%;
  height: auto;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #111;
  
}

.movie-info-wrap{
  width: 50%;
  padding: 20px 0;
}
.movie-info{
  margin: 20px 0;
}
.movie-desc{
  color: #999;
}

.detail-intro{
  position: fixed;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  background:#000 url('@/assets/intro.png') no-repeat center;
  background-size: cover;
  z-index: 99;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


@media screen and (max-width: 1140px){
  .movie-image{
    height: 50vh;
    width: auto;
  }
  .a-back{
    font-size: 18px;
  }
}

@media screen and (max-width: 770px){
  .movie-image{
    height: 50vh;
    width: auto;
  }

  .movie-detail{
    align-content: center;
    align-items: flex-start;
  }
}
</style>