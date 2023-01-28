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
</template>
