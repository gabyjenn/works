    window.addEventListener('scroll', function() {
      let num = (window.scrollY/window.innerHeight)*4;

      document.getElementById('myImg').style.webkitFilter = 'blur(' + num + 'px)'
    })