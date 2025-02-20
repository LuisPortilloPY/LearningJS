// instalar axios para hacer llamadas a servicios externos
// npm install axios
// importar axios
import axios from "axios";
axios
  .get("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(function (response) {
    // handle success
    console.log("Petición exitosa");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("Error al hacer la petición");
    console.log(error);
  });
