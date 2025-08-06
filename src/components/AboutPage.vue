<script>
import customButton from './customButton.vue';
import navbar from "./nav.vue"; 
import about from "./About.vue";
import scrollText from "./scrollText.vue";
export default {
  components: {
    navbar,
    customButton,
    about,
    scrollText
  }
}
</script>


<template>
  <navbar></navbar>
  <div class="h-full w-full flex flex-col overflow-auto mb-10">
    <scrollText class="whitespace-nowrap text-8xl pb-10 ">&nbsp; / &nbsp; ABOUT &nbsp; / &nbsp; ABOUT &nbsp; / &nbsp; ABOUT</scrollText>
      <about class="flex items-center justify-start"></about>
      
    </div>
</template>


<style scoped>


</style>
