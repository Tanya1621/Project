<template>
  <div class="place" v-if="placeInfo">
    <img class="place__image w-full h-4/6"
         :src="placeInfo.image">
    <div class="place__star hover:opacity-70" @click="toggle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path v-if="placeInfo.starred" fill="#fe6e2a"
              d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />

        <path v-else
              d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"
              fill="#fe6e2a" />
      </svg>
    </div>
    <div class="place__bottom p-4">
      <RouterLink :to="'/Project/' + placeInfo.category + '/' + placeInfo.id"><a class="place__name text-3xl text-decoration-line: underline">{{placeInfo.name}}</a></RouterLink>
      <p class="place__short-desc text-large">{{placeInfo.shortDesc}}</p>
      <div class="place__like hover:opacity-70" @click="toggleLikeFunction">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path v-if="placeInfo.liked" fill-rule="evenodd" clip-rule="evenodd"
                d="M20.2991 1.68186C22.567 3.90213 22.567 7.54338 20.2991 9.78586L10.9804 19L1.6841 9.80806C0.606277 8.72013 0 7.27695 0 5.74496C0 4.21297 0.583823 2.76979 1.6841 1.68186C3.92957 -0.560619 7.61215 -0.560619 9.88007 1.70406L10.9804 2.792L12.0806 1.68186C14.3486 -0.560619 18.0311 -0.560619 20.2991 1.68186Z"
                fill="black" />
          <path v-else
                d="M20.2991 9.78586C22.567 7.54338 22.567 3.90213 20.2991 1.68186C18.0311 -0.560619 14.3486 -0.560619 12.0806 1.68186L10.9804 2.792L9.88007 1.70406C7.61215 -0.560619 3.92957 -0.560619 1.6841 1.68186C0.583822 2.76979 0 4.21297 0 5.74496C0 7.27695 0.606277 8.72013 1.6841 9.80806L10.9804 19L20.2991 9.78586ZM1.4371 5.74496C1.4371 4.59042 1.8862 3.52469 2.71702 2.72539C3.5703 1.88168 4.67058 1.45983 5.77086 1.45983C6.87114 1.45983 7.97142 1.88168 8.8247 2.72539L10.9804 4.83465L13.136 2.70318C14.8201 1.03798 17.582 1.03798 19.2437 2.70318C20.0521 3.50248 20.5236 4.56821 20.5236 5.72276C20.5236 6.8773 20.0745 7.94303 19.2437 8.74233L10.9804 16.9351L2.71702 8.76453C1.90865 7.94303 1.4371 6.8773 1.4371 5.74496Z"
                fill="black" />

        </svg>
      </div>
    </div>
  </div>
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
    return {addToStarred: store.addItemToStarred, removeFromStarred: store.removeFromStarred, toggleLike: store.toggleLike}
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
    },
    toggleLikeFunction: function() {
      if(this.placeInfo) {
       this.toggleLike(this.placeInfo.id)
      }
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
  overflow: hidden;
  position: relative;
}

.place__like {
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: -10px;
  right: 20px;
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