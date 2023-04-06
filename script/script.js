function toggleDetails() {
  console.log("test");
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
  function toggleElement() {
    console.log("test");
    var element = document.querySelector('.element');
    if (element.style.display === 'none') {
      element.style.display = 'block';
      var mybody = document.querySelector('.fakebody');
      mybody.classList.add("blur");
      document.body.style.overflow = 'hidden';
    } else {
      element.style.display = 'none';
      var mybody = document.querySelector('.fakebody');
      mybody.classList.remove("blur");
      document.body.style.overflow = 'auto';
    }
  }
  function toggleDetails2() {
    console.log("test");
      var details2 = document.querySelector('.detailpage2');
      if (details2.style.display === 'none') {
        details2.style.display = 'block';
        var mybody = document.querySelector('.fakebody');
        mybody.classList.add("blur");
        document.body.style.overflow = 'hidden';
      } else {
        details2.style.display = 'none';
        var mybody = document.querySelector('.fakebody');
        mybody.classList.remove("blur");
        document.body.style.overflow = 'auto';
      }
  }
  function toggleDetails3() {
    console.log("test");
      var details3 = document.querySelector('.detailpage3');
      if (details3.style.display === 'none') {
        details3.style.display = 'block';
        var mybody = document.querySelector('.fakebody');
        mybody.classList.add("blur");
        document.body.style.overflow = 'hidden';
      } else {
        details3.style.display = 'none';
        var mybody = document.querySelector('.fakebody');
        mybody.classList.remove("blur");
        document.body.style.overflow = 'auto';
      }
  }