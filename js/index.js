window.sr = ScrollReveal();

	sr.reveal('.logotipo', {
		duration: 1500, //tiempo
		origin: 'bottom', //origen
		distance: '-50px', //distancia
		


	}); 

	sr.reveal('.buttons', {
		duration: 1500, //tiempo
		origin: 'bottom', //origen
		distance: '-100px', //distancia
		

	}); 

	sr.reveal('.empanadaspng', {
		duration: 1500, //tiempo
		origin: 'right', //origen
		distance: '-100px', //distancia
		reset: 1000

	});

	sr.reveal('.cajeta1', {
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '-100px', //distancia
		

	});

	sr.reveal('.piña1', {
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '-100px', //distancia
		

	});

sr.reveal('.fresa1', {
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '-100px', //distancia
		

	});

sr.reveal('.crema1', {
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '-100px', //distancia
		

	});

sr.reveal('.nutella1', {
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '-100px', //distancia
		

	});

sr.reveal('.zarzamora1', {
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '-100px', //distancia
		

	});

sr.reveal('.combinada21', {
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '-100px', //distancia
		

	});

sr.reveal('.combinada31', {
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '-100px', //distancia
		

	});

sr.reveal('.surtida1', {
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '-100px', //distancia
		

	});


	

	sr.reveal('.piepagina', {
		duration: 1500, //tiempo
		origin: 'bottom', //origen
		distance: '-100px', //distancia
		reset:100

	}); 

	sr.reveal('.float', {
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '-100px', //distancia
		reset: 1000

	}); 

$(document).ready(function () {
  $(".nav-link").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function () {


      });
    }
  });
});

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});