//Function Scroll
$(window).on("scroll", function() {

    if ($(".navbar").offset().top > 40) {
       $(".navbar").addClass("navbar-fixed");
       $(".go-top").show();
 
    } else {
       $(".navbar").removeClass("navbar-fixed");
       $(".go-top").hide();
 
    }
 })
 
 $('.popup-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    gallery: {
       enabled: true,
       navigateByImgClick: true
    }
 });

 //Function Navbar
 $("#navbarNav").on('show.bs.collapse', function() {

    $(".navbar").addClass("navbar-fixed");

    $('a.nav-link, a.btn-custom').click(function() {
       $("#navbarNav").collapse('hide');
    });
 });

 //Function Contact
 const $form = document.querySelector('#form');
 const $buttonMailto = document.querySelector('#mail');

 $form.addEventListener('submit', handleSubmit);

 function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    $buttonMailto.setAttribute('href', `mailto:lopezalexander1019@gmail.com?subject=Nombre: ${form.get('nombre')} | Correo: ${form.get('correo')}&body=${form.get('mensaje')}`)
    $buttonMailto.click()
 };