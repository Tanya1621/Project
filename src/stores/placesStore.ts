import { defineStore } from "pinia";
import { cards, places } from "@/data/data";
import type { IPlace, IContent, review} from "@/data/data";


export type RootState = {
  allPlaces: IPlace[] | [];
  categories: IContent[] | [];
  starred: IPlace[] | [];
};


export const useItemsStore = defineStore("itemsStore",  {
  state: () => ({
    allPlaces: places, categories: cards, starred: []
  } as RootState),
    getters: {
      getPlacesByCategory: (state) => {
        return (category: string) => state.allPlaces.filter((place) => place.category === category)
      },
      getPlacesById: (state) => {
        return (id: string) => state.allPlaces.find((place) => place.id === id)
      },
    },
    actions: {
      addItemToStarred(newItem: any) {
        this.starred = [...this.starred, newItem]
      },
      removeFromStarred(id: any) {
        this.starred = this.starred.filter(el => el.id !== id)
      },
      addReview(id: any, newReview: review) {
        const element = this.allPlaces.find(el => el.id === id)
        if (element) {
          element.reviews = [...element.reviews, newReview]
        }
      }
    }
});

