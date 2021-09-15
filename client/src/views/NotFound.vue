<template>
  <div id="notfound">
    <h1><span>404</span><br>Pagina non trovata</h1>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  components: {},
}
</script>

<style>
#notfound {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

#notfound h1 {
  color: white;
  width: 100%;
  margin: auto;
  text-align: center;
  text-transform: uppercase;
}

#notfound span {
  font-size: 72px;
}
</style>
