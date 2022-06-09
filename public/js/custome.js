// video player //
	$(document).ready(function() {
		$('video').mediaelementplayer({
			alwaysShowControls: false,
			videoVolume: 'horizontal',
			features: ['playpause','progress','volume','fullscreen']
		});
	});

// mobile nav //

	function darken_screen(yesno){
		if( yesno == true ){
			document.querySelector('.screen-darken').classList.add('active');
		}
		else if(yesno == false){
			document.querySelector('.screen-darken').classList.remove('active');
		}
	}
	
	function close_offcanvas(){
		darken_screen(false);
		document.querySelector('.mobile-offcanvas.show').classList.remove('show');
		document.body.classList.remove('offcanvas-active');
	}

	function show_offcanvas(offcanvas_id){
		darken_screen(true);
		document.getElementById(offcanvas_id).classList.add('show');
		document.body.classList.add('offcanvas-active');
	}

	document.addEventListener("DOMContentLoaded", function(){
		document.querySelectorAll('[data-trigger]').forEach(function(everyelement){
			
			let offcanvas_id = everyelement.getAttribute('data-trigger');
			
			everyelement.addEventListener('click', function (e) {
				e.preventDefault();
	        	show_offcanvas(offcanvas_id);
	  			
			});
		});

		document.querySelectorAll('.btn-close').forEach(function(everybutton){
			
			everybutton.addEventListener('click', function (e) {
				e.preventDefault();
	        	close_offcanvas();
	  		});
		});

		document.querySelector('.screen-darken').addEventListener('click', function(event){
			close_offcanvas();
		});
		
    }); 
	// DOMContentLoaded  end
	
// counter //
	function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}




// star revew //

$(function() {
	
	$(document).on({
		mouseover: function(event) {
			$(this).find('.far').addClass('star-over');
			$(this).prevAll().find('.far').addClass('star-over');
		},
		mouseleave: function(event) {
			$(this).find('.far').removeClass('star-over');
			$(this).prevAll().find('.far').removeClass('star-over');
		}
	}, '.rate');


	$(document).on('click', '.rate', function() {
		if ( !$(this).find('.star').hasClass('rate-active') ) {
			$(this).siblings().find('.star').addClass('far').removeClass('fas rate-active');
			$(this).find('.star').addClass('rate-active fas').removeClass('far star-over');
			$(this).prevAll().find('.star').addClass('fas').removeClass('far star-over');
		} else {
			console.log('has');
		}
	});
	
});









// slider //

$('#testimonial-carousel2').owlCarousel({
            loop:true,
            margin:20,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3.5
                }
            }
        })


      $('#instagram-carousle').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })
	  
	  

$('#recipe-use').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
				993:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        })


      $('#recipe-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
				993:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        })
	  
	  
	   $('#recipe-carousel2').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
				993:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        })

   


      $('#recipe-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
				993:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        })

      $('#testimonial-carousel').owlCarousel({
            loop:true,
            margin:20,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })

      
	 $('#shipping-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                768:{
                    items:4
                },
                1000:{
                    items:4
                }
            }
        })
	 
	
	$('#recipe-icons').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:2
                },
				993:{
                    items:3
                },
                1000:{
                    items:4
                },

               
            }
        })


	 

	   	$('#related-product').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
				993:{
                    items:3
                },
                1000:{
                    items:4
                },

               


               
            }
        })

	  
      $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })





