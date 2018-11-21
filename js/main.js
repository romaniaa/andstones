
  function openNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main_nav").style.marginLeft= "0";
      document.body.style.backgroundColor = "black";
  }

  function closeNav() {
    if (x.matches) { // If media query matches
            document.getElementById("mySidenav").style.width = "90%";
        } else {
            document.getElementById("mySidenav").style.width = "30%";
        }
      document.getElementById("main_nav").style.marginLeft = "-30px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

  }

  var x = window.matchMedia("(max-width: 900px)")
  openNav(x) // Call listener function at run time
  x.addListener(openNav) // Attach listener function on state changes
