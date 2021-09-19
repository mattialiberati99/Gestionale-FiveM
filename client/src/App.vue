<template>
  <!-- just a wrapper to prevent warnings -->
  <div id="wrapper">
    <!-- Left sidebar (menu, logo, discord, logout) -->
    <div id="sidebar">
      <div id="logo-box">
        <a href="/">
          <img id="logo" src="../public/images/logo.svg" alt="dreamworld" />
        </a>
        <hr class="hr-line" />
      </div>
      <div id="nav">
        <ul>
          <li>
            <router-link to="/">Profilo</router-link>
            <hr />
          </li>
          <li>
            <router-link to="inventario">Inventario</router-link>
            <hr />
          </li>
          <li>
            <router-link to="veicoli">Veicoli</router-link>
            <hr />
          </li>
          <li>
            <router-link to="case">Case</router-link>
            <hr />
          </li>
          <li>
            <router-link to="transazioni">Transazioni</router-link>
            <hr />
          </li>
          <li>
            <router-link to="lavoro">Lavoro</router-link>
            <hr />
          </li>
        </ul>
      </div>

      <div id="discord-logout">
        <a class="logout" href="http://localhost:3000/account/logout/">Esci</a>
        <hr class="hr-line" />
        <button class="discord">
          <a target="blank" href="https://discord.gg/EBtVBshu">Discord</a>
        </button>
      </div>
    </div>

    <!-- Main div -->
    <div id="main">
      <cerca v-if="error.value != null"></cerca>
      <fixed-user></fixed-user>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import Cerca from "./components/Cerca.vue";
import FixedUser from "./components/FixedUser.vue";
import getUser from "./composables/getUser";
import { watch } from 'vue';

export default {
  components: {
    cerca: Cerca,
    "fixed-user": FixedUser,
  },
  setup() {
    const { user, error, loadUser } = getUser();
    
    onMounted(loadUser)
    return { user, error, loadUser };
  }
};
</script>

<style>
html {
  height: 100%;
}

/* width */
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #12121d;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1d1d2e;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #1a1a2b;
}

::selection {
  color: white;
  background: #4c4c66;
}

body {
  background-color: #1d1d2e;
  margin: 0;
  padding: 0;
  height: 100%;
}

* {
  font-family: Poppins, sans-serif;
}

.error {
  color: rgb(138, 43, 43);
}

.highlight {
  background: linear-gradient(90deg, #5e1b95 0%, #7d005a 103.97%);
  color: white;
}

#app {
  height: 100%;
}

#wrapper {
  display: flex;
  height: 100%;
}

#sidebar {
  width: 200px;
  padding: 80px 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#main {
  width: 100%;
  border-radius: 50px 0 0;
  padding: 80px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: auto;
  align-content: space-between;
  background-color: #141422;
}

#logo-box {
  width: fit-content;
}

#logo {
  width: 200px;
  transition: 0.3s ease;
  margin-bottom: 30px;
}

#logo:hover {
  filter: brightness(0) invert(1);
}

.hr-line {
  width: 100px;
  border-width: 0;
  color: #4c4c66;
  background: #4c4c66;
  height: 1px;
}

#nav {
  margin: 0;
}

#nav ul {
  margin: 0;
  padding: 0;
}

#nav li {
  list-style: none;
  margin: 30px 0;
  width: fit-content;
}

#nav li a {
  color: #4c4c66;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  transition: all 0.3s ease;
}

#nav li hr {
  width: 0;
  height: 0;
  border-color: white;
  margin: 0;
  opacity: 0;
  transition: width 0.3s ease;
}

#nav li:hover a {
  color: white;
}

#nav li:hover hr {
  width: 70%;
  opacity: 1;
}

#discord-logout {
  width: 200px;
  text-align: center;
}

.logout {
  color: #4c4c66;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;
  transition: 0.3s ease;
}

.logout:hover {
  color: white;
}

#discord-logout hr {
  margin: 30px auto;
}

.discord {
  border-radius: 60px;
  padding: 10px 50px;
  background: linear-gradient(90deg, #5e1b95 0%, #7d005a 103.97%);
  border: solid 2px #1d1d2e;
  transition: 0.3s;
  height: fit-content;
}

.discord a {
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 400;
}

.discord:hover {
  border: solid 2px white;
}

.main-box {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}

.left-main {
  width: 60%;
}

.right-main {
  width: 350px;
}
</style>
