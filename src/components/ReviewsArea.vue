<template>
  <button @click="openPopup" class="write-review__button text-white text-xl my-4">Write a review</button>
  <div class="reviews-area__wrapper flex flex-col gap-4">
    <div class="reviews-area__review w-full" v-for="each in reviews">
      <p class="text-2xl mb-2">{{ each.author}}</p>
      <p class="text-xl">{{ each.review }}</p>
    </div>
  </div>
  <div v-if='popupOpened' class="popup" @click="closePopup">
    <div class="popup__content" @click.stop>
    <form class="review__form flex flex-col justify-between h-full">
      <h3 class="text-xl mb-4">Write a review</h3>
      <input type="text" class="input__review mb-4" v-model="author" placeholder="Your name"/>
      <textarea type="text" class="input__review" v-model="review" placeholder="Your review"/>
      <button type="submit" class="send__button" @click.prevent="sendReview">Send</button>
    </form></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useItemsStore } from "@/stores/placesStore";
type review = {
  author: string,
  review: string
}
export default defineComponent({
  name: "ReviewsArea",
  props: {
    id: String,
    reviews: Array
  },
  setup() {
    const store = useItemsStore()
    return { addReview: store.addReview }
  },
  data() {
    return {popupOpened: false, reviewsArray: [{ author: 'Author', review: 'This is my opinion'}] as review[], review: '', author: ''}
  },
  methods: {
    openPopup() {
      this.popupOpened = true;
    },
    closePopup() {
      this.popupOpened = false
    },
    sendReview() {
      this.addReview(this.id,{ author: this.author, review: this.review})
      this.closePopup()
      this.author = '';
      this.review = '';
    }
  },
},);
</script>

<style scoped>

.send__button {
  margin-top: 30px;
  background-color: #fe6e2a;
  width: 100%;
  border-radius: 10px;
  height: 50px;
}

.write-review__button {
  background-color: #fe6e2a;
  width: 200px;
  height: 50px;
  border-radius: 10px;
}

.input__review {
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 1px 1px #fe6e2a;
}

.reviews-area__review{
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px #fe6e2a;
  width: 800px;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 149, 120, .3);
  display: flex;
  align-items: center;
  justify-content: center;
}


.popup__content {
  width: 400px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
}
</style>