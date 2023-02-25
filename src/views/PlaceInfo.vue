<template>
  <div v-if="place">
    <h1 class="text-6xl mb-10"> {{ place.name }} </h1>
    <div class="wrapper">
      <img class="place-info__image mx-auto" :src="place.image">
      <div class="flex flex-col sidebar gap-4 w-full">
      <div class="description-wrapper">
        <div class="location__wrapper flex items-center mb-4 gap-2">
          <img class="location__image" src="/src/assets/img/location_icon.png">
          <p class="text-xl text-white">It is an address</p>
        </div>
        <div class="location__wrapper flex items-center gap-2">
          <img class="location__image" src="/src/assets/img/link_icon.png">
          <p class="text-xl text-white">It is a link</p>
        </div>
      </div>
      <div class="description-wrapper h-full">
        <p class="text-xl mt-5 text-white"> {{ place.description }}</p>
      </div>
      </div>
    </div>
  </div>
  <ReviewsArea :id="place.id" :reviews="place.reviews"></ReviewsArea>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useItemsStore } from "@/stores/placesStore";
import ReviewsArea from "@/components/ReviewsArea.vue";

export default defineComponent({
  name: "PlaceInfo",
  components: {ReviewsArea},
  setup() {
    const store = useItemsStore();
    return { getPlaceById: store.getPlacesById };
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
#map {
  height: 400px; /* The height is 400 pixels */
  width: 100%; /* The width is the width of the web page */
}

.place-info__image {
  width: 800px;
  height: 600px;
  border-radius: 10px;
}

.sidebar {
  height: 600px;
}

.wrapper {
  display: flex;
  gap: 20px
}

.location__image {
  width: 30px;
  height: 30px;
}

.description-wrapper {
  background-color: #fe6e2a;
  padding: 10px;
  border-radius: 10px;
  overflow-y: auto;
}

.description-wrapper:first-of-type {
  min-height: 100px;
}

</style>