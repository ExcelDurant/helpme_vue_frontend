<template>
    <h1>task details</h1>
</template>

<script lang="ts">
import { navbarState } from '@/services/navbar';
import { defineComponent } from 'vue'

export default defineComponent({
        mounted() {
    navbarState.changeTitle(" - Offer Help - Help me reapir my home");
    navbarState.changeAuth(false);
    // this.getHelpers();
  },
    setup() {
        
    },
})
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

</style>
