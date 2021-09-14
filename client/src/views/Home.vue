<template>
  <div class="hello">
    <a href="http://localhost:3000/auth">
      <button>Sign-In With Steam</button>
    </a>
    <ul v-if="!error">
      <li>{{ user.name }}</li>
      <li>{{ user.lastname }}</li>
      <li>{{ user.dateofbirth }}</li>
      <li>{{ user.job }}</li>
    </ul>
  </div>
  <div v-if="error">{{ error }}</div>

</template>

<script>
import axios from "axios"
import { onMounted, ref } from "vue"
import getUser from "../composables/getUser"

export default {
  name: "Home",
  setup() {
    const { user, error, loadUser } = getUser()

    onMounted(loadUser())

    return { user, error }
  },
}
</script>
