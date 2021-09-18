import axios from "axios"
import { ref } from "vue"

const getUser = () => {
  // user object
  const user = {
    loggedIn: false,
    name: ref(null),
    lastname: ref(null),
    dateofbirth: ref(null),
    job: ref(null),
    phone: ref(null),
    picture: ref(null)
  }

  // error
  const error = ref(null)

  // get user data
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
        user.loggedIn = true
        user.name.value = data.firstname
        user.lastname.value = data.lastname
        user.dateofbirth.value = data.dateofbirth
        user.job.value = data.job
        user.phone.value = data.phone
        user.picture.value = data.picture
      })
      .catch((err) => {
        if (err.response.status == 404) {
          error.value = "Errore: Utente non trovato nel database Fivem"
        } else if (err.response.status == 500) {
          error.value = "Errore: Non hai effettuato l'accesso con Steam"
        }
      })
  }

  return { user, error, loadUser }
}

export default getUser
