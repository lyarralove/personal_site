<script>
import customButton from './customButton.vue';
import front from './zineFront.vue';
import navbar from './nav.vue';
import scrollText from "./scrollText.vue";
export default {
  components: {
    navbar,
    front,
    customButton,
    scrollText
  }
}
</script>

<template>
  <navbar></navbar>
    <div id="Writing"  class="h-full w-full flex flex-col overflow-auto mb-10 pt-10 pb-10">
    <scrollText class="whitespace-nowrap justify-center pb-10 text-8xl">&nbsp; / &nbsp; SELECTED WRITING &nbsp; / &nbsp; SELECTED WRITING &nbsp; / &nbsp; SELECTED WRITING</scrollText>

    <div id="main" class="flex-grow grid grid-cols-14 grid-rows-3 p-12 border-2 text-black rounded-lg mr-30 ml-30 mt-10">
        <div class="col-span-8 row-span-2 rounded-lg flex flex-col items-start justify-center border-2 text-black text-xl p-2">
          <h1 class="font-bold mb-2 mt-4 pl-5 text-3xl">Criticism and Culture</h1>
          <ul class="list-none pl-5 ">
            <li class="pt-4"><a href="https://www.shof.no/kritikk/et-fargerikt-mini-samfunn" class="text-blue-600 underline">Et Fargerikt Mini-Samfunn</a>, 08.25</li>
            <li class="pt-1">Shof</li>
            <li class="pt-4"><a href="https://www.universitas.no/blues-musikk-film-jim-crow/djevelsk-film-magi/388923" class="text-blue-600 underline">Djevelsk Film-magi</a>, 05.25</li>
            <li class="pt-1">Universitas</li>
            <li class="pt-4"><a href="https://www.universitas.no/kunst-lyd-installasjon-nasjonalmuseet/tidlost-kaldt-og-verdt-a-se/388518" class="text-blue-600 underline">Tidløst, kaldt og verdt å se</a>, 05.25</li>
            <li class="pt-1">Universitas</li>
            <li class="pt-4"><a href="https://www.universitas.no/fra-en-annen-virkelighet-gunnvor-hofmo-jon-fosse/virkelighets-bevegende-musikk/382603" class="text-blue-600 underline">Virkelighets-bevegende musikk</a>, 11.24</li>
            <li class="pt-1">Universitas</li>
            <li class="pt-4"><a href="https://www.universitas.no/fadderuke-nyhet-sosialt-press/vorsvitenskap/380169" class="text-blue-600 underline">Vorsvitenskap</a>, 09.24</li>
            <li class="pt-1">Universitas</li>
            <li class="pt-4"><a href="https://www.universitas.no/kunstkollektiv-minoritetsbakgrunn-oslo/skapte-eget-kollektiv-for-a-forvandle-skam-til-stolthet/377926" class="text-blue-600 underline">Skapte eget kollektiv for å forvandle skam til stolthet</a>, 05.24</li>
            <li class="pt-1">Universitas</li>
            <li class="pt-4"><a href="https://www.universitas.no/debutalbum-musikkanmeldelse-oslo-band/gull-og-grus-til-sykofantene-1/376494" class="text-blue-600 underline">Gull og grus til Sykofantene</a>, 04.24</li>
            <li class="pt-1 pb-4">Universitas</li>
          </ul>
        </div>
        <div class="col-span-6 row-span-2 rounded-lg flex flex-col items-start justify-start text-black text-xl p-2">
            <h1 class="font-bold mb-2 mt-4 pl-5 text-3xl">Other Writing</h1>
            <ul class="list-none pl-5">
            <li class="pt-4 font-semibold">Terrarium Zine, 11.24</li>
            <li class="pt-1">Self-published</li>
            <li class="pt-4 font-semibold">Programblad V24, 09.23</li>
            <li class="pt-1">Cinema Neuf</li>
            <li class="pt-4 font-semibold">Programblad H23, 09.23</li>
            <li class="pt-1">Cinema Neuf</li>
          </ul>
        </div>
        <!-- second part (editorial work) -->
        <div class="col-span-7 row-span-1 rounded-lg flex flex-col items-start justify-start align-top text-black text-xl pt-12 p-2">
          <h1 class="font-bold mt-4 pl-5 text-3xl">Editorial Work</h1>
          <ul class="list-none pl-5">
            <li class="pt-8 font-semibold">Terrarium Zine - Lead Editor</li>
            <li class="pt-1">2024, Self-Published</li>
            <li class="pt-12 font-semibold">Output 10 - Board and Editorial-Member</li>
            <li class="pt-1">2024, Ifi-avis (Output)</li>
            
          </ul>
        </div>
          <div class="col-span-7 row-span-1 rounded-lg flex flex-col items-start justify-start text-black text-xl pt-12 p-2">
            <h1 class="font-bold mt-4 pl-10 text-2xl"> &nbsp;</h1>
            <ul class="list-none pl-23">
            <li class="pt-8 font-semibold">Blanke Ark - Non-Ficton Editor</li>
            <li class="pt-1">2024, Litteraturtidskriftet Lasso</li> 
          </ul>
          
          
        </div>
      </div>
      </div>

</template>


<style scoped>
</style>
