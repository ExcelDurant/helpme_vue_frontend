<template>
    <div class="task-card">
        <div class="img-container">
            <img src="https://images.unsplash.com/photo-1634227555537-dfedab448cf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=492&q=80" alt="" class="full-img">
        </div>
        <div class="top-row">
            <h3 class="task-name">Help me repair my couch</h3>
            <div class="reward-container">
                <h5 class="reward">25000 FCFA</h5>
            </div>
        </div>
        <h6 class="category">electrician</h6>
        <div class="desc-container">
            <p class="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Repellendus modi aliquid impedit aliquam velit odit quasi, earum quaerat 
                veritatis mollitia nihil consectetur doloremque dicta aut iste ut. 
                Reprehenderit dolorum porro, molestiae voluptatum excepturi aliquam saepe recusandae!
            </p>
        </div>
        <div class="bottom-row">
            <h5 class="location"><i class="fas fa-map-marker"></i>Logpom, Douala, Cameroon</h5>
            <h6 class="date">created 2 hours ago</h6>
        </div>
        <a href="#" class="details-link">view details</a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

</style>
