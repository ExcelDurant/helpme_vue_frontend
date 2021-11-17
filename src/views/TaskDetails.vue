<template>
  <basic-loader v-if="showLoader"></basic-loader>
  <proposal-pop v-if="showProsal" v-on:closePop="closePop()"></proposal-pop>
  <div v-if="task" class="task-details-page">
    <div class="page main-page">
      <div class="images-container">
        <div
          class="img-container no-overflow"
          v-for="(img, index) in task.pictures"
          :key="index"
        >
          <img :src="img" :alt="task.name" class="full-img" />
        </div>
      </div>
      <div class="top-row">
        <h2 class="task-name">{{ task.name }}</h2>
        <div class="reward-container flex-center">
          <h5 class="reward">{{ task.reward }} FCFA</h5>
        </div>
      </div>
      <div class="desc-container">
        <p class="desc">
          {{ task.description }}
        </p>
      </div>
    </div>
    <div class="page info-page">
      <basic-loader v-if="userLoader"></basic-loader>
      <div class="base-info-container flex-justify-down" v-if="user">
        <h5 class="date">
          <i class="fas fa-calendar-week blue-icon-bg"></i>{{ task.created_on }}
        </h5>
        <h5 class="location">
          <i class="fas fa-map-marker blue-icon-bg"></i
          >{{ task.address.country }}, {{ task.address.city }},
          {{ task.address.street }}
        </h5>
        <h3 class="creator">
          by <span class="creator-name">{{ user._doc.first_name }}</span>
        </h3>
        <h6 class="created-on">created 2 hours ago</h6>
      </div>
      <button v-if="!userLoader" @click.prevent="offerHelp()" class="help-btn">
          offer help
        </button>
    </div>
  </div>
</template>

<script lang="ts">
import { navbarState } from "@/services/navbar";
import { tokenState } from "@/services/token";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { Task } from "../../interfaces/task.interface";
import BasicLoader from "@/components/BasicLoader.vue";
import ProposalPop from "@/components/ProposalPop.vue";

export default defineComponent({
  components: { BasicLoader, ProposalPop},
  mounted() {
    navbarState.changeAuth(false);
    this.getTaskDetails(this.id.toString());
    // this.getHelpers();
  },
  setup() {
    const route = useRoute();
    const id = route.params.id;
    return {
      id,
    };
  },
  data() {
    return {
      tokenState: tokenState.state,
      showLoader: false,
      userLoader: false,
      task: null,
      user: null,
      showProsal:false
    };
  },
  methods: {
    offerHelp() {
      this.showProsal = true;
    },
    closePop() {
      this.showProsal = false;
    },
    getTaskDetails(id: string) {
      this.showLoader = true;
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.tokenState.token}`,
        },
      };
      fetch(
        "https://pure-archive-330723.uc.r.appspot.com/tasks/" + id,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode > 299) {
            this.showLoader = false;
            window.alert("wrong credentials");
            console.log(data);
          } else {
            this.showLoader = false;
            this.task = data;
            this.getTaskCreator(data);
            console.log(data);
            navbarState.changeTitle(" - Offer Help - "+data.name);
          }
        })
        .catch((err) => {
          this.showLoader = false;
          console.error(err);
        });
    },
    getTaskCreator(task: Task) {
      this.userLoader = true;
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.tokenState.token}`,
        },
      };
      fetch(
        "https://pure-archive-330723.uc.r.appspot.com/users/" + task.created_by,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          this.userLoader = false;
          if (data.statusCode > 299) {
            window.alert("wrong credentials");
            console.log(data);
          } else {
            this.user = data;
            console.log(data);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});
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
  margin: 0 auto;

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

@include mqx(900px) {
.task-details-page {
  width: 99%;
  flex-direction: column;
}
 .main-page {
   width: 100%;
 }

 .top-row {
   width: 100%;
 }
 .desc-container {
   width: 100%;
 }
 .info-page {
  margin-left: 0px;
  margin-bottom: 20px;
}
}

@include mqx(700px) {
  .images-container {
  width: 80%;

  .img-container {
    width: 150px;
    height: 100px;
  }
}
}
</style>
