import axios from "axios"
import { ref } from "vue"
import router  from "../router/index.js"

const getUser = () => {
  // user object
  const user = {
    name: ref(null),
    lastname: ref(null),
    dateofbirth: ref(null),
    job: ref(null),
    phone: ref(null),
    picture: ref(null),
    sex: ref(null),
    height: ref(null)
  }

  // Error
  const error = ref(null)

  // Get user data
  const loadUser = async () => {
    await axios
      .get("http://localhost:3000/accounts", {
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
        user.picture.value = data.picture
        user.sex.value = data.sex
        user.height.value = data.height
      })
      .catch((err) => {
        if (err.response.status == 404) {
          error.value = "Errore: Utente non trovato nel database Fivem"
          router.push("neverjoined")
        } else if (err.response.status == 500) {
          error.value = "Errore: Non hai effettuato l'accesso con Steam"
          router.push("NotLoggedIn")
        }
      })
  }

  return { user, error, loadUser }
}

export default getUser

/* Nome
Cognome
Data di nascita
Sesso
Altezza

Lavoro
Grado
Patente
Porto d'armi
numero di telefono */
