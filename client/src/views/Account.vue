<template>
	<div class="hello">Bonjour</div>
</template>

<script>
	import axios from "axios";

	export default {
	  name: "Account",
	  mounted() {
	    // to get the cookie data whenever component is mounted.
	    this.checkIfLoggedIn();
	  },
	  methods: {
	    checkIfLoggedIn() {
	      axios
	        .get("http://localhost:3000/account", {
            headers: { "Content-Type": "application/json" },
            withCredentials: true
          })
	        .then((response) => {
	          console.log(response);
	        })
	        .catch((err) => console.log(err));
	    },
	  },
	};
</script>
