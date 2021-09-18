<template>
  <div id="profilo" class="main-box">

    <div v-if="error || user.loggedIn.value === false">
      <!-- Login button -->
      <a href="http://localhost:3000/auth">Sign-In With Steam</a>

      <!-- Display errors -->
      <div class="error">{{ error }}</div>
    </div>

    <!-- Left side main content -->
    <div class="left-main">
      <h1>Dashboard</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper turpis eros, non lobortis dui dignissim vitae. Mauris id est vehicula, venenatis massa vitae, consequat ipsum. Duis tristique, <b>ligula ut tempor molestie,</b> odio nisl consectetur turpis, ut facilisis turpis ex in nunc. Morbi at pulvinar quam. Praesent eget auctor dolor. <b>Maecenas feugiat pharetra tincidunt.</b> Duis at tortor finibus, suscipit tortor ullamcorper, <u>fringilla leo.</u></p>

    </div>
    <div class="right-main">
      asdasd
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import getUser from "../composables/getUser";

export default {
  name: "Profilo",
  setup() {
    const { user, error, loadUser } = getUser();

    loadUser();

    return { user, error };
  },
};
</script>

<style scoped>
.error {
  color: white;
}

h1 {
  color: white;
  font-size: 38px;
  font-weight: bold;
}

p {
  font-size: 18px;
  color: #4C4C66;
}
</style>
