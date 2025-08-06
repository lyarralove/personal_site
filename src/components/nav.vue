<template>
  <nav class="flex justify-between items-center flex-wrap w-full p-4">
      <ul class="flex w-full">
          <li class="mr-auto  text-xl text-red-800"><router-link to="/main"> L.V.I.H </router-link></li>
          <li class="mr-5"><router-link to="/about"> About </router-link></li>
          <li class="mr-5"><a href="#">Project</a></li>
          <li class="mr-5"><router-link to="/writing"> Writings </router-link></li>
          <li class="mr-5"><a href="#">Contact</a></li>
      </ul>
  </nav>
</template>
  
  <script lang="ts">
  export default {
    name: 'NavBar',
  }
  </script>
  
  <style scoped>
  </style>
  