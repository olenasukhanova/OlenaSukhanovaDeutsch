// mobile menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function(){
  mobileMenu.classList.toggle("active-menu");
  if(mobileMenu.classList.contains('active-menu')){
      mainMenu.classList.add('active-menu')
  } else{
    mainMenu.classList.remove('active-menu')
  }
}) 

// // active menu 
// $('#nav').onePageNav ({
//   currentClass:"current"
// })


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



