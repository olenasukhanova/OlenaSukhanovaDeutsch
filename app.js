
// Slider

$(".slider_container").slick(  {
   dots:true,
   autoplay:true,
   autoplaySpeed:2000,
   arrows:false,
   // adaptiveHeight: true,
   pauseOnDotsHover:true,
   zindex:10,
});

$('.slider_feedback_section').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 3,
   arrows:true,
   autoplay:true,
   autoplaySpeed:2000,
   adaptiveHeight: true,
   pauseOnDotsHover:true,
   responsive: [
      {
        breakpoint:1024,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint:800,
        settings:{
          slidesToShow:2,
          slidesToScroll:2,
          dots:true,
          arrows:false,
        }
      },
      {
        breakpoint:500,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
          dots:true,
          arrows:false,
          autoplaySpeed:5000,
          centerMode:true,
          centerPadding:'20px',
        }
      }
    ]
 });


//  products-buttons
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active1");


    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


