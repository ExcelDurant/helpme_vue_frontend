<template>
  <div class="home">
    <div class="map-container">
      <div class="overlay">
        <div class="text-container">
          <h2 class="title">Create a Task and Get Help</h2>
          <p class="txt">
            Welcome to the help centric platform. Be a helper and sell your services or ask for help from those selling their services
          </p>
          <div class="links-container">
            <a href="#" class="home-link">Ask For Help</a>
            <a href="#" class="home-link">Offer Help</a>
          </div>
        </div>
      </div>
    </div>
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

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.home {
  width: 100%;
  height: 91.5vh;
  background-color: white;
}

.map-container {
  width: 100%;
  height: 100%;
  background: url('../assets/map.png');
  background-repeat: no-repeat;
  background-size: cover;

  .overlay {
    width: 100%;
    height: 100%;
    background-color: #92929241;
    display: flex;
    justify-content: center;
    align-items: center;

    .text-container {
      width: 45%;
      border-radius: 35px;
      padding: 18px 100px;
      background-color: rgba(255, 255, 255, 0.849);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .title {
        font-size: 29px;
        margin-bottom: 5px;
      }
      .txt {
        font-size: 15px;
        font-weight: 200;
        margin-bottom: 10px;
      }
      .links-container {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        .home-link {
          width: 160px;
          padding: 6px 0;
          border: $blue-border;
          border-radius: 35px;
          font-weight: 500;
        }
      }

      .links-container > .home-link {
        background-color: $blue;
        color: white;
      }
      .links-container > .home-link ~ .home-link {
        background-color: white;
        color: $blue;
      }
    }
  }
}
</style>
