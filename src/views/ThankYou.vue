<template>
  <div>
    <nav-bar />
    <thank-view />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import ThankView from "../components/ThankView";
export default {
  name: "ThankYou",
  components: {
    NavBar,
    ThankView,
  },
};
</script>
