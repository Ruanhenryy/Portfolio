const btnmenu = document.querySelector('#icon')
const menu = document.querySelector('.conteiner-menu')
const btnSairMenu = document.querySelector('#icon-menu')

btnmenu.addEventListener('click', function(){
    menu.classList.add('active')
    btnmenu.style.display = 'none'
    btnSairMenu.style.display = 'block'
})

btnSairMenu.addEventListener('click', function(){
    menu.classList.remove('active')
    btnmenu.style.display = 'block'
    btnSairMenu.style.display = 'none'
})