<template>
  <div class="details-page">
    <div class="page">
      <section class="main-info-sec">
        <div class="main-info-container">
          <div class="img-sec">
            <div class="img-container no-overflow">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLqfekg_kitC_QJ5kgBUTh2tt5EIcxEnQDQ&usqp=CAU"
                alt=""
                class="full-img"
              />
            </div>
          </div>
          <div class="info-container">
            <h4 class="name">John Doe</h4>
            <h6 class="reviews">
              <i class="fas fa-star"></i>4.1/5 (20 reviews)
            </h6>
            <h5 class="location">
              <i class="fas fa-map-marker"></i>Logpom, Douala, Cameroon
            </h5>
            <h5 class="lang"><i class="fas fa-language"></i>English, French</h5>
          </div>
          <div class="actions-container">
            <div class="verified-container">
              <h6 class="verified-txt">
                <i class="fas fa-check-circle"></i>verified
              </h6>
            </div>
            <router-link to="/helper-details" class="select-btn">
            chat with helper
          </router-link>
          </div>
        </div>
      </section>
      <div class="divider"></div>
      <section class="details-txt-sec">
        <div class="details-txt-container">
            <h4 class="category-title">category</h4>
            <p class="desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi cumque ab atque ad rerum eius architecto temporibus magni quisquam ipsam! Repudiandae incidunt dicta, eos, consequuntur ratione aut ullam et amet placeat corrupti enim vitae eaque suscipit adipisci laudantium aperiam non reprehenderit libero. Fuga sed ad repudiandae 
                minus fugiat dolorum accusantium distinctio asperiores, dignissimos repellat necessitatibus in. Nemo inventore labore tenetur velit hic expedita enim cum modi.
            </p>
        </div>
      </section>
      <div class="divider"></div>
      <section class="work-sec">
        <div class="work-container"></div>
      </section>
    </div>
    <div class="page">
      <section class="history-sec">
        <div class="ratings-container">
          <h3 class="title">Work History and Feedback</h3>
          <div class="ratings-progress-container">
            <div class="rating-container">
              <h5 class="stars">5 stars</h5>
              <div class="progress-bar-container">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 70%"
                  >
                    <span class="sr-only">70% Complete</span>
                  </div>
                </div>
              </div>
              <div class="percentage">87%</div>
            </div>
            <div class="rating-container">
              <h5 class="stars">5 stars</h5>
              <div class="progress-bar-container">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 70%"
                  >
                    <span class="sr-only">70% Complete</span>
                  </div>
                </div>
              </div>
              <div class="percentage">87%</div>
            </div>
            <div class="rating-container">
              <h5 class="stars">5 stars</h5>
              <div class="progress-bar-container">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 70%"
                  >
                    <span class="sr-only">70% Complete</span>
                  </div>
                </div>
              </div>
              <div class="percentage">87%</div>
            </div>
            <div class="rating-container">
              <h5 class="stars">5 stars</h5>
              <div class="progress-bar-container">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 70%"
                  >
                    <span class="sr-only">70% Complete</span>
                  </div>
                </div>
              </div>
              <div class="percentage">87%</div>
            </div>
            <div class="rating-container">
              <h5 class="stars">5 stars</h5>
              <div class="progress-bar-container">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 70%"
                  >
                    <span class="sr-only">70% Complete</span>
                  </div>
                </div>
              </div>
              <div class="percentage">87%</div>
            </div>
          </div>
        </div>
        <div class="feedback-container">
          <div class="top-row">
            <h4 class="task-name">Help me repair my chair</h4>
            <h5 class="task-price">30000 FCFA</h5>
          </div>
          <div class="rating-row">
            <div class="stars-container">
                <i class="fas fa-star yellow-icon-bg"></i>
                <i class="fas fa-star yellow-icon-bg"></i>
                <i class="fas fa-star yellow-icon-bg"></i>
                <i class="fas fa-star yellow-icon-bg"></i>
                <i class="fas fa-star yellow-icon-bg"></i>
            </div>
            <h6 class="stars">5.0</h6>
            <h6 class="date">Jan 5 2020</h6>
          </div>
          <div class="desc-container">
            <p class="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              itaque consequuntur soluta ad rem reprehenderit optio dolore,
              dicta voluptate? Placeat possimus fuga, officiis nesciunt, sunt
              laborum voluptatum voluptas sint molestias architecto quis nobis?
              Soluta, labore quia.
            </p>
          </div>
        </div>
        <div class="feedback-container">
          <div class="top-row">
            <h4 class="task-name">Help me repair my chair</h4>
            <h5 class="task-price">30000 FCFA</h5>
          </div>
          <div class="rating-row">
            <div class="stars-container">
                <i class="fas fa-star yellow-icon-bg"></i>
                <i class="fas fa-star yellow-icon-bg"></i>
                <i class="fas fa-star yellow-icon-bg"></i>
                <i class="fas fa-star yellow-icon-bg"></i>
                <i class="fas fa-star yellow-icon-bg"></i>
            </div>
            <h6 class="stars">5.0</h6>
            <h6 class="date">Jan 5 2020</h6>
          </div>
          <div class="desc-container">
            <p class="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              itaque consequuntur soluta ad rem reprehenderit optio dolore,
              dicta voluptate? Placeat possimus fuga, officiis nesciunt, sunt
              laborum voluptatum voluptas sint molestias architecto quis nobis?
              Soluta, labore quia.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { navbarState } from "@/services/navbar";
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    navbarState.changeTitle(" - Helper - John Doe");
    navbarState.changeAuth(false);
    // this.getHelpers();
  },
  setup() {},
});
</script>


<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.details-page {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.page {
  width: 48%;
  margin-top: 20px;
}

.divider {
    width: 100%;
    height: 2px;
    background-color: $darkgray;
}

.main-info-sec {
  display: inline-block;
  margin-bottom: 20px;
  width: 100%;
}
.main-info-container {
  display: flex;
  width: 100%;
  .img-sec {
    width: 100px;
    .img-container {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
  }
}
.info-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
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
    font-size: 12px;
    i {
      color: $yellow;
    }
  }
  .location {
    font-weight: 500;
    font-size: 12px;
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
  margin-left: 30px;
  .verified-container {
    background-color: #3057b846;
    color: $blue;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    padding-top: 5px;
    .verified-txt {
      font-weight: 500;
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
      margin-top: 30px;
    }
}

.details-txt-sec {
    width: 100%;
    margin: 30px 0;
}
.details-txt-container {
    width: 100%;
    .category-title {
        text-align: left;
    }
    .desc {
        text-align: left;
        font-size: 15px;
        font-weight: 300;
    }
}

.history-sec {
    width: 100%;
}

.ratings-container {
    width: 80%;
    margin-bottom: 20px;
    .title {
        text-align: left;
        font-size: 25px;
        font-weight: 400;
    }
}

.rating-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .stars,.percentage {
        font-size: 13px;
    }
    .progress-bar-container {
        width: 70%;
        .progress-bar {
            background-color: $yellow;
        }
    }
}

.feedback-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .top-row {
        display: flex;
        justify-content: space-between;
        .task-name,.task-price {
            font-size: 18px;
        }
        .task-name {
            font-weight: 600;
        }
    }
    .rating-row {
        align-self: flex-start;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
    .stars-container {
        margin-right: 10px;
    }
    .stars,.date {
        margin: 0;
        padding: 0;
    }
    .stars {
        margin-right: 5px;
    }
    .date {
        font-size: 12px;
        color: $gray;
    }
    .desc-container {
        .desc {
            text-align: left;
            font-size: 13px;
        }
    }
}

@include mqx(900px) {
  .details-page {
    width: 95%;
    flex-direction: column;
  }
  .page {
    width: 100%;
  }
  .main-info-container {
    justify-content: space-between;
  }
}
</style>