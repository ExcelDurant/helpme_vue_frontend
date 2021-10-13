<template>
  <NavBar />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/trial">Trial</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <main class="page">
    <router-view />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src

@Options({
  components: {
    NavBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

html,body {
  height: 100%;
}

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  z-index: 1;
}

a {
  text-decoration: none;
  display: inline-block;
}

button {
  display: inline-block;
}

ul {
  list-style: none;
}

.full-img {
  width: 100%;
  height: 100%;
}



</style>
