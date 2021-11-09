<template>
    <div class="task-details-page">
      <div class="page main-page">
        <div class="images-container">
          <div class="img-container no-overflow">
            <img src="https://images.unsplash.com/photo-1634227555537-dfedab448cf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=492&q=80" alt="" class="full-img">
          </div>
          <div class="img-container no-overflow">
            <img src="https://images.unsplash.com/photo-1634227555537-dfedab448cf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=492&q=80" alt="" class="full-img">
          </div>
          <div class="img-container no-overflow">
            <img src="https://images.unsplash.com/photo-1634227555537-dfedab448cf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=492&q=80" alt="" class="full-img">
          </div>
          <div class="img-container no-overflow">
            <img src="https://images.unsplash.com/photo-1634227555537-dfedab448cf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=492&q=80" alt="" class="full-img">
          </div>
          <div class="img-container no-overflow">
            <img src="https://images.unsplash.com/photo-1634227555537-dfedab448cf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=492&q=80" alt="" class="full-img">
          </div>
          <div class="img-container no-overflow">
            <img src="https://images.unsplash.com/photo-1634227555537-dfedab448cf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=492&q=80" alt="" class="full-img">
          </div>
        </div>
        <div class="top-row">
          <h2 class="task-name">Help me repair my home</h2>
          <div class="reward-container flex-center">
            <h5 class="reward">25000 FCFA</h5>
          </div>
        </div>
        <div class="desc-container">
          <p class="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veritatis quia non dicta a 
            minus error esse praesentium at est? Nihil consectetur laborum perspiciatis cupiditate 
            reprehenderit culpa est similique,
             assumenda, in iste voluptates nemo, ut magni fugit. Fugiat, adipisci sit aliquid 
             aliquam voluptatem odio dolores sequi iusto est enim rerum, natus magnam fuga facilis 
             cumque, ullam atque repellendus ipsum rem. Consequatur laboriosam numquam dolorum sit 
             consectetur? Mollitia error explicabo, corrupti consectetur quaerat numquam eligendi nisi 
             tempore quis cupiditate! Officia soluta, omnis at, architecto maiores iusto animi doloribus 
             sed amet porro cum libero qui eligendi rerum temporibus voluptatum, aperiam cupiditate 
             repellat? Ipsum velit animi dolorum pariatur cum tempora dolorem quis, id dolores 
             repudiandae exercitationem eveniet reiciendis. Eius, itaque suscipit. Debitis, deserunt.
          </p>
        </div>
      </div>
      <div class="page info-page">
        <div class="base-info-container flex-justify-down">
          <h5 class="date"><i class="fas fa-calendar-week blue-icon-bg"></i>October 8, 2021</h5>
          <h5 class="location">
                <i class="fas fa-map-marker blue-icon-bg"></i>Cameroon, Douala, Logpom
            </h5>
            <h3 class="creator">by <span class="creator-name">John Doe</span></h3>
            <h6 class="created-on">created 2 hours ago</h6>
            <button @click.prevent="offerHelp()" class="help-btn">offer help</button>
        </div>
      </div>
    </div>
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
    methods:{
      offerHelp() {
        this.$router.push('/chat');
      }
    }
})
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.task-details-page {
  width: 90%;
  margin: 0 auto;
  display: flex;
}

.page {
  margin-top: 20px;
}

.main-page {
  width: 70%;
  display: flex;
  flex-direction: column;
}

.images-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .img-container {
    width: 250px;
    height: 150px;
    margin-bottom: 20px;
    margin-right: 20px;
  }
}

.top-row {
  width: 85%;
  display: flex;
  justify-content: space-between;
  .task-name {
    font-size: 25px;
    font-weight: 600;
  }
}

.desc-container {
  width: 85%;
  .desc {
    text-align: left;
    font-weight: 300;
    font-size: 15px;
  }
}

.info-page {
  margin-left: 40px;
}

.base-info-container {
  align-items: flex-start;
  i {
      margin-right: 5px;
    }
  .date {
    font-size: 12px;
  }
  .location {
    font-size: 12px;
  }
  .creator {
    font-size: 14px;
    .creator-name {
      font-size: 16px;
      font-weight: 600;
    }
  }
  .created-on {
    font-size: 10px;
    color: $gray;
  }
  .help-btn {
    width: 150px;
    color: white;
    padding: 5px 0;
    margin-top: 20px;
    font-weight: 500;
    background-color: $green;
    border-radius: 20px;
  }
}
</style>
