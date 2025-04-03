document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let tipo = document.getElementById("tipo").value;

    if (!nombre || !email || !tipo) {
        document.getElementById("mensaje").textContent = "Todos los campos son obligatorios.";
        return;
    }

    document.getElementById("mensaje").textContent = "Registro exitoso. Bienvenido, " + nombre + "!";
});
