
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
    this.classList.toggle("active-butt");


    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// active menu button 

// let menuItems = document.getElementsByClassName('js-menu-link');
// let onClick = function (event) {
//   event.preventDefault();
  
//   for (let i = 0; i < menuItems.length; i++) {
//     menuItems[i].classList.remove('active');
//   }
  
//    event.currentTarget.classList.add('active');
// };

// for (let i = 0; i < menuItems.length; i++) {
//     menuItems[i].addEventListener('click', onClick, false);
// }


// Get the container element
// let btnContainer = document.getElementsByClassName("menu");
// console.log(btnContainer)


// let btns = document.getElementsByClassName("js-menu-link");
// console.log(btns)


// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     let current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }




