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
      </ul>
      <div class="profile-container" v-if="userState.loggedIn">
        <div class="chat-icon-container">
          <router-link to="/chat" class="dropdown-link"
            ><i class="fas fa-comments"></i
          ></router-link>
        </div>
        <div class="notification-icon-container">
          <router-link to="/notifications" class="dropdown-link"
            ><i class="fas fa-bell"></i
          ></router-link>
        </div>
        <router-link
                to="/profile" class="user-avatar-container no-overflow">
          <img :src="user.photoUrl" alt="" class="full-img" />
        </router-link>
        <div class="dropdown-arrow-container">
          <button class="drop-btn" @click="dropDown()">
            <i
              class="fas fa-chevron-down"
              :class="{ rotate: showDropdown }"
            ></i>
          </button>
        </div>
        <div class="profile-dropdown-container" :class="{ drop: showDropdown }">
          <ul class="dropdown-list">
            <li>
              <router-link
                to="/profile"
                @click="dropDown()"
                class="dropdown-link"
                >profile</router-link
              >
            </li>
            <div class="divider"></div>
            <li>
              <router-link
                to="/create-task"
                @click="dropDown()"
                class="dropdown-link"
                >create a task</router-link
              >
            </li>
            <div class="divider"></div>
            <li>
              <router-link
                to="/my-tasks"
                @click="dropDown()"
                class="dropdown-link"
                >my tasks</router-link
              >
            </li>
            <div class="divider"></div>
            <li><a @click="logout()" class="dropdown-link">logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div class="mobile-overlay-nav" :class="{ mobile: showMobileMenu }">
    <div class="close-container nav-row">
      <button class="close-btn" @click="closeNav()">
        <i class="far fa-window-close"></i>
      </button>
    </div>
    <div class="main-links-container nav-row">
      <router-link to="/ask-for-help" class="ask-link"
        >Ask For Help</router-link
      >
      <router-link to="/offer-help" class="help-link">Offer Help</router-link>
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
          <router-link to="/create-task" class="link"
            >create a task</router-link
          >
        </li>
      </ul>
      <div class="divider" v-if="userState.loggedIn"></div>
      <ul class="links-list">
        <li v-if="userState.loggedIn">
          <a @click="logout()" class="link">logout</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineComponent, toRefs } from "vue";
import { navbarState } from "@/services/navbar";
import { userState } from "@/services/user";
import { User } from "interfaces/user.interface";
import { tokenState } from "@/services/token";

// @Options({})
export default defineComponent({
  setup() {
    let { user } = toRefs(userState.state);
    return {
      user,
    };
  },
  data() {
    return {
      navState: navbarState.state,
      userState: userState.state,
      showMobileMenu: false,
      showDropdown: false,
    };
  },
  methods: {
    logout() {
      sessionStorage.clear();
      userState.setUser({} as User);
      userState.setAuth(false);
      tokenState.setToken("");
      this.$router.push("/");
      navbarState.changeAuth(true);
    },
    openNav() {
      this.showMobileMenu = true;
      console.log(this.showMobileMenu);
    },
    closeNav() {
      this.showMobileMenu = false;
    },
    dropDown() {
      this.showDropdown = !this.showDropdown;
    },
    dropUp() {
      this.showDropdown = false;
    },
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

.profile-container {
  display: flex;
  align-items: center;
  position: relative;
  i {
    font-size: 22px;
    margin-left: 5px;
    color: rgb(27, 27, 27);
  }
  .user-avatar-container {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: 25px;
  }
  .dropdown-arrow-container {
    i {
      font-size: 18px;
      color: $gray;
    }
    .drop-btn {
      background-color: transparent;
    }
    .rotate {
      transform: rotate(180deg);
    }
    @include mqx(700px) {
    display: none;
  }
  }

  .profile-dropdown-container {
    position: absolute;
    overflow: hidden;
    width: 200px;
    height: 0;
    background-color: white;
    box-shadow: 2px 2px 10px 1px rgb(206, 206, 206);
    margin-top: 5px;
    top: 100%;
    left: -40%;
    transition: 0.5s;
    .dropdown-list {
      margin-top: 10px;
      text-align: left;
      padding: 0;
      padding-left: 5px;
      .divider {
        background-color: rgb(175, 175, 175);
      }
      .dropdown-link {
        color: $gray;
        margin-bottom: 5px;
        &:hover {
          color: black;
        }
      }
    }
    @include mqx(700px) {
    display: none;
  }
  }
  .drop {
    height: inherit;
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