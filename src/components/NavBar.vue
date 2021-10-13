<template>
    <header class="header">
        <nav class="navbar">
            <h1 class="logo">HelpMe</h1>
            <ul class="navlist">
                <li><a href="#" class="navlink">login</a></li>
                <li><a href="#" class="navlink">signup</a></li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class Navbar extends Vue {

}
</script>


<style scoped lang="scss">
@import '@/styles/_variables.scss';
    .header {
        width: 100%;
        min-height: 40px;
        background-color: white;
        box-shadow: 0 8px 2px 0 #dcdcdccb;
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
        }
    }
</style>