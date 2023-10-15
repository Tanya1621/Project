<template>
  <RouterLink :to="'/Project/' + placeInfo.category + '/' + placeInfo.id">
  <div class="place" v-if="placeInfo" >
    <img class="place__image w-full h-4/6"
         :src="placeInfo.image">
    <div class="place__star hover:bg-violet-600" @click="toggle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path v-if="placeInfo.starred" fill="#fe6e2a"
              d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />

        <path v-else
              d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"
              fill="#fe6e2a" />
      </svg>
    </div>
    <div class="place__bottom p-4 flex flex-col gap-2">
      <p class="place__name text-2xl text-decoration-line: underline">{{placeInfo.name}}</p>
      <p class="place__short-desc text-lg">{{placeInfo.shortDesc}}</p>
    </div>
  </div>
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useItemsStore } from "@/stores/placesStore";

export default defineComponent({
  name: "PlaceCard",
  props: {
    placeInfo: Object
  },
  setup() {
    const store = useItemsStore()
    return {addToStarred: store.addItemToStarred, removeFromStarred: store.removeFromStarred}
  },
  methods: {
    toggle: function() {
      if(this.placeInfo) {
      if (!this.placeInfo.starred && this.placeInfo) {
        this.placeInfo.starred = true;
        this.addToStarred(this.placeInfo)
      } else if (this.placeInfo.starred && this.placeInfo) {
        this.placeInfo.starred = false;
        this.removeFromStarred(this.placeInfo.id)
      }}
    }

  }
});
</script>

<style scoped>
.place {
  width: 390px;
  height: 450px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 0 10px 0px #e3cafa;
  transition: all .3s ease;
  overflow: hidden;
  position: relative;
}

.place:hover {
  box-shadow: 0 0 15px 0px #b89ad3;
}

.place__image {
  object-fit: cover;
}

.place__star {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
}

.place__bottom {
  position: relative;
}
</style>