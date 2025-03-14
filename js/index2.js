window.sr = ScrollReveal();

	sr.reveal('.logo', {
		rotate: {
        x: 100,
        z: 100
    },
		duration: 4000, //tiempo
		origin: 'top', //origen
		distance: '0', //distancia
		delay:500
		

	});
sr.reveal('.prox2', {
		duration: 2500, //tiempo
		origin: 'top', //origen
		distance: '-300px', //distancia
		delay:1000
		

	}); 

	sr.reveal('.cuerpo', {
		duration: 2500, //tiempo
		origin: 'top', //origen
		distance: '-300px', //distancia
		delay:1700
		

	}); 
	sr.reveal('.titulo2', {
		duration: 2500, //tiempo
		origin: 'left', //origen
		distance: '200px', //distancia
		delay:1000
		

	}); 
	sr.reveal('.btn', {
		duration: 2500, //tiempo
		origin: 'bottom', //origen
		distance: '200px', //distancia
		delay:1400
		

	}); 
	sr.reveal('.titulo', {
		duration: 2500, //tiempo
		origin: 'left', //origen
		distance: '200px', //distancia
		delay:1400
		

	}); 
	sr.reveal('.empanada2', {
		duration: 3500, //tiempo
		origin: 'left', //origen
		distance: '200px', //distancia
		delay:1500
		

	}); 
	sr.reveal('.destinos3', {
		duration: 4500, //tiempo
		delay:1000,
		origin: 'top', //origen
		distance: '-400px', //distancia

	});
	sr.reveal('.empanada', {
		duration: 3000, //tiempo
		origin: 'left', //origen
		distance: '100px', //distancia
		delay:1000
		

	}); 

	sr.reveal('.piepagina', {
		duration: 1500, //tiempo
		origin: 'right', //origen
		distance: '-100px', //distancia
		

	}); 

	sr.reveal('.float', {
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '-100px', //distancia
		

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