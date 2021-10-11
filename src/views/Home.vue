<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="main-container">
      <h2 class="title">HelpMe App</h2>
      <p class="counter">{{ counter }}</p>
      <button class="btn" @click="increment">increment</button>
      <p>{{ message }}</p>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

  private counter:number = 10;
  private message:string = 'Welcome to this awesome app';

  public increment() {
    this.counter++
  }
  data() {
    return {count:0}
  }
  
}
</script>
