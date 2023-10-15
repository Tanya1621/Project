<template>
  <div class="starred">
    <div class="place_list flex flex-wrap gap-4">
    <PlaceCard v-for="place in starred" :placeInfo="place" v-if="starred && starred.length"></PlaceCard>
    <p class="text-xl" v-else> It seems like your starred list is empty! Add something cool here :)</p>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useItemsStore } from "@/stores/placesStore";
import PlaceCard from "@/components/PlaceCard.vue";

export default defineComponent ({
  name: "`StarredPlaces`",
  components: { PlaceCard },
  setup() {
    const store = useItemsStore()
    return {store}
  },
  computed: {
    starred() {
      console.log('starred')
      return this.store.starred
      }
    }
});
</script>

<style>
</style>

