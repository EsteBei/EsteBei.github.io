function toggleDetails() {
    var details = document.querySelector('.detailpage');
    if (details.style.display === 'none') {
      details.style.display = 'block';
      var mybody = document.querySelector('.fakebody');
      mybody.classList.add("blur");
      document.body.style.overflow = 'hidden';
    } else {
      details.style.display = 'none';
      var mybody = document.querySelector('.fakebody');
      mybody.classList.remove("blur");
      document.body.style.overflow = 'auto';
    }
  }
  