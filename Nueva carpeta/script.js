function mostrarMensaje() {
    alert("Bienvenido al sistema de trazabilidad e inventario de La Granja.");
}

function mostrarMensaje() {
    alert("Bienvenido al sistema de trazabilidad e inventario de La Granja.");
}

const formularioLogin = document.getElementById("formularioLogin");

if (formularioLogin) {
    formularioLogin.addEventListener("submit", function(event) {
        event.preventDefault();

        const correo = document.getElementById("correo").value.trim();
        const contrasena = document.getElementById("contrasena").value;

        if (correo === "" || contrasena === "") {
            alert("Por favor, complete todos los campos.");
            return;
        }

        alert("Datos ingresados correctamente. Bienvenido a La Granja.");

        window.location.href = "dashboard.html";
    });
}

function irAPantalla(pantalla) {
    window.location.href = pantalla;
}



/* FUNCIONES DE REGISTRO DE PRODUCCIÓN */

document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formProduccion");
    const tablaIngredientes = document.getElementById("tablaIngredientes");
    const botonAgregar = document.getElementById("agregarIngrediente");
    const botonCancelar = document.getElementById("cancelar");

    // Si esta página no contiene el formulario, no hace nada.
    if (!formulario) {
        return;
    }

    // Eliminar un ingrediente de la tabla.
    if (tablaIngredientes) {
        tablaIngredientes.addEventListener("click", function (evento) {
            const boton = evento.target.closest(".btn-eliminar");

            if (boton) {
                boton.closest("tr").remove();
            }
        });
    }

    // Agregar un nuevo ingrediente.
    if (botonAgregar && tablaIngredientes) {
        botonAgregar.addEventListener("click", function () {
            const fila = document.createElement("tr");

            fila.innerHTML = `
                <td>
                    <input type="text" class="form-control"
                    placeholder="Ingrediente" required>
                </td>
                <td>
                    <input type="number" class="form-control"
                    placeholder="Cantidad" min="0.01" step="any" required>
                </td>
                <td>
                    <select class="form-select" required>
                        <option value="">Unidad</option>
                        <option>Kg</option>
                        <option>Gramos</option>
                        <option>Litros</option>
                        <option>Mililitros</option>
                        <option>Unidades</option>
                    </select>
                </td>
                <td>
                    <button type="button" class="btn-eliminar"
                    aria-label="Eliminar ingrediente">
                        <i class="bi bi-trash3"></i>
                    </button>
                </td>
            `;

            tablaIngredientes.appendChild(fila);
        });
    }

    // Cancelar y regresar al dashboard.
    if (botonCancelar) {
        botonCancelar.addEventListener("click", function () {
            window.location.href = "dashboard.html";
        });
    }

    // Validar el formulario.
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const producto = document.getElementById("producto").value;
        const fecha = document.getElementById("fecha").value;
        const cantidad = document.getElementById("cantidad").value;
        const unidad = document.getElementById("unidad").value;
        const responsable = document.getElementById("responsable").value;

        if (!producto || !fecha || !cantidad || !unidad || !responsable) {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        if (Number(cantidad) <= 0) {
            alert("La cantidad producida debe ser mayor que cero.");
            return;
        }

        alert("¡Registro de producción validado correctamente!");

        formulario.reset();
    });

});




document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formProduccion");

    // Estas funciones solo se ejecutan en la pantalla de producción.
    if (!formulario) {
        return;
    }

    const tabla = document.getElementById("tablaIngredientes");
    const botonAgregar = document.getElementById("agregarIngrediente");
    const botonCancelar = document.getElementById("cancelar");

    // Agregar ingredientes.
    botonAgregar.addEventListener("click", function () {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td><input type="text" class="form-control" placeholder="Ingrediente" required></td>
            <td><input type="number" class="form-control" min="0.01" step="any" placeholder="Cantidad" required></td>
            <td>
                <select class="form-select" required>
                    <option value="">Unidad</option>
                    <option>Kg</option>
                    <option>Gramos</option>
                    <option>Litros</option>
                    <option>Mililitros</option>
                    <option>Unidades</option>
                </select>
            </td>
            <td>
                <button type="button" class="btn-eliminar" aria-label="Eliminar ingrediente">
                    <i class="bi bi-trash3"></i>
                </button>
            </td>
        `;

        tabla.appendChild(fila);
    });

    // Eliminar ingredientes.
    tabla.addEventListener("click", function (evento) {
        const boton = evento.target.closest(".btn-eliminar");

        if (boton) {
            boton.closest("tr").remove();
        }
    });

    // Cancelar el registro.
    botonCancelar.addEventListener("click", function () {
        window.location.href = "dashboard.html";
    });

    // Validar y mostrar confirmación.
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const producto = document.getElementById("producto").value;
        const fecha = document.getElementById("fecha").value;
        const cantidad = Number(document.getElementById("cantidad").value);
        const unidad = document.getElementById("unidad").value;
        const responsable = document.getElementById("responsable").value;

        if (!producto || !fecha || !unidad || !responsable || cantidad <= 0) {
            alert("Completa todos los campos obligatorios con datos válidos.");
            return;
        }

        alert("¡Producción validada correctamente!");

        formulario.reset();
    });
});