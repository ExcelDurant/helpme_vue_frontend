<template>
  <div class="buttons-container">
    <router-link to="/" class="tasks-link" data-bs-toggle="tooltip" title="Tooltip on top">
      <!-- <span class="tooltiptext">Tooltip text</span> -->
      <div class="floating-content">
        <i class="fas fa-tasks"></i>
      </div>
    </router-link>
    <router-link to="/create-task" class="create-link" title="create task">
      <div class="floating-content">
        <i class="fas fa-plus"></i>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.buttons-container {
  width: 140px;
  position: fixed;
  right: 3%;
  bottom: 6%;
  display: flex;
  justify-content: space-between;
}

.floating-content {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: $blue;
  box-shadow: 2px 6px 20px 2px rgba(0, 0, 0, 0.26);
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    color: white;
    font-size: 30px;
  }
}

</style>