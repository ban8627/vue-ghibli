<template>
  <div class="wrap">
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  components: {
  },
  setup() {   

    // vuex 에 dispatch 전송
    const store = useStore();
    // 각각의 페이지에서 자료 호출 할지는 개인의 판단
    store.dispatch('fetchMovieList')

    return { 

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
ul,li {
  list-style: none;
}
a {
  color: #333;
  text-decoration: none;
}
html {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  background: #eff3f7;
}
.wrap {
  position: relative;
  display: block;
}
.container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>