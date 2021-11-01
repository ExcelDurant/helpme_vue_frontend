<template>
    <header class="header">
        <nav class="navbar">
            <h1 class="logo"><router-link to="/" class="logo-link">HelpMe</router-link>{{navState.title}}</h1>
            <ul class="navlist">
                <li v-show="navState.showAuth"><router-link to="/login" class="navlink">login</router-link></li>
                <li v-if="navState.showAuth"><router-link to="/signup" class="navlink">signup</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { defineComponent } from 'vue'
import{ navbarState }from "@/services/navbar"

// @Options({})
export default defineComponent({
    data() {
        return {
            navState:navbarState.state
        }
    }

})
</script>


<style scoped lang="scss">
@import '@/styles/_variables.scss';
    .header {
        width: 100%;
        min-height: 5vh;
        background-color: white;
        box-shadow: 0 2px 2px 0 #dcdcdccb;
        z-index: 100;
    }

    .navbar {
        width: 90%;
        margin: 0 auto;
        padding: 8px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-weight: 400;
        color: black;
        .logo-link {
            color: black;
        }
    }

    .navlist {
        display: flex;

        .navlink {
            padding: 2px 0;
            // font-size: 20px;
            width: 120px;
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
</style>