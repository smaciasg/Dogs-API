async function perrito_ahora(){
    var response = await fetch("https://dog.ceo/api/breeds/image/random"); // Variable que obtiene la respuesta del link de la API, el await pide espera a que haya una respuesta de la API y cuando está tiene la almacena en la variable
    var responde_json = await response.json(); //Permite obtener el json de la petición únicamente, esto puede tardar por lo que es necesario poner de nuevo await
    var img = responde_json.message; // El atributo message permite extraer la url del json 
    var contenedor_perrito = document.querySelector(".contenedor_ing_perrito");
    contenedor_perrito.innerHTML = "<img src='" +img+ "' alt='imagen_algun_perrito'/>"; // El .innerHTML inserta código al html en el contenedor seleccionado, el img se concatena en el src
}