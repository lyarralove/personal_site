<script>
import customButton from './customButton.vue';
import front from './zineFront.vue';
import navbar from './nav.vue';
export default {
  name:"about",
  components: {
    navbar,
    front,
    customButton
  }
}
</script>

<template>
  <div id="about" class="flex flex-col items-center mt-14 mb-14">
    <div id="Main" class="flex-grow grid grid-cols-14 justify-center items-center p-8 text-black border-2 rounded-lg mx-4 mt-4 mb-4 h-1/2 w-11/14">
      <div class="col-span-9 flex flex-col items-center justify-center text-black text-xl">
        <p>
          Hi, my name is Lyra and I'm an Oslo-based designer, writer, and developer. I have worked on a number of CS projects the last few years, including doing data analysis for several research projects at UiO.
          I also have experience with journalism, writing and design from organizations such as Østlandsutstillingen, Universitas, and Literaturtidskriftet Lasso.
        </p>
        <p>Have a cool project your working on, or just want to grab a coffee? Feel free to contact me anytime&lt;3</p>
      </div>
      <div class="col-span-5 flex flex-col items-center justify-center mb-auto mt-auto pl-20 text-black text-xl">
        <customButton ><a href="mailto:lyra.hope0@gmail.com">Contact me!</a></customButton>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>
