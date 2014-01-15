// executes when complete page is fully loaded, including all frames, objects and images

$(window).load(function() {
 
});


// DOM is ready

$(document).ready(function () {

    $(document).foundation();


    /* Mobile navigation
    -------------------------------------------------*/

    $("#openNavigation").on("click", function (e) {
        e.preventDefault();
        $(".navigation").toggleClass("open");
    });



    /* Modernizr
    -------------------------------------------------*/

    // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
    if (Modernizr.touch && !window.location.hash) {
        $(window).load(function () {
            setTimeout(function () {
                window.scrollTo(0, 1);
            }, 0);
        });
    }

    if (!Modernizr.backgroundsize) {

    }

    if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }



    /* Flex Slider
    -------------------------------------------------*/
	
  	if($('.flexslider').length) {
  		$('.flexslider').flexslider({
  			animation: "fade"
  		});
  	}	



    /* PrettyPhoto
    -------------------------------------------------*/
  	if($("a[rel^='prettyPhoto']").length){
      	$("a[rel^='prettyPhoto']").prettyPhoto({ animationSpeed: 'slow', slideshow: false, overlay_gallery: false, social_tools: false, deeplinking: false });
  	}



});
