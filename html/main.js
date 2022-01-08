var sideBtn = document.querySelector('.side-nav-btn');
var sideNav = document.querySelector('.main-menu');
var sideBtn = document.querySelector('.side-btn');

//event listener for click on side nav button
sideBtn.addEventListener('click', function() {
  if (sideNav.style.display === 'none') {
    openNav();
  } else {
    closeNav();
  }
});

//function for closing side nav
function closeNav() {
  sideNav.style.display = 'none';
  sideBtn.style.color = '#fff';
}


//function for opening side nav
function openNav() {
  sideNav.style.display = 'block';
  sideBtn.style.color = '#111';
}
