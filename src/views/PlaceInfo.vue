<template>
<h1 class="text-6xl mb-10"> {{this.place.name}} </h1>
  <img class="place-info__image mx-auto" :src="this.place.image">
  <p class="text-2xl mt-5"> {{this.place.description}}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useItemsStore } from "@/stores/placesStore";

export default defineComponent ({
  name: "PlaceInfo",
  setup() {
    const store = useItemsStore()
    return {getPlaceById: store.getPlacesById}
  },
  computed: {
    place() {
      if (typeof this.$route.params.place === "string") {
        return this.getPlaceById(this.$route.params.place);
      }
    }
  }
});
</script>

<style scoped>
.place-info__image {
  width: 800px;
  height: 600px;
}

</style>