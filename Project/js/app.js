let header = document.querySelector("header");

window.addEventListener("scroll", function () {
	header.classList.toggle ("sticky", window.scrollY > 0)
});

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

//to scroll dow to show page
function scrollToSection(Expo) {
            var section = document.getElementById(Expo);
            section.scrollIntoView({ behavior: 'smooth' });
        }

