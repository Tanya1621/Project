<script lang="ts">
import CardList from "@/components/CardList.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    CardList
  }
})
</script>

<template>
  <main>
    <CardList />
  </main>
  <p class="pt-3 text-m">
    Disclaimer: This website is a personal project created for educational and learning purposes and is not intended for commercial use. The information, including business details and images, may not be accurate, current, or complete. Images and information used on this site are sourced from open platforms and are used under the presumption of fair use. This project is not affiliated with, endorsed by, or in any way officially connected with the businesses mentioned herein. Logos and brand names are the property of their respective owners.
  </p>
</template>
