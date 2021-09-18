<template>
  <div v-if="!error" id="fixeduser">
    <div id="text">
      <h3 id="bentornato">Bentornato</h3>
      <h3>{{ user.name.value }} {{ user.lastname.value }}</h3>
    </div>
    <img :src="user.picture.value" alt="profile" />
  </div>
</template>

<script>
import getUser from "../composables/getUser";

export default {
  name: "FixedUser",
  setup() {
    const { user, error, loadUser } = getUser();

    loadUser();

    return { error, user };
  },
};
</script>

<style scoped>
#fixeduser {
  background-color: #1d1d2e;
  color: white;
  position: relative;
  width: 180px;
  display: inline-block;
  padding: 12px 105px 12px 45px;
  border-radius: 60px 0 0 60px;
  height: fit-content;
  margin-right: 20px;
  transform: translate(0, -25%);
}

h3 {
  font-size: 20px;
  line-height: 10px;
  font-weight: normal;
  text-align: right;
}

#bentornato {
  font-weight: bold;
}

img {
  width: 130px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(35%, -50%);
}
</style>
