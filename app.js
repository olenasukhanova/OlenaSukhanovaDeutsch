// mobile menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active-menu");
  if (mobileMenu.classList.contains('active-menu')) {
    mainMenu.classList.add('active-menu')
  } else {
    mainMenu.classList.remove('active-menu')
  }
})



// function openTranslate() {
//   let tabs = document.querySelectorAll(".tablink");


//   let i;

//   for (i = 0; i < tabs.length; i++) {
  
//     tabs[i].addEventListener("click", function () {
//       this.classList.toggle("defaultOpen");



//       let butt = document.querySelectorAll('.tabcontent');
  
//       for (i = 0; i < butt.length; i++) {
//         if (tabs[i].classList.contains('defaultOpen')) {
//           butt[i].style.display = "block";

//         } else {
//           butt[i].style.display = "none";

//         }
//       }
//     })
//   }
// }
// openTranslate();


// //  products-buttons
// let acc = document.getElementsByClassName("accordion");
// let i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active-butt");


//     let panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }


let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-butt");

    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


// modal window

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// slider 
$(function () {

  $('#slider1').Thumbelina({
    $bwdBut: $('#slider1 .left'),
    $fwdBut: $('#slider1 .right'),
  });

})



// squise-curtains
$(function () {
  $('[data-wanker]').wanker({ delay: 200, duration: 2000 });
});



// UP-button
$(document).ready(function () {
  $.goup({
    trigger: 100,
    bottomOffset: 150,
    locationOffset: 40,
    title: 'ВВЕРХ',
    titleAsText: true,
    zIndex: 20,
    containerRadius: 50,
    containerColor: "#c71806",
    entryAnimation: "slide",
    hideUnderWidth: 100,
  });
});



// adjusting nav menu height

// let header = document.querySelector(".header").scrollHeight;
// console.log(header);
//  let sections = document.querySelectorAll("section")
//  console.log(sections);
//   let topMenu = scroll.offsetParent - header.scrollHeight;
//   console.log(topMenu);

// $('html, body').animate({
//   scrollTop: $("#section2").offset().top - $("#nav").height() // minus the nav height
// }, 1000);


// modal window
let modalWindow = document.querySelector(".modal-window");
console.log(modalWindow);
let closeBtn = document.querySelector(".button-close");
console.log(closeBtn);

function openModal(){
  modalWindow.classList.add("shown")
  modalWindow.classList.remove("hide") 
}

function openModalScroll(){
   if (window.pageYOffset >= document.documentElement.scrollHeight/2){
      openModal();
      window.removeEventListener('scroll',openModalScroll)
   }
}

window.addEventListener('scroll', openModalScroll)


function closeModal() {
  modalWindow.classList.add("hide");
  modalWindow.classList.remove("shown")
}

closeBtn.addEventListener("click",closeModal)










