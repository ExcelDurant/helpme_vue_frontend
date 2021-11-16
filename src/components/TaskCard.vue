<template>
<!-- <router-link :to="'/task-details/'+ task._id" class="details-link"
        >view details</router-link
      > -->
  <router-link :to="'/task-details/'+ task._id" class="task-card no-overflow">
    <div class="img-container">
      <img :src="task.pictures[0]" :alt="task.name" class="full-img" />
    </div>
    <div class="details-container">
      <div class="top-row">
        <div class="base-container">
          <h3 class="task-name">{{ task.name }}</h3>
          <h6 class="category">{{ task.category[0] }}</h6>
        </div>
        <div class="reward-container flex-center">
          <h5 class="reward">{{ task.reward }} FCFA</h5>
        </div>
      </div>
      <div class="desc-container">
        <p class="desc">
          {{ task.description }}
        </p>
      </div>
      <div class="bottom-row">
        <h5 class="location">
          <i class="fas fa-map-marker blue-icon-bg"></i
          >{{ task.address.street }}, {{ task.address.city }},
          {{ task.address.country }}
        </h5>
        <h6 class="date">{{ task.created_on }}</h6>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "interfaces/task.interface";

export default defineComponent({
  props: {
    task: {},
  },
  setup() {},
  data() {
    return {
      task: this.task as Task,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.task-card {
  width: 380px;
  border: 1px solid $darkgray;
  margin-bottom: 40px;
  margin-right: 20px;
  overflow: hidden;
  cursor: pointer;
  color: rgb(48, 48, 48);
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
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 5; /* number of lines to show */
   -webkit-box-orient: vertical;
  }
}

.bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .location {
    font-size: 11px;
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

@include mqx(980px) {
  .task-card {
    border: none;
    align-self: center;
    // padding: 1px;
    box-shadow: 2px 2px 10px 2px rgb(196, 194, 194);
    border-radius: 10px;
    width: 300px;
  }
  .details-container {
  display: flex;
  flex-direction: column;
  padding: 5px;
}
.bottom-row {
  .location {
    font-size: 8px;
  }
}
}
</style>
