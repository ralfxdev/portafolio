$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

 // function contact
 const $form = document.querySelector('#form');
 const $buttonMailto = document.querySelector('#mail');

 $form.addEventListener('submit', handleSubmit);

 function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    $buttonMailto.setAttribute('href', `mailto:lopezalexander1019@gmail.com?subject=Nombre: ${form.get('nombre')} | Correo: ${form.get('correo')} | Asunto: ${form.get('asunto')} &body=${form.get('mensaje')}`)
    $buttonMailto.click()
 };