<template>
  <div>
    <nav-bar />
    <sub-view />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import SubView from "../components/SubscribeView";
export default {
  name: "SubForm",
  components: {
    NavBar,
    SubView,
  },
};
</script>
