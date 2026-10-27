document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los elementos del acordeón
    const elementosAcordeon = document.querySelectorAll('.item-acordeon');

    elementosAcordeon.forEach(item => {
        const encabezado = item.querySelector('.encabezado-acordeon');

        encabezado.addEventListener('click', () => {
            // Guardamos si el elemento actual ya está activo
            const estaActivo = item.classList.contains('activo');

            // 1. Colapsamos todos los elementos (cerramos las demás secciones)
            elementosAcordeon.forEach(otroItem => {
                otroItem.classList.remove('activo');
            });

            // 2. Si no estaba activo antes de hacer clic, lo desplegamos
            if (!estaActivo) {
                item.classList.add('activo');
            }
        });
    });
});