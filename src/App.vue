<template>
  <div id="app">
    <h1>La mia prima app con Vue CLI!</h1>

    <Jumbotron />

  </div>
</template>



<script>
import Jumbotron from "./components/Jumbotron.vue";
export default {
  name: "App",
  components : {
    Jumbotron: Jumbotron,
  }
};
</script>

<style>
#app {
  text-align: center;
  font-family: sans-serif;
}

h1 {
  margin-top: 50px;
  font-family: 'Permanent Marker', cursive;
  color: #55498c;

}

@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

</style>
