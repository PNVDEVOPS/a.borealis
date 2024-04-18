//uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
(function(){
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
	setAria,
	setAccordionAria,
	switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

		setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case "true":
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case "false":
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};


    
//function
switchAccordion = function(e) {
  console.log("triggered");
	e.preventDefault();
	var thisAnswer = e.target.parentNode.nextElementSibling;
	var thisQuestion = e.target;
	if(thisAnswer.classList.contains('is-collapsed')) {
		setAccordionAria(thisQuestion, thisAnswer, 'true');
	} else {
		setAccordionAria(thisQuestion, thisAnswer, 'false');
	}
  	thisQuestion.classList.toggle('is-collapsed');
  	thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');
 	
  	thisAnswer.classList.toggle('animateIn');
	};
	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();


var modal = document.getElementById("modal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementsByClassName("close")[0];

openModalBtn.onclick = function() {
    modal.style.display = "block";
}

closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Get the modal
var modal = document.getElementById('feedbackModal');

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var formData = new FormData(this);
  // Here you can add code to handle form submission, like sending the data to a server
  // For now, let's just close the modal
  modal.style.display = "none";
  console.warn("Форма успешно отправлена");

  var successMessage = document.createElement('div');
  successMessage.textContent = "Форма успешно отправлена";
  successMessage.style.position = "fixed";
  successMessage.style.top = "50%";
  successMessage.style.left = "50%";
  successMessage.style.transform = "translate(-50%, -50%)";
  successMessage.style.transition = " all 0.3s"
  successMessage.style.backgroundColor = "#4CAF50";
  successMessage.style.color = "white";
  successMessage.style.padding = "20px";
  successMessage.style.borderRadius = "10px";
  document.body.appendChild(successMessage);
  setTimeout(function() {
    document.body.removeChild(successMessage);
  }, 3000);
});



// document.getElementById('contactForm').addEventListener('submit', function(e) {
//     e.preventDefault;
//     console.log("!!!");
// })

// // Carousel

// const container = document.querySelector('.carousel-container');
// let currentIndex = 0;
// const totalItems = container.children.length;

// function showSlide(index) {
//   container.style.transform = `translateX(-${index * 100}%)`;
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % totalItems;
//   showSlide(currentIndex);
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + totalItems) % totalItems;
//   showSlide(currentIndex);
// }

// setInterval(nextSlide, 3000); // автоматическая прокрутка каждые 3 секунды

document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel");
  const container = carousel.querySelector(".carousel-container");
  const items = carousel.querySelectorAll(".carousel-item");
  const itemCount = items.length;
  const itemWidth = items[0].offsetWidth;

  let currentIndex = 0;

  function setCarouselPosition() {
    container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  function next() {
    currentIndex = currentIndex < itemCount - 1 ? currentIndex + 1 : 0;
    setCarouselPosition();
  }

  function prev() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : itemCount - 1;
    setCarouselPosition();
  }

  setInterval(next, 3000); // Автоматическое переключение каждые 3 секунды
});
