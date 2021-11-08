<template>
    <div class="task-card no-overflow">
        <div class="img-container">
            <img src="https://images.unsplash.com/photo-1634227555537-dfedab448cf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=492&q=80" alt="" class="full-img">
        </div>
        <div class="details-container">
            <div class="top-row">
            <div class="base-container">
                <h3 class="task-name">Help me repair my couch</h3>
            <h6 class="category">electrician</h6>
            </div>
            <div class="reward-container flex-center">
                <h5 class="reward">25000 FCFA</h5>
            </div>
        </div>
        <div class="desc-container">
            <p class="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Repellendus modi aliquid impedit aliquam velit odit quasi, earum quaerat 
                veritatis mollitia nihil consectetur doloremque dicta aut iste ut. 
                Reprehenderit dolorum porro, molestiae voluptatum excepturi aliquam saepe recusandae!
            </p>
        </div>
        <div class="bottom-row">
            <h5 class="location"><i class="fas fa-map-marker blue-icon-bg"></i>Logpom, Douala, Cameroon</h5>
            <h6 class="date">created 2 hours ago</h6>
        </div>
        <a href="#" class="details-link">view details</a>
    </div>
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

.task-card {
    width: 380px;
    border: 1px solid $darkgray;
    margin-bottom: 40px;
}

.img-container {
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
}

.details-container {
    display: flex;
    flex-direction: column;
    padding: 5px 5px;
}

.top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    .task-name {
        font-size: 17px;
        font-weight: 600;
    }
    .category {
        font-size: 12px;
        font-weight: 200;
        color: $gray;
        text-align: left;
    }
    .reward-container {
        padding: 0px 10px;
        height: 30px;
        background-color: $blue;
        border-radius: 10px;
        .reward {
            margin: 0;
            padding: 0;
            font-size: 12px;
            color: white;
        }
    }
}

.desc-container {
    margin: 0 auto;
    .desc {
        font-size: 12px;
        text-align: left;
    }
}

.bottom-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .location {
        font-size: 14px;
        i {
            margin-right: 3px;
        }
    }
    .date {
        font-size: 10px;
        color: $gray;
    }
}
.details-link {
    align-self: flex-start;
}
</style>
