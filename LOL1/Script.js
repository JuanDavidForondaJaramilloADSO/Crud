// Escuchar el evento 'submit' del formulario con el id 'validationForm'
document.getElementById('validationForm').addEventListener('submit', function(event) {
    // Prevenir el comportamiento por defecto del formulario, que es enviar los datos y recargar la página
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const documento = document.getElementById('documento').value;
    const tipoDocumento = document.getElementById('tipoDocumento').value;

    // Expresiones regulares para validar los campos
    const nombreRegex = /^[A-Za-z]+$/;  // Solo letras
    const apellidoRegex = /^[A-Za-z]+$/;  // Solo letras
    const telefonoRegex = /^[0-9]+$/;  // Solo números
    const documentoRegex = /^[0-9]+$/;  // Solo números

    // Validar el campo 'nombre'
    if (!nombreRegex.test(nombre)) {
        alert('El nombre solo puede contener letras.');
        return;  // Salir de la función si la validación falla
    }

    // Validar el campo 'apellido'
    if (!apellidoRegex.test(apellido)) {
        alert('El apellido solo puede contener letras.');
        return;  // Salir de la función si la validación falla
    }

    // Validar el campo 'telefono'
    if (!telefonoRegex.test(telefono)) {
        alert('El teléfono solo puede contener números.');
        return;  // Salir de la función si la validación falla
    }

    // Validar el campo 'documento'
    if (!documentoRegex.test(documento)) {
        alert('El documento solo puede contener números.');
        return;  // Salir de la función si la validación falla
    }

    // Mostrar un mensaje de éxito si todas las validaciones pasan
    alert('Formulario enviado correctamente.');
    // Aquí puedes enviar el formulario o hacer algo más con los datos
});
