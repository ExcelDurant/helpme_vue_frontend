<template>
  <div class="card-container">
    <h2 class="title">Task Proposal</h2>
    <form action="" class="proposal-form" @submit.prevent="offerHelp()">
        <textarea name="" placeholder="enter something descriping what you can do" id="" cols="30" rows="10" class="proposal-txt" required></textarea>
            <button type="button" class="btn btn-danger" v-on:click="$emit('closePop')">close</button>
    <button type="submit" class="help-btn">Offer Help</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  methods: {
      offerHelp() {
      this.$router.push("/chat");
    },
    closePop() {

    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.card-container {
  background-color: white;
  box-shadow: 2px 2px 15px 2px rgba(150, 150, 150, 0.39);
  border-radius: 20px;
  z-index: 100;
  position: absolute;
  padding: 20px 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
      margin-bottom: 20px;
  }
  .proposal-txt {
      margin-bottom: 20px;
      padding: 10px;
  }
  .btn {
      border-radius: 20px;
      margin-right: 10px;
      width: 150px;
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
