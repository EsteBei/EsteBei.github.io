function toggleDetails() {
    var details = document.querySelector('.detailpage');
    console.log(details.style.display);
    if (details.style.display === 'none') {
      details.style.display = 'block';
      var mybody = document.querySelector('.fakebody');
      mybody.classList.toggle("blur");
      mybody.classList.toggle("noscroll");
    } else {
      details.style.display = 'none';
    }
  }
  var closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', function() {
    var details = document.querySelector('.detailpage');
    details.style.display = 'none';
    mybody.classList.toggle("blur");
  });