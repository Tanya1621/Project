<script lang="ts">
import {defineComponent} from "vue";
import {cards} from "@/data/data";

export default defineComponent({
  name: "CardView",
  // components: {
  //   CardList
  // }
  computed: {
    element() {
      return cards.find((el) => el.name === this.$route.params.id)
    }
  }
})
</script>


<template>
  <div class="" v-if="element">
    <h1 class="text-center text-6xl text-black mb-4">{{element.title}}</h1>

  <img :src="element.image" class="w-96 mx-auto">
  <p class="text-black">{{element.description}}</p>
  </div>
</template>

<style>
</style>
