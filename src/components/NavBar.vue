<template>
  <header class="header">
    <nav class="navbar">
      <h1 class="logo">
        <i class="fas fa-bars" @click="openNav()"></i
        ><router-link to="/" class="logo-link">HelpMe</router-link
        ><span class="extra">{{ navState.title }}</span>
      </h1>
      <ul class="navlist">
        <li v-show="navState.showAuth">
          <router-link to="/login" class="navlink login">login</router-link>
        </li>
        <li v-if="navState.showAuth">
          <router-link to="/signup" class="navlink signup">signup</router-link>
        </li>
        <li v-if="userState.loggedIn" @click="logout()">
          <router-link to="/" class="navlink">logout</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <div class="mobile-overlay-nav" :class="{ mobile: showMobileMenu }">
    <div class="close-container nav-row">
      <button class="close-btn" @click="closeNav()"><i class="far fa-window-close"></i></button>
    </div>
    <div class="main-links-container nav-row">
      <router-link to="/ask-for-help" class="ask-link"
              >Ask For Help</router-link
            >
      <router-link to="/offer-help" class="help-link"
              >Offer Help</router-link
            >
    </div>
    <div class="links-list-container nav-row">
      <ul class="links-list">
        <li v-if="!userState.loggedIn">
          <router-link to="/login" class="link">login</router-link>
        </li>
        <li v-if="!userState.loggedIn">
          <router-link to="/signup" class="link">signup</router-link>
        </li>
      </ul>
      <div class="divider" v-if="!userState.loggedIn"></div>
      <ul class="links-list">
        <li v-if="userState.loggedIn">
          <router-link to="/profile" class="link">profile</router-link>
        </li>
        <li v-if="userState.loggedIn">
          <router-link to="/chat" class="link">inbox</router-link>
        </li>
      </ul>
      <div class="divider" v-if="userState.loggedIn"></div>
      <ul class="links-list">
        <li v-if="userState.loggedIn">
          <router-link to="/my-tasks" class="link">my tasks</router-link>
        </li>
        <li v-if="userState.loggedIn">
          <router-link to="/create-task" class="link">create a task</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineComponent } from "vue";
import { navbarState } from "@/services/navbar";
import { userState } from "@/services/user";
import { User } from "interfaces/user.interface";
import { tokenState } from "@/services/token";

// @Options({})
export default defineComponent({
  data() {
    return {
      navState: navbarState.state,
      userState: userState.state,
      showMobileMenu: false
    };
  },
  methods: {
    logout() {
      sessionStorage.clear();
      userState.setUser({} as User);
      userState.setAuth(false);
      tokenState.setToken("");
      this.$router.push('/');
    },
    openNav() {
        this.showMobileMenu = true;
        console.log(this.showMobileMenu);
    },
    closeNav() {
        this.showMobileMenu = false;
    }
  },
});
</script>


<style scoped lang="scss">
@import "@/styles/_variables.scss";
.header {
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: 0 2px 2px 0 #dcdcdccb;
  z-index: 100;
  display: flex;
  align-items: center;
}

.navbar {
  width: 90%;
  margin: 0 auto;
  // padding: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: 400;
  font-size: 25px;
  color: black;
  .logo-link {
    color: black;
  }
  i {
    margin-right: 15px;
    cursor: pointer;
    display: none;
  }
  @include mqx(900px) {
            .extra {
              display: none;
            }
        }
}

.navlist {
  display: flex;
  align-items: center;

  .navlink {
    padding: 2px 0px;
    width: 150px;
    margin-top: 15px;
    color: $blue;
    border: $blue-border;
    margin-left: 8px;
    border-radius: 20px;
    transition: 1s background-color, 1s color;

    &:hover {
      background-color: $blue;
      color: white;
    }
  }
}
.dropdown {
  position: relative;
}

.mobile-overlay-nav {
  height: 100%;
  width: 0;
  padding-top: 10px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 2px 2px 15px 1px rgb(168, 168, 168);
  overflow-x: hidden;
  transition: 0.5s;
  display: none;
  flex-direction: column;

  .close-container {
    width: 100px;
    align-self: flex-end;
    .close-btn {
        padding: 2px;
        font-size: 30px;
        color: $gray;
        background-color: transparent;
    }
  }
  .main-links-container {
    display: flex;
    margin-left: 10px;
    margin-bottom: 20px;
    a {
      border: 1px solid $blue;
      padding: 3px 10px;
    }
    .ask-link {
      background-color: $blue;
      color: white;
    }
    .help-link {
      color: $blue;
    }
  }
  .links-list-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
    .divider {
        width: 110%;
        margin-left: -10px;
        margin-bottom: 10px;
        height: 1px;
        background-color: $gray;
    }
    ul {
        margin: 0;
        padding-bottom: 5px;
        text-align: left;
      li {
          margin-left: -30px;
          margin-bottom: 5px;
      }
    }
    .link {
        color: $gray;
        font-weight: 500;
    }
  }
  @include mqx(700px) {
            display: flex;
        }
}
.mobile {
    width: 90%;
}

@include mqx(700px) {
  .logo {
    i {
      display: inline-block;
    }
  }
  .navlist {
    .signup {
      display: none;
    }
  }
}

@include mqx(500px) {
  .logo {
    i {
      display: inline-block;
    }
  }
  .navlist {
    .navlink {
      max-width: 120px;
    }
  }
}
</style>