<template>
  <!-- Errors -->
  <div id="profilo" class="main-box">
    <!-- Left side main content -->
    <div class="left-main">
      <!-- Sections -->
      <div class="section" id="dashboard">
        <h1>Dashboard</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ullamcorper turpis eros, non lobortis dui dignissim vitae. Mauris id
          est vehicula, venenatis massa vitae, consequat ipsum. Duis tristique,
          <b>ligula ut tempor molestie,</b> odio nisl consectetur turpis, ut
          facilisis turpis ex in nunc. Morbi at pulvinar quam. Praesent eget
          auctor dolor. <b>Maecenas feugiat pharetra tincidunt.</b> Duis at
          tortor finibus, suscipit tortor ullamcorper, <u>fringilla leo.</u>
        </p>
      </div>
      <div class="section" id="il-mio-profilo">
        <h2>Il mio profilo</h2>
        <p>Informazioni personali</p>
        <div>
          <ul>
            <li>
              Nome <span>{{ user.name.value }}</span>
            </li>
            <li>
              Cognome <span>{{ user.lastname.value }}</span>
            </li>
            <li>
              Data di nascita <span>{{ user.dateofbirth.value }}</span>
            </li>
            <li>
              Sesso <span>{{ user.sex.value }}</span>
            </li>
            <li>
              Altezza <span>{{ user.height.value }}</span>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              Nome <span>{{ user.name.value }}</span>
            </li>
            <li>
              Cognome <span>{{ user.lastname.value }}</span>
            </li>
            <li>
              Data di nascita <span>{{ user.dateofbirth.value }}</span>
            </li>
            <li>
              Sesso <span>{{ user.sex.value }}</span>
            </li>
            <li>
              Altezza <span>{{ user.height.value }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Left side main content -->
    <div class="right-main"></div>
  </div>
</template>

<script>
import getUser from "../composables/getUser";

export default {
  name: "Profilo",
  setup() {
    const { user, error, loadUser } = getUser();

    return { user, error, loadUser };
  },
  created() {
    this.loadUser();
  },
};
</script>

<style scoped>
h1,
h2 {
  color: white;
  font-size: 38px;
  font-weight: bold;
  width: 100%;
  margin: 0;
}

p {
  font-size: 18px;
  color: #4c4c66;
}

li {
  text-transform: capitalize;
  color: #4c4c66;
  font-size: 20px;
  font-weight: normal;
  list-style: none;
}

#il-mio-profilo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
}

#il-mio-profilo p {
  margin: 0 0 30px 0;
  width: 100%;
}

#il-mio-profilo div {
  background-color: #1d1d2e;
  width: 48%;
  border-radius: 20px;
}

#il-mio-profilo ul {
  margin: 0;
  padding: 20px 30px;
}

#il-mio-profilo li {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px 0;
}

#il-mio-profilo span {
  color: white;
  font-weight: 600;
}
</style>
