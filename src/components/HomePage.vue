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
  <div class="h-screen w-full overflow-auto flex flex-col">
    <div id="app" class="flex-grow flex flex-col items-center">
      <div id="main" class="flex-grow p-4 grid grid-cols-3 grid-rows-2 h-screen w-9/10">
        <div class="relative col-span-1 bg-gray-500 rounded-lg flex items-end justify-end text-black text-5xl font-bold p-4 h-[40vh]">
          <div class="absolute inset-0 bg-white opacity-50 rounded-lg"></div>
          <div class="relative z-10">
          Welcome&lt;3
          </div>
        </div>
        <div class="relative col-span-2 bg-gray-300  rounded-lg flex items-end justify-start text-black text-5xl font-bold p-4 ">

          <div class="absolute inset-0 bg-white opacity-75 rounded-lg"></div>
          <div class="relative z-10">
            my name is Lyra
          </div>
          
        </div>
        <div class="relative col-span-2 bg-gray-400  rounded-lg flex items-start justify-center text-black text-5xl font-bold p-4 ">

          <div class="absolute inset-0 bg-white opacity-60 rounded-lg"></div>
          <div class="relative z-10">
            --- and I'm a .. developer
          </div>
          
        </div>
      
        <div class="relative col-span-1 bg-[url('/pattern_front.png')] bg-cover bg-center rounded-lg  text-white flex items-start justify-start text-2xl font-bold p-6 leading-9">
          <div class="absolute inset-0 bg-white opacity-100 rounded-lg"></div>
          <div class="relative z-10">
            With experience from: University of Oslo --- Østlandsutstillingen --- Universitas --- Output --- Literaturtidskriftet Lasso --- Cinema Neuf --- and more ->
          </div> 
        </div>
      </div>
      <scrollText class="flex pt-10 pb-10 whitespace-nowrap w-full text-8xl">&nbsp;  / &nbsp; ABOUT &nbsp;/&nbsp; CONTACT &nbsp;  / &nbsp; ABOUT &nbsp;/&nbsp; CONTACT</scrollText>
      <about ></about>
      <scrollText class="flex pt-10 pb-10 whitespace-nowrap w-full text-8xl">&nbsp;  / &nbsp; PROJECTS &nbsp;/&nbsp; PROJECTS &nbsp;/ &nbsp; PROJECTS </scrollText>


      <div id="homeProjects" class="flex-grow grid grid-cols-14 grid-rows-3 p-12 border-2 gap-8 text-black rounded-lg mr-30 ml-30 mt-10 mb-20">
        <div class="col-span-7 row-span-2 rounded-lg flex flex-col items-start justify-start border-2 text-black text-xl p-4">
          <a href="http://localhost:5173/writing"><img src="/pattern site.png"></a>
          <h1 class="font-bold mb-2 mt-4 pl-5 text-3xl">Role: blablabla</h1>
            <h1 class="font-bold mb-2 mt-4 pl-5 text-3xl">Project: blablabla</h1>
          
          <div class="flex w-full justify-end pr-4 mb-4">
            <customButton><a href="http://localhost:5173/writing">Read more</a></customButton>
          </div>
        </div>
        <div class="col-span-7 row-span-2 rounded-lg flex flex-col items-start justify-start border-2 text-black text-xl p-4">
          <a href="http://localhost:5173/writing"><img src="/pattern site.png"></a>
            <h1 class="font-bold mb-2 mt-4 pl-5 text-3xl">Role: blablabla</h1>
            <h1 class="font-bold mb-2 mt-4 pl-5 text-3xl">Project: blablabla</h1>

            <div class="flex w-full items-end justify-end pr-4 mb-4">
            <customButton><a href="http://localhost:5173/writing">Read more</a></customButton>
          </div>
        </div>
        <!-- second (editorial) -->
        <div class="col-span-14 row-span-1 rounded-lg flex flex-col items-start justify-center border-2 text-black text-xl pl-4">
          <h1 class="font-bold pl-5 text-5xl leading-15 mt-auto">See more <br> project pearls here -></h1>
          <div class="flex w-full items-end justify-end pr-4 mb-4">
          <customButton class="mr-auto rounded hover:bg-blue-600 bg-blue-700"><a href="http://localhost:5173/writing">Read more</a></customButton>
          </div>
        </div>
      </div>
      <h1>.</h1>
    </div>
  </div>
</template>


<style scoped>


</style>
