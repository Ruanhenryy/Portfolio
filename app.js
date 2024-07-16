const btnmenu = document.querySelector('#icon')
const menu = document.querySelector('.conteiner-menu')
const btnSairMenu = document.querySelector('#icon-menu')

const foto = document.querySelector('.conteiner-foto')

btnmenu.addEventListener('click', function(){
    menu.classList.toggle('active')
    btnmenu.style.display = 'none'
    btnSairMenu.style.display = 'block'
    foto.style.margin = '0'
})

btnSairMenu.addEventListener('click', function(){
    menu.classList.remove('active')
    btnmenu.style.display = 'block'
    btnSairMenu.style.display = 'none'
    foto.style.margin = 'auto'
})