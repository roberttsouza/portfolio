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






 /*Efeito de one page scroll com Jquery*/   
$('nav a').click(function(e){
  e.preventDefault();
  var id = $(this).attr('href'),
  
      targetOffset = $(id).offset().top,
      menuHeight = $('nav').innerHeight();

$('html, body').animate({
  scrollTop: targetOffset - menuHeight
}, 500);

});