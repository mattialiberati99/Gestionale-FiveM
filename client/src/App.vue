<template>
  <!-- just a wrapper to prevent warnings -->
  <div id="wrapper">
    <!-- Left sidebar (menu, logo, discord, logout) -->
    <div id="sidebar">
      <div id="logo-box">
        <img id="logo" src="../public/images/logo.svg" alt="dreamworld" />
        <hr class="hr-line" />
      </div>
      <div id="nav">
        <ul>
          <li>
            <router-link to="home">Profilo</router-link>
            <hr />
          </li>
          <li>
            <router-link to="home">Inventario</router-link>
            <hr />
          </li>
          <li>
            <router-link to="home">Veicoli</router-link>
            <hr />
          </li>
          <li>
            <router-link to="home">Case</router-link>
            <hr />
          </li>
          <li>
            <router-link to="home">Transazioni</router-link>
            <hr />
          </li>
          <li>
            <router-link to="home">Lavoro</router-link>
            <hr />
          </li>
        </ul>
      </div>

      <div id="discord-logout">
        <a class="logout" href="http://localhost:3000/account/logout/">Esci</a>
        <hr class="hr-line" />
        <button class="discord"><a href="https://discord.gg/EBtVBshu">Discord</a></button>
      </div>
    </div>

    <!-- Main div -->
    <div id="main">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<style>
body {
  background-color: #1d1d2e;
  margin: 0;
  padding: 0;
}

* {
  font-family: Poppins, sans-serif;
}

#wrapper {
  display: flex;
  height: 100vh;
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
  font-weight: 700;
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

#discord-logout .logout  {
  color: #4c4c66;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;
  transition: .3s ease;
}

#discord-logout .logout:hover  {
  color: white
}

#discord-logout hr {
  margin: 30px auto;
}

#discord-logout .discord {
  border-radius: 60px;
  padding: 10px 50px;
  background: linear-gradient(90deg, #5E1B95 0%, #7D005A 103.97%);
  border: solid 2px #1d1d2e;
  transition: .3s;
}

#discord-logout .discord a {
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 400;
}

#discord-logout .discord:hover {
  border: solid 2px white;
}

#main {
  background-color: #141422;
}

</style>
