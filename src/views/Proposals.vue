<template>
  <div class="proposals-sec">
      <div class="proposals-container">
        <proposal-card></proposal-card>
        <proposal-card></proposal-card>
        <proposal-card></proposal-card>
        <proposal-card></proposal-card>
      </div>
  </div>
</template>

<script lang="ts">
import { navbarState } from "@/services/navbar";
import { defineComponent } from "vue";
import ProposalCard from "@/components/ProposalCard.vue";

export default defineComponent({
    components:{ProposalCard},
  mounted() {
    navbarState.changeTitle(" - Repair my television - Helpers's Proposals");
    navbarState.changeAuth(false);
    // this.getHelpers();
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.proposals-sec {
    width: 100%;
}

.proposals-container {
    width: 90%;
    margin: 20px auto;
}
</style>
