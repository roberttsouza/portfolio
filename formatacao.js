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


/*FUNÇÃO DE DIGITAÇÃO COM LOOP UTILIZANDO TYPED*/
var typed = new Typed('.type',{
  strings: [
            "Desenvolvedor Front-End", 
            "UX/UI Design"
          ],
  typeSpeed: 30,
  backSpeed: 20,
  cursorChar: '',
  loop: true
});




/*ATUALIZAR MINHA IDADE TODOS OS ANOS AUTOMATICAMENTE*/
const nascimento = 1996;
const getAno = new Date().getFullYear();

const idade = getAno-nascimento;

const texIdade = document.querySelector(".texIdade");
texIdade.innerHTML = `${idade}`






/*ATUALIZAR MINHA EXPERIENCIA TODOS OS ANOS AUTOMATICAMENTE
OBS: Essa forma é bem simplificada, preciso aprender uma forma mais curta de fazer esse codigo*/
const anoHoje = new Date().getFullYear();
const exHtml = document.querySelector(".exHtml");
const exCss = document.querySelector(".exCss");
const exJs = document.querySelector(".exJs");
const exWp = document.querySelector(".exWp");
const exUxi = document.querySelector(".exUxi");
const exBs = document.querySelector(".exBs");


exHtml.innerText = anoHoje - exHtml.textContent;
exCss.innerText = anoHoje - exCss.textContent;
exJs.innerText = anoHoje - exJs.textContent;
exWp.innerText = anoHoje - exWp.textContent;
exUxi.innerText = anoHoje - exUxi.textContent;
exBs.innerText = anoHoje - exBs.textContent;