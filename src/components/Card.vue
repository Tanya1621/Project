<template>
  <div class="card_list__card">
    <h2 class="card__name text-4xl text-white mt-5 ml-5">{{ card.title }}</h2>
    <img :src="card.image" class="w-96 card_image" :alt="card.title" />
    <div class="caption h-2.5 bg-amber-600 w-100 my-1.5">
      <router-link class="text-black hover:text-pink-300" :to="'/Project/' + card.name"
      ><p class="text-6xl text-white text-center">GO</p></router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardComponent",
  props: {
    card: {
      type: Object,
      required: true

    },
  },
});
</script>

<style scoped>
.card__name {
  position: relative;
  z-index: 500;
}
.card_list__card {
  width: 390px;
  height: 450px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 0 10px 0px #e3cafa;
  overflow: hidden;
  position: relative;
}

.card_list__card::after {
  content: '';
  position: absolute;
  background-color: rgba(1, 1, 1, 0.3);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}

.caption {
  width: 390px;
  height: 100px;
  background-color: #fe6e2a;
  position: absolute;
  top: 370px;
  transition: all .3s ease;
  z-index: 500;
}

.caption:hover {
  top: 350px;
}

.card_image {
  position: absolute;
  object-fit: cover;
  top: 0;
  width: 100%;
  height: 100%;
}


</style>
