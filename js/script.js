$(".nav-item a").click(function(e){
    $(".navbar-collapse").collapse('hide');
    $(".animated-icon").toggleClass("open");
});

$(".nav-btn").click(function(e){
    $(".animated-icon").toggleClass("open");
});