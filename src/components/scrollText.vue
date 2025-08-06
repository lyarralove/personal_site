<template>
  <div class="flex justify-center items-center h-screen">
    <div class="overflow-hidden whitespace-nowrap">
      <div class="animate-marquee ">
        <div class=" inline-flex w-max">
          <slot></slot>
        </div>
        <div class=" inline-flex w-max">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollText",
};
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0); 
  }
  100% {
    transform: translateX(-50%); 
  }
}

.animate-marquee {
  display: inline-flex;
  animation: marquee 40s linear infinite; /* change speed? maybe too fast? */
  
}
</style>


