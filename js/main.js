

$(window).load(function() { 
        $('#status').fadeOut(); 
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({'overflow':'visible'});
    })




$(document).ready(function() {


new WOW().init();
 
  $("#slider").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });



    $('html').niceScroll({
            cursorcolor: '#00a8e8',
            cursorwidth: '5px',
            cursorborderradius: '5px',
            scrollspeed : '90',
            zindex : '9999',
            cursorborder: '0px solid',
            slices: 5,
            boxRows: 10,
            boxCols: 20
        });



    // -------------------------------------------------------------
    //  Google Maps
    // -------------------------------------------------------------


    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(25.762511, 89.241241), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#00a8e8"},{"visibility":"on"}]}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(25.762511, 89.241241),
            map: map,
            title: 'RangpurSource!'
        });
    }





// Start Smoth scrolling script

      $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target
          || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body')
            .animate({scrollTop: targetOffset}, 1000);
           return false;
          }
        }
      });

// End Smoth scrolling script

// wow jquery add




 
});


$(document).ready(function(){

    new WOW().init();
});

  
    // -------------------------------------------------------------
    //  Sticky menu
    // -------------------------------------------------------------

    
    (function () {
    
             var nav = $('.navbar');
             var scrolled = false;

             $(window).scroll(function () {

                 if (300 < $(window).scrollTop() && !scrolled) {
                     nav.addClass('sticky wow bounceInDown center animated');

                     scrolled = true;
                 }

                 if (300 > $(window).scrollTop() && scrolled) {
                     nav.removeClass('sticky wow bounceInDown center animated');

                     scrolled = false;
                 }
             });

    }());  


    // -------------------------------------------------------------
    //  Typed js
    // -------------------------------------------------------------

    
    // $(function(){
    //       $("#search").typed({
    //         strings: ["First sentence.", "Second sentence."],
    //         typeSpeed: 30;
    //       });
    //   });
      
    // -------------------------------------------------------------
    //  Search
    // -------------------------------------------------------------
    
    (function () {
    
        $('.icofont-search').on('click', function() {
            $('.search').slideToggle();
        });

    }());

