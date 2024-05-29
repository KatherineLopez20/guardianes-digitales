document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al botón de iniciar curso
    var btnIniciarCurso = document.getElementById('btn-iniciar-curso');

    // Agregar evento de clic al botón de iniciar curso
    btnIniciarCurso.addEventListener('click', function() {
        // Ocultar la página de inicio
        document.getElementById('pagina-inicio').style.display = 'none';
        // Mostrar la sección del curso
        document.getElementById('curso').style.display = 'block';
    });
});

document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar la acción predeterminada del enlace
        // Seleccionar el elemento de menú actual
        var currentItem = event.target.closest('.nav-item');
        // Agregar la clase 'show' al menú para mantenerlo abierto
        currentItem.querySelector('.subnav').classList.add('show');
    });
});

document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('show');
    if (document.querySelector('.sidebar').classList.contains('show')) {
        document.querySelector('.main-content').style.marginLeft = '220px';
    } else {
        document.querySelector('.main-content').style.marginLeft = '0';
    }
});


// actividad contraseñas seguras 
function evaluatePassword() {
    var password = document.getElementById("passwordInput").value;
    var result = document.getElementById("result");
    var strength = getPasswordStrength(password);
    
    if (strength === 'strong') {
        result.textContent = "Contraseña fuerte";
        result.style.color = "green";
    } else if (strength === 'medium') {
        result.textContent = "Contraseña media";
        result.style.color = "orange";
    } else {
        result.textContent = "Contraseña débil";
        result.style.color = "red";
    }
}

function getPasswordStrength(password) {
    var strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})");
    var mediumPassword = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    if (strongPassword.test(password)) {
        return 'strong';
    } else if (mediumPassword.test(password)) {
        return 'medium';
    } else {
        return 'weak';
    }
}


// 
$(document).ready(function(){
    // Escucha los clics en los enlaces del menú lateral
    $('.nav-link').on('click', function(event){
        // Evita el comportamiento predeterminado del enlace
        event.preventDefault();
        // Obtiene el ID del destino del enlace
        var target = $(this).attr('href');
        // Oculta todas las secciones de contenido
        $('.section').removeClass('active');
        // Muestra la sección de contenido correspondiente al enlace
        $(target).addClass('active');
        // Marca el enlace como completado
        $(this).addClass('completed');
        // Oculta el título del curso
        $('#titulo-curso').hide();
      
    });
});
