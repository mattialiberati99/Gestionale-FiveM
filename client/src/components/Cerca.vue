<template>
  <div id="cerca-box">
    <input type="text" name="cerca" id="cerca" placeholder="cerca...">
    <img src="../../public/images/cerca.svg" alt="cerca">
  </div>
</template>

<script>
export default {
  name: 'Cerca'
}
</script>

<style scoped>
#cerca-box {
  position: relative;
  display: inline;
  width: fit-content;
  height: fit-content
}

input {
  background: #1D1D2E;
  color: white;
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  width: 400px;
  padding: 12px 30px;
  border: none;
  border-radius: 40px;
  outline: none;
}

input::placeholder {
  color: #4c4c66;
}

img {
  width: 25px;
  height: 25px;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translate(0, -50%);
}

</style>
