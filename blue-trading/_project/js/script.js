$(document).ready(function(){
    $('.news-carousel').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.testimonial-carousel').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    let viewportHeight = $(window).height();
    $(window).on("scroll", function(){
        let currentPosition = $(window).scrollTop();
        if(currentPosition > viewportHeight-200){
            $(".navbar").addClass("fixed-navbar").removeClass("navbar-dark");
        }else{
            $(".navbar").removeClass("fixed-navbar").addClass("navbar-dark");
            setCurrentSection("home");
        }
    });

    // let homeSection = $('#home').waypoint(function(direction) {
    //     $(".nav-link").removeClass("currentSection");
    //     $(".nav-link[href='#home']").addClass("currentSection"); 
    // }, {
    //     offset: '20%'
    // });
});

function setCurrentSection(current) {
    $('.nav-link').removeClass("currentSection");
    $(`.nav-link[href="#${current}"]`).addClass("currentSection");
};

function scrolling() {
    let sectionToScroll = $('section');
    sectionToScroll.waypoint(function(direction) {
        if (direction === "down") {
            setCurrentSection($(this.element).attr("id"));
        }
    }, {
        offset: '15%'
    });
    sectionToScroll.waypoint(function(direction) {
        if (direction === "up") {
            setCurrentSection($(this.element).attr("id"));
        }
    }, {
        offset: '-10%'
    });
};

scrolling();

$(window).on("load",function(){
    $(".loaderContainer").fadeOut(function(){
        $(this).remove();
    });
})

