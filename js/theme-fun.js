$(function(){


  

    //*****************************
    // Match Height Functions
    //*****************************
    $('.matchheight').matchHeight();
    


    //*****************************
    // Slick Slider
    //*****************************



    
    $('.hero-slider').slick({

        dots: false,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    draggable: false,
                    swipe: false,
                }
            }
        ]
        
    });



    

    $('.price-slider').slick({

        dots: false,
        arrows:true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    draggable: false,
                    swipe: false,
                }
            }
        ]
        
    });



/////// single product Nav Slider /////////

 $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
 });

 $('.slider-nav')
    .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        focusOnSelect: false,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
        }
        }]
    });

 $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
 });

 $('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
 });


/////// single product Nav Slider /////////


    //*****************************
    // Responsive Slider
    //*****************************

    var tabrespsliders = {
      1: {slider : '.difference-slider'}
    };


    //*****************************
    // Responsive Slider
    //*****************************

    var respsliders = {
      1: {slider : '.res-slider'}

    };

    //*****************************
    // Function for Responsive Slider 991
    //*****************************

    $.each(tabrespsliders, function() {

        $(this.slider).slick({
            arrows: false,
            dots: true,
            autoplay: true,
            settings: "unslick",
            responsive: [
                {
                  breakpoint: 2000,
                  settings: "unslick"
                },
                {
                    breakpoint: 991,
                    settings: {
                        unslick: true
                    }
                }
            ]
        });
    });


    //*****************************
    // Function for Responsive Slider 767
    //*****************************

    $.each(respsliders, function() {

        $(this.slider).slick({
            arrows: false,
            dots: true,
            autoplay: true,
            settings: "unslick",
            responsive: [
                {
                  breakpoint: 2000,
                  settings: "unslick"
                },
                {
                    breakpoint: 767,
                    settings: {
                        unslick: true
                    }
                }
            ]
        });
    });   


    // var m = new Masonry($('.grid').get()[0], {
    //     itemSelector: ".block-grid"
    // });

    
    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('.parallaxing1').parallax("50%", 0.1);
    $('.parallaxing2').parallax("50%", 0.2);
    $('.parallaxing3').parallax("50%", 0.3);
    $('.parallaxing4').parallax("50%", 0.4);
    $('.parallaxing5').parallax("50%", 0.5);
    $('.parallaxing6').parallax("50%", 0.6);
    $('.parallaxing7').parallax("50%", 0.7);
    $('.parallaxing8').parallax("50%", 0.8);
    $('.parallaxing9').parallax("50%", 0.9);
    $('.parallaxing10').parallax("50%", 0.10);

});


