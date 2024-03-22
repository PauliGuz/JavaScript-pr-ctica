const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validar nombre completo
  const nombre = document.getElementById("nombre").value;
  const nombreRegex = /^[A-Za-zÀ-ÿ]+( [A-Za-zÀ-ÿ]+)*$/;
  if (!nombreRegex.test(nombre)) {
    document.getElementById("errorNombre").style.display = "block";
    return;
  } else {
    document.getElementById("errorNombre").style.display = "none";
  }

  // Validar asunto
  const asunto = document.getElementById("asunto").value;
  const asuntoRegex = /.+/; // Cualquier cadena de texto
  if (!asuntoRegex.test(asunto)) {
    document.getElementById("errorAsunto").style.display = "block";
    return;
  } else {
    document.getElementById("errorAsunto").style.display = "none";
  }

  // Validar mensaje
  const mensaje = document.getElementById("mensaje").value;
  const mensajeRegex = /.+/; // Cualquier cadena de texto
  if (!mensajeRegex.test(mensaje)) {
    document.getElementById("errorMensaje").style.display = "block";
    return;
  } else {
    document.getElementById("errorMensaje").style.display = "none";
  }

  // Si todas las validaciones son correctas, enviar el formulario
 
  document.getElementById("exitoMensaje").style.display = "block";
});


