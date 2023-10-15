<script lang="ts">
import { defineComponent } from "vue";
import { cards } from "@/data/data";
import PlaceCard from "@/components/PlaceCard.vue";
import { places } from "@/data/data";
import { useItemsStore } from "@/stores/placesStore";

export default defineComponent({
  name: "PlaceList",
  setup() {
    const store = useItemsStore();
    return { getPlacesByCategory: store.getPlacesByCategory };
  },
  components: {
    PlaceCard
  },
  computed: {
    placesArray() {
      if (typeof this.$route.params.placeList === "string") {
        return this.getPlacesByCategory(this.$route.params.placeList);
      }
    }
  }
});
</script>


<template>
  <ul class="place_list flex flex-wrap gap-4 my-14">
    <PlaceCard v-for="place in placesArray" :placeInfo="place"></PlaceCard>
  </ul>
</template>

<style>

</style>
