let d = document,
    c = console.log,
    imagenes = Array.from(d.querySelectorAll('.card')),
    modal = d.getElementById('modal'),
    cerrar = d.getElementById('cerrar'),
    imgModal = d.getElementById('img-modal');

if(cerrar != null) {
    cerrar.addEventListener('click', () => {
        if(modal != null) {
            modal.style.display = 'none';
        }
    });
}
    
if(imagenes != null) {
    imagenes.forEach(card => {
        card.addEventListener('click', () => {
            let imagen = card.getElementsByTagName('img')[0];
            if(imgModal != null) imgModal.src = imagen.src;
            if(modal != null) modal.style.display = 'block';
            

        });
    })
}