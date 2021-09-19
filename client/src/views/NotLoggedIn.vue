<template>
  <div class="main-box">
    <h1><span>Errore!</span><br />Accedi con Steam!</h1>
    <button class="discord"><a href="http://localhost:3000/auth/">Login</a></button>
  </div>
</template>

<script>
export default {
  name: "NotLoggedIn",
};
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

h1 {
  color: white;
  width: 100%;
  margin: auto;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
}

span {
  font-size: 72px;
}
</style>
