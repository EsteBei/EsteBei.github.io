function toggleDetails() {
    var details = document.querySelector('.detailpage');
    if (details.style.display === 'none') {
      details.style.display = 'block';
      var mybody = document.querySelector('.fakebody');
      mybody.classList.add("blur");
      mybody.classList.add("noscroll");
    } else {
      details.style.display = 'none';
      var mybody = document.querySelector('.fakebody');
      mybody.classList.remove("blur");
      mybody.classList.remove("noscroll");
    }
  }
  