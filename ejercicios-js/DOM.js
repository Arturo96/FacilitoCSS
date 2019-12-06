let d = document,
    c = console.log,
    menu = d.getElementById('menu');
    btnHide = d.getElementById('btnHide');

btnHide.addEventListener('click', e => {
    menu.classList.toggle('hide');
    e.target.value = e.target.value == 'Ocultar' ? 'Mostrar' : 'Ocultar';
    c(this)
});

