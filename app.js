// Slider
// $('.slider_feedback_section').slick({
//    infinite: true,
//    slidesToShow: 3,
//    slidesToScroll: 3,
//    arrows:true,
//    autoplay:true,
//    autoplaySpeed:2000,
//    adaptiveHeight: true,
//    pauseOnDotsHover:true,
//    responsive: [
//       {
//         breakpoint:1024,
//         settings:{
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         }
//       },
//       {
//         breakpoint:800,
//         settings:{
//           slidesToShow:2,
//           slidesToScroll:2,
//           dots:true,
//           arrows:false,
//         }
//       },
//       {
//         breakpoint:500,
//         settings:{
//           slidesToShow:1,
//           slidesToScroll:1,
//           dots:true,
//           arrows:false,
//           autoplaySpeed:5000,
//           centerMode:true,
//           centerPadding:'20px',
//         }
//       }
//     ]
//  });


// //  products-buttons
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

// modal window
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// slider 
$(function(){
                
  $('#slider1').Thumbelina({
      $bwdBut:$('#slider1 .left'),    
      $fwdBut:$('#slider1 .right'),
  });
  
})



// btn

// var controller = new ScrollMagic.Controller();

// new ScrollMagic.Scene({
//    triggerElement: "#multiDirect",
//     duration: 200, 
//     offset: 10, 
// })
// .setPin("#animate")
// .addTo(controller);


// squise-curtains
$(function() {
  $('[data-wanker]').wanker({delay: 200, duration: 2000});
});



// UP-button
$(document).ready(function () {
  $.goup({
      trigger: 100,
      bottomOffset: 150,
      locationOffset: 40,
      title: 'ВВЕРХ',
      titleAsText: true,
      zIndex:100,
      containerRadius:50,
      containerColor:"#c71806",
      entryAnimation:"slide",
      hideUnderWidth:100,
  });
});




