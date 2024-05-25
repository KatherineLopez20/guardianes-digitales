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
