<template>
  <div class="home">
    <div class="map-container">
      <div class="overlay">
        <div class="text-container">
          <h2 class="title">Create a Task and Get Help</h2>
          <p class="txt">
            Welcome to the help centric platform. Be a helper and sell your
            services or ask for help from those selling their services
          </p>
          <div class="links-container">
            <router-link to="/ask-for-help" class="home-link">Ask For Help</router-link>
            <router-link to="/offer-help" class="home-link">Offer Help</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { navbarState } from "@/services/navbar";
import { userState} from "@/services/user";

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  data() {
    return { msg: "", userState:userState.state };
  }
  mounted() {
    let userstate = userState.state;
    if(userstate.loggedIn) {
      navbarState.changeAuth(false);
    } else {
      navbarState.changeAuth(true);
    }
    navbarState.changeTitle("");
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.home {
  width: 100%;
  height: 91.5vh;
  background-color: white;
}

.map-container {
  width: 100%;
  height: 100%;
  background: url("../assets/map.png");
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
      padding: 15px 100px;
      background-color: rgba(255, 255, 255, 0.849);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .title {
        font-size: 29px;
        margin-bottom: 5px;
        font-weight: 600;
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
          padding: 5px 0;
          border: $blue-border;
          border-radius: 35px;
          font-weight: 500;
          transition: 1s background-color, 1s color;
        }
      }

      .links-container > .home-link {
        background-color: $blue;
        color: white;
        &:hover {
          background-color: $deepBlue;
          color: white;
        }
      }
      .links-container > .home-link ~ .home-link {
        background-color: white;
        color: $blue;
      }
    }
  }
}
</style>
