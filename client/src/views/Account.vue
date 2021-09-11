<template>
  <div class="hello">{{ user.firstname }}</div>
</template>

<script>
import axios from "axios"

export default {
  name: "Account",
  data() {
    return {
      user: {},
    }
  },
  mounted() {
    this.checkIfLoggedIn()
  },
  methods: {
    checkIfLoggedIn() {
      axios
        .get("http://localhost:3000/account", {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => {
          let user = response.data[0]
          this.user = user
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>
