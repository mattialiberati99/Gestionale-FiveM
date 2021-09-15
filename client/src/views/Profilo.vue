<template>
  <div class="profilo">
    <a href="http://localhost:3000/auth">
      <button>Sign-In With Steam</button>
    </a>
    <ul v-if="!error">
      <li>{{ user.name }}</li>
      <li>{{ user.lastname }}</li>
      <li>{{ user.dateofbirth }}</li>
      <li>{{ user.job }}</li>
    </ul>
    <div v-if="error">{{ error }}</div>
  </div>

</template>

<script>
import axios from "axios"
import { onMounted, ref } from "vue"
import getUser from "../composables/getUser"

export default {
  name: "Profilo",
  setup() {
    const { user, error, loadUser } = getUser()

    onMounted(loadUser())

    return { user, error }
  },
}
</script>
