 // This function will toggle the visibility of the menu on mobile
function toggleMenu() {
  var menu = document.getElementById("dropdownMenu");
  // Toggle the 'active' class on the menu
  menu.classList.toggle("active");

  // Optionally, add the animation for hamburger icon change
  var bars = document.querySelectorAll(".bar1, .bar2, .bar3");
  bars.forEach(function(bar) {
    bar.classList.toggle("change");
  });
}
 
 
 
 searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
	searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
	loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
	loginForm.classList.remove('active');
}



window.onscroll = () =>{

	searchForm.classList.remove('active');

	if(window.screenY > 80){
		document.querySelector('.header .header-2').classList.add('active');
	}else{
		document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{
	if(window.screenY > 80){
		document.querySelector('.header .header-2').classList.add('active');
	}else{
		document.querySelector('.header .header-2').classList.remove('active');
    }
}

// this is help to slide the book/  and to loop

	  var swiper = new Swiper(".books-slider", {


     loop: true,
	 centeredSlides:true,
	 autoplay: {
		 delay: 5000,
		 disableOnInteraction: false,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,

        },
        768: {
          slidesPerView: 2,

        },
        1024: {
          slidesPerView: 3,
		  

        },
      },
    });

	var swiper = new Swiper(".swiperfeatured-slider", {
		spaceBetween: 10,
		loop: true,
		centeredSlides:true,
		autplay: {
		 delay: 9500,
		 disableOnInteraction: false,
      },

        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",

        },
		
		
	

 });