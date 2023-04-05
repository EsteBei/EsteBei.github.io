// get a reference to the image element
var image = document.querySelector('.projectmedia');

// add a click event listener to the image element
image.addEventListener('click', function() {
  // get a reference to the detail page element
  var detailPage = document.querySelector('.detailpage');

  // toggle the display style of the detail page element
  if (detailPage.style.display === 'none') {
    detailPage.style.display = 'block';
  } else {
    detailPage.style.display = 'none';
  }
});