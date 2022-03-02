<template>
  <nav>
    <router-link to="/">
      <img alt="Site logo" src="../assets/logo.png" />
    </router-link>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style lang="scss">
nav {
  padding: 20px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
