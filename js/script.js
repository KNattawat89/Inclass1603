var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

// $("#carouselButton").click(function(){
//     if ($("#carouselButton").children("span").hasClass('fa-pause')) {
//         $("#mycarousel").carousel('pause');
//         $("#carouselButton").children("span").removeClass('fa-pause');
//         $("#carouselButton").children("span").addClass('fa-play');
//     }
//     else if ($("#carouselButton").children("span").hasClass('fa-play')){
//         $("#mycarousel").carousel('cycle');
//         $("#carouselButton").children("span").removeClass('fa-play');
//         $("#carouselButton").children("span").addClass('fa-pause');                    
//     }
// });