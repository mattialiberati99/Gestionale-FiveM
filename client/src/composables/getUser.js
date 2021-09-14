import axios from "axios"
import { ref } from "vue"

const getUser = () => {
  // user
  const user = {
    name: ref(null),
    lastname: ref(null),
    dateofbirth: ref(null),
    job: ref(null),
    phone: ref(null)
  }

  // error
  const error = ref(null)

  // get user datas
  const loadUser = async () => {
    await axios
      .get("http://localhost:3000/account", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        const data = response.data[0]
        user.name.value = data.firstname
        user.lastname.value = data.lastname
        user.dateofbirth.value = data.dateofbirth
        user.job.value = data.job
        user.phone.value = data.phone
      })
      .catch((err) => {
        error.value = "Errore! Nessun utente trovato"
      })
  }

  return { user, error, loadUser }
}

export default getUser
