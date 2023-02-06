<script lang="ts">
import { defineComponent } from "vue";
import { cards } from "@/data/data";
import PlaceCard from "@/components/PlaceCard.vue";
import { places } from "@/data/data";

export default defineComponent({
  name: "PlaceList",
  components: {
    PlaceCard
  },
  computed: {
    placesArray() {
        return places.filter((el) => el.category === this.$route.params.placeList)
    }
  }
});
</script>


<template>
<div class="place_list flex flex-wrap gap-4">
<PlaceCard v-for="place in placesArray" :placeInfo="place"></PlaceCard>
</div>
</template>

<style>

</style>
