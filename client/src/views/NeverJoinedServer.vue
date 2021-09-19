<template>
  <div class="main-box">
    <h1><span>Errore!</span><br>Prima entra nel server!</h1>
    <button class="discord"><a href="https://fivem.net/">Accedi al server</a></button>
  </div>
</template>

<script>
export default {
  name: "NeverJoinedServer",
}
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
