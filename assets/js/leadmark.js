
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
})

// const myImage = document.getElementById("my-image");

// myImage.addEventListener("click", function() {
//   this.classList.toggle("expanded");
// });


// const portfolioItems = document.querySelectorAll('.portfolio-item');
// portfolioItems.forEach(item => {
//   item.addEventListener('click', () => {
//     item.style.overflow = 'visible';
//   });

//   item.addEventListener('click', () => {
//     item.style.overflow = 'hidden';
//   });
// });


const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    if (item.style.overflow === 'visible') {
      item.style.overflow = 'hidden';
 
      item.style.cursor = 'zoom-in';
    } else {
      item.style.overflow = 'visible';
      item.style.cursor = 'zoom-out';
     
    }
  });
});