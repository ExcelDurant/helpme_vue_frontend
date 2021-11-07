<template>
    <div class="proposal-container">
        <div class="img-sec">
            <div class="profile-img-container no-overflow">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLqfekg_kitC_QJ5kgBUTh2tt5EIcxEnQDQ&usqp=CAU" alt="" class="full-img">
        </div>
        </div>
        <div class="details-container">
            <h4 class="name">John Doe</h4>
          <h6 class="reviews"><i class="fas fa-star"></i>4.1/5 (20 reviews)</h6>
          <p class="details">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis asperiores eveniet fuga aliquam quisquam optio magni cumque. Perferendis
               dicta velit blanditiis, iusto consectetur quam obcaecati sequi? Ad in consequatur dolorum quos cumque quod expedita ut ex.
          </p>
          <a href="#" class="reply-link">reply</a>
        </div>
        <div class="actions-container">
            <button class="select-btn">select helper</button>
            <h6 class="timer">10 minutes ago</h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.proposal-container {
    width: 100%;
    border: 1px solid $borderColor;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 30px;
}

.img-sec {
    width: 200px;
    .profile-img-container {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 30px;
}
}

.details-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .name {
        font-size: 15px;
        font-weight: 600;
    }
    .reviews {
        font-weight: 300;
      color: $gray;
      i {
        color: $yellow;
      }
    }
    .details {
        font-size: 12px;
        text-align: left;
    }
    .reply-link {
        font-size: 12px;
    }
}

.actions-container {
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-self: center;

    .select-btn {
         background-color: $green;
      border-radius: 15px;
      color: white;
      border: none;
      width: 150px;
      padding: 3px 0;
      font-size: 15px;
      margin-bottom: 20px;
    }
    .timer {
        font-size: 12px;
    }
}
</style>