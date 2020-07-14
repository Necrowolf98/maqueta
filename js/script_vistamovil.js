$(function(){
/*-----------------------------------------------------------
1. FUNCIONES PARA EL MENU PRINCIPAL
-------------------------------------------------------------*/

  /*  Inserta y quita la clase ".icono-cerrar" al boton del menú*/
  $("#menu-navegacion .navbar-toggler").click(function () {
    $(".boton-menu").toggleClass("icono-cerrar");
  });

  /*Al hacer click en un enlace del menú principal */
  $("#menu-navegacion .navbar-nav a").click(function () {
    /* 1) Quita la clase ".icono-cerrar" */
    $(".boton-menu").removeClass("icono-cerrar");

    /*2) Contraemos el menu */
    $("#menu-navegacion .navbar-collapse").collapse("hide");
  });

/*-----------------------------------------------------------
     2. INICIANDO SWIPER
-------------------------------------------------------------*/
  var swiper = new Swiper("#animacion", {
    /*Botones de navegación */
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    /*Botones de paginación */
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    speed: 500,
    effect: "fade",
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    autoplayDisableOnInteraction: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  /*-----------------------------------------------------------
  3. INICIANDO VENOBOX
  -------------------------------------------------------------*/

  $(".venobox-video").venobox({
    autoplay: true,
    bgcolor: "rgba(255, 255, 255, 0.4)",
    border: "5px",
    closeColor: "#fff",
    overlayColor: "rgba(45, 203, 216, 0.60)",
    spinner: "three-bounce",
  });

/*-----------------------------------------------------------
4. INICIANDO jquery.counterup
-------------------------------------------------------------*/
  $(".counter").counterUp();

/*-----------------------------------------------------------
5. INICIANDO "stickit.js"
-------------------------------------------------------------*/
    $('#menu-navegacion').stickit({
        className:'menu-fijo'        
    });

/*-----------------------------------------------------------
    6. INICIANDO "page-scroll-to-id"
-------------------------------------------------------------*/
    $('#menu-principal a').mPageScroll2id({
        offset: 60,
        highlightClass:'active'
    });

    $('.ver_mas_servicios').mPageScroll2id({
        offset: 60,
        highlightClass:'active'
    });

});
