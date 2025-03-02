localStorage.setItem('nombre', 'Luis');
localStorage.setItem('nombre', 'Carlos');
console.log(localStorage.getItem('nombre'));
localStorage.setItem(['nombre', 'apellido'], ['Luis', 'Portillo']);
console.log(localStorage.getItem('nombre'));


// para definir un objeto en el local storage
localStorage.setItem("persona",{nombre:"Luis",apellido:"Portillo"});

//  o tambien de esta forma que es la forma correcta
localStorage.setItem("persona",JSON.stringify({nombre:"Luis",apellido:"Portillo"}));
// el stringify convierte un objeto array en un string
// y json parse convierte un string en un objeto array
console.log(JSON.parse(localStorage.getItem('persona')));

console.log(localStorage.getItem('persona'));
localStorage.removeItem('nombre');

// localStorage.clear(); esto por supuesto para limpiar todo el local storage



sessionStorage.setItem('nombre', 'Luis');   
sessionStorage.setItem('nombre', 'Carlos');
console.log(sessionStorage.getItem('nombre'));  

// esto es con respecto al session storage y al local storage
// el session storage se borra cuando se cierra la ventana del navegador
// el local storage se borra cuando se cierra el navegador
// y el session storage se puede compartir entre pestañas
// el local storage no se puede compartir entre pestañas
// y el session storage tiene un limite de 5mb
// y el local storage tiene un limite de 10mb
// y el session storage se puede compartir entre pestañas
// y el local storage no se puede compartir entre pestañas
// y el session storage se borra cuando se cierra la ventana del navegador
// y el local storage se borra cuando se cierra el navegador


// con respecto a cookies...
console.log(document.cookie);
document.cookie = "nombre=Luis";
document.cookie = "apellido=Portillo";

// // como darle una caducidad?
// // por ejemplo
// document.cookie = "nombre=Luis; max-age=3600"; // esto es para que dure una hora
// document.cookie = "nombre=Luis; max-age=0"; // esto es para que se borre    
// // y si queremos que sea permanente
// document.cookie = "nombre=Luis; expires=Thu, 01 Jan 2022 00:00:00 UTC"; // esto es para que sea permanente
// // y si queremos que sea seguro 
// document.cookie = "nombre=Luis; secure"; // esto es para que sea seguro
// // y si queremos que sea http only
// document.cookie = "nombre=Luis; httpOnly"; // esto es para que sea http only
// // y si queremos que sea samesite
// document.cookie = "nombre=Luis; samesite"; // esto es para que sea samesite
// // y si queremos que sea samesite y seguro
// document.cookie = "nombre=Luis; samesite; secure"; // esto es para que sea samesite y seguro
// // y si queremos que sea samesite y http only
// document.cookie = "nombre=Luis; samesite; httpOnly"; // esto es para que sea samesite y http only
// // y si queremos que sea samesite y http only y seguro
// document.cookie = "nombre=Luis; samesite; httpOnly; secure"; // esto es para que sea samesite y http only y seguro
// // y si queremos que sea samesite y http only y seguro y permanente
// document.cookie = "nombre=Luis; samesite; httpOnly; secure; expires=Thu, 01 Jan 2022 00:00:00 UTC"; // esto es para que sea samesite y http only y seguro y permanente
// // y si queremos que sea samesite y http only y seguro y permanente y que se borre
// document.cookie = "nombre=Luis; samesite; httpOnly; secure; expires=0"; // esto es para que sea samesite y http only y seguro y permanente y que se borre
// // y si queremos que sea samesite y http only y seguro y permanente y que se borre y que sea seguro
// document.cookie = "nombre=Luis; samesite; httpOnly; secure; expires=0; secure"; // esto es para que sea samesite y http only y seguro y permanente y que se borre y que sea seguro
// // y si queremos que sea samesite y http only y seguro y permanente y que se borre y que sea seguro y que sea http only
// document.cookie = "nombre=Luis; samesite; httpOnly; secure; expires=0; secure; httpOnly"; // esto es para que sea samesite y http only y seguro y permanente y que se borre y que sea seguro y que sea http only
// // y si queremos que sea samesite y http only y seguro y permanente y que se borre y que sea seguro y que sea http only y que sea seguro
// document.cookie = "nombre=Luis; samesite; httpOnly; secure; expires=0; secure; httpOnly; secure"; // esto es para que sea samesite y http only y seguro y permanente y que se borre y que sea seguro y que sea http only y que sea seguro
// // y si queremos que sea samesite y http only y seguro y permanente y que se borre y que sea seguro y que sea http only y que sea seguro y que sea http only




// de otra forma seria 
document.cookie = "nobrecaducacionpersonalizada=kike; expires=" + new Date(2024, 0, 1).toUTCString();
console.log(document.cookie);
document.cookie="nombrecookie=galleta";
document.cookie="caducanombre=caducidad; expires="+ new Date(2025,0,1).toUTCString();


// de otra forma seria 
var fechaExpiracion = new Date(2024, 0, 1).toUTCString();
document.cookie = "nobrecaducacionpersonalizada=kike; expires=" + fechaExpiracion;
console.log(document.cookie);