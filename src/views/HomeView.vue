<template>
  <div>
    <nav-bar />
    <main-view />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import MainView from "../components/MainView";
export default {
  name: "HomeView",
  components: {
    NavBar,
    MainView,
  },
};
</script>
