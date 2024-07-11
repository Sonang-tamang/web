const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".right img, .left img");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false;

let startX, startScrollLeft;

let cardPerview = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerview).reverse().forEach(card => {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerview).forEach(card => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

// Adding event listener for the left arrow button
const leftArrowBtn = document.querySelector(".left img");

leftArrowBtn.addEventListener("click", () => {
  carousel.scrollLeft -= firstCardWidth;
});

const dragStart = (e) => {
  isDragging = true;
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
  carousel.classList.add("dragging");
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};



carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

//to scroll dow to buy page
function scrollToSection(gogo) {
            var section = document.getElementById(gogo);
            section.scrollIntoView({ behavior: 'smooth' });
        }

// for search bar function
function toggleSearch() {
    var searchIcon = document.getElementById('search-icon');
    var searchBar = document.querySelector('.search-bar');

    if (searchBar.style.width === '0px' || searchBar.style.width === '') {
        searchBar.style.width = '200px';
    } else {
        searchBar.style.width = '0';
    }
}

let header = document.querySelector("header");

window.addEventListener("scroll", function () {
	header.classList.toggle ("sticky", window.scrollY > 0)
});
