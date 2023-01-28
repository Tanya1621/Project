<template>
  <ul class="flex flex-row flex-wrap gap-4 my-14 w-full card_list">
    <li v-bind:key="card.title" v-for="card in cards">
      <CardComponent :card="card" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { cards } from "@/data/data";
import CardComponent from "@/components/Card.vue";

export default defineComponent({
  name: "CardList",
  components: { CardComponent },
  data() {
    return { cards };
  },
});
</script>

<style scoped></style>
