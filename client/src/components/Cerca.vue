<template>
  <div id="cerca-box">
    <input
      v-model="search"
      type="text"
      name="cerca"
      id="cerca"
      placeholder="cerca..."
    />
    <img src="../../public/images/cerca.svg" alt="cerca" />
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "Cerca",
  setup() {
    const search = ref(null);

    watch(
      () => search.value,
      (word) => {
        let html = document.getElementsByClassName("main-box")[0];
        html.innerHTML = html.innerHTML.replace(`<mark class="highlight">`, '');
        html.innerHTML = html.innerHTML.replace(`</mark>`, '');
        if (html.outerText.includes(word) && word !== "" && word.length > 3) {
          html.innerHTML = html.innerHTML.replace(word,`<mark class="highlight">${word}</mark>`);
        }
      }
    );

    return { search };
  },
};
</script>

<style scoped>
#cerca-box {
  position: relative;
  display: inline;
  width: fit-content;
  height: fit-content;
}

input {
  background: #1d1d2e;
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
