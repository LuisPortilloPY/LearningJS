// Para manipular **HTML desde JavaScript**, debes conocer varios comandos y métodos esenciales. Aquí tienes una lista organizada por categorías:

// ---

// ### **1. Selección de elementos**
// Estos métodos te permiten seleccionar elementos en el DOM (Document Object Model).

// - `document.getElementById("id")` → Selecciona un elemento por su ID.  
// - `document.getElementsByClassName("clase")` → Selecciona una colección de elementos por su clase.  
// - `document.getElementsByTagName("etiqueta")` → Selecciona una colección de elementos por su etiqueta.  
// - `document.querySelector("selectorCSS")` → Selecciona el primer elemento que coincida con el selector CSS.  
// - `document.querySelectorAll("selectorCSS")` → Selecciona **todos** los elementos que coincidan con el selector CSS.  

// Ejemplo:
// ```js
// let titulo = document.getElementById("titulo");
// let parrafos = document.querySelectorAll(".parrafo");
// ```

// ---

// ### **2. Modificación de contenido**
// Estos métodos permiten modificar el contenido dentro de un elemento HTML.

// - `element.innerHTML = "Nuevo contenido"` → Modifica el HTML interno de un elemento.  
// - `element.textContent = "Texto plano"` → Modifica solo el texto sin interpretar etiquetas HTML.  
// - `element.innerText = "Texto visible"` → Similar a `textContent`, pero respetando estilos CSS como `display: none`.

// Ejemplo:
// ```js
// document.getElementById("titulo").innerHTML = "<b>Nuevo Título</b>";
// document.getElementById("parrafo").textContent = "Este es un nuevo párrafo";
// ```

// ---

// ### **3. Modificación de atributos**
// Para cambiar atributos como `src`, `href`, `id`, `class`, etc.

// - `element.setAttribute("atributo", "valor")` → Establece un nuevo valor para un atributo.  
// - `element.getAttribute("atributo")` → Obtiene el valor de un atributo.  
// - `element.removeAttribute("atributo")` → Elimina un atributo.  

// Ejemplo:
// ```js
// let imagen = document.getElementById("miImagen");
// imagen.setAttribute("src", "nueva-imagen.jpg");
// let enlace = document.querySelector("a");
// enlace.setAttribute("href", "https://nuevo-enlace.com");
// ```

// ---

// ### **4. Modificación de estilos**
// Para cambiar estilos CSS dinámicamente.

// - `element.style.propiedadCSS = "valor"` → Modifica un estilo en línea.  
// - `element.classList.add("clase")` → Agrega una clase.  
// - `element.classList.remove("clase")` → Elimina una clase.  
// - `element.classList.toggle("clase")` → Agrega o quita una clase dependiendo de si ya está o no.  
// - `element.classList.contains("clase")` → Verifica si un elemento tiene una clase.  

// Ejemplo:
// ```js
// let caja = document.getElementById("caja");
// caja.style.backgroundColor = "red";
// caja.classList.add("borde");
// ```

// ---

// ### **5. Creación y eliminación de elementos**
// Para agregar o quitar elementos en el DOM.

// - `document.createElement("etiqueta")` → Crea un nuevo elemento.  
// - `element.appendChild(nuevoElemento)` → Agrega un hijo al final del elemento.  
// - `element.insertBefore(nuevoElemento, referencia)` → Inserta antes de otro elemento.  
// - `element.removeChild(hijo)` → Elimina un elemento hijo.  
// - `element.replaceChild(nuevoElemento, viejoElemento)` → Reemplaza un elemento por otro.  

// Ejemplo:
// ```js
// let nuevoParrafo = document.createElement("p");
// nuevoParrafo.textContent = "Soy un nuevo párrafo";
// document.body.appendChild(nuevoParrafo);
// ```

// ---

// ### **6. Eventos**
// Para manejar interacciones del usuario.

// - `element.addEventListener("evento", function)` → Escucha un evento y ejecuta una función.  
// - `element.removeEventListener("evento", function)` → Elimina un evento previamente agregado.  

// Ejemplo:
// ```js
// document.getElementById("boton").addEventListener("click", function() {
//     alert("Botón presionado");
// });
// ```

// ---

// ### **7. Navegación en el DOM**
// Para moverse entre elementos en la jerarquía del DOM.

// - `element.parentNode` → Obtiene el padre del elemento.  
// - `element.childNodes` → Obtiene una lista de los nodos hijos.  
// - `element.firstChild` → Obtiene el primer hijo.  
// - `element.lastChild` → Obtiene el último hijo.  
// - `element.nextSibling` → Obtiene el siguiente nodo hermano.  
// - `element.previousSibling` → Obtiene el nodo hermano anterior.  

// Ejemplo:
// ```js
// let hijo = document.getElementById("hijo");
// let padre = hijo.parentNode;
// console.log(padre);
// ```

// ---

// ### **8. Manipulación de formularios**
// Para interactuar con formularios y sus elementos.

// - `document.forms["nombreFormulario"]` → Obtiene un formulario por su nombre.  
// - `formElement.value` → Obtiene o establece el valor de un campo de formulario.  
// - `formElement.checked` → Verifica si un checkbox está marcado.  
// - `formElement.selectedIndex` → Obtiene el índice de una opción seleccionada en un `<select>`.  

// Ejemplo:
// ```js
// let nombre = document.getElementById("nombre").value;
// console.log("Nombre ingresado:", nombre);
// ```

// ---
