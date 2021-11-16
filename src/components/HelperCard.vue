<template>
     <div class="helper-card">
        <div class="img-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLqfekg_kitC_QJ5kgBUTh2tt5EIcxEnQDQ&usqp=CAU" alt="" class="full-img">
        </div>
        <div class="info-container">
          <h4 class="name">John Doe</h4>
          <h6 class="reviews"><i class="fas fa-star"></i>4.1/5 (20 reviews)</h6>
          <h5 class="location"><i class="fas fa-map-marker"></i>Logpom, Douala, Cameroon</h5>
          <h5 class="lang"><i class="fas fa-language"></i>English, French</h5>
        </div>
        <div class="actions-container">
          <div class="verified-container">
            <h6 class="verified-txt"><i class="fas fa-check-circle"></i>verified</h6>
          </div>
          <router-link to="/helper-details" class="select-btn">
            select helper
          </router-link>
        </div>
      </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.helper-card {
  width: 45%;
  box-shadow: 0px 4px 10px 1px rgb(207, 207, 207);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 8px 15px;
  margin-bottom: 30px;
  .img-container {
    width: 85px;
    height: 85px;
    border-radius: 50%;
    overflow: hidden;
  }
  .info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    i {
      margin-right: 5px;
    }
    .name {
      font-weight: 700;
      font-size: 18px;
    }
    .reviews {
      font-weight: 300;
      color: $gray;
      i {
        color: $yellow;
      }
    }
    .location {
      font-weight: 500;
      font-size: 16px;
      i {
        color: $blue;
      }
    }
    .lang {
      font-weight: 300;
      font-size: 16px;
    }
  }
  .actions-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .verified-container {
      background-color: #3057b846;
      color: $blue;
      border-radius: 5px;
      padding: 5px 10px;
      margin-bottom: 20px;
      .verified-txt {
        font-weight: 500;
        margin: 0;
        i {
          color: $blue;
          margin-right: 5px;
        }
      }
    }
    .select-btn {
      background-color: $green;
      border-radius: 15px;
      color: white;
      border: none;
      padding: 3px 10px;
      font-size: 15px;
    }
  }
}

@include mqx(700px) {
  .helper-card {
    width: 100%;
  }
}
</style>