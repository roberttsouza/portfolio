/*função Dark mode*/
const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('dark-mode')
})



/*Função navbar mobile*/
function openNav() {
    document.getElementById("my-menu-nav").style.height = "100vh" ;
  }
  
  function closeNav() {
    document.getElementById("my-menu-nav").style.height = "0";
  }