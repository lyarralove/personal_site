<script setup>
import { ref } from "vue";

</script>
<script>

export default {
  name: 'App',
}
</script>

<template>
  <div class="h-screen w-screen text-black overflow-hidden flex flex-col">
    <div id="app" class="h-full w-full flex flex-col">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>


