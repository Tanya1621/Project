import { defineStore } from "pinia";
import { cards, places } from "@/data/data";

export const useItemsStore = defineStore("itemsStore",  {
  state: () => ({
    allPlaces: places, categories: cards, starred: []
  }),
    getters: {
      getPlacesByCategory: (state) => {
        return (category: string) => state.allPlaces.filter((place) => place.category === category)
      },
      getPlacesById: (state) => {
        return (id: string) => state.allPlaces.find((place) => place.id === id)
      },
    },
    actions: {
    addItemToStarred (newItem: any) {
      this.starred = [...this.starred, newItem]
      console.log(this.starred)
    }

  }
});

