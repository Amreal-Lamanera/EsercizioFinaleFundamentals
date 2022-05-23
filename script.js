var controlNav = false;

function Nav() {
    if (controlNav == true) {
        document.getElementById("myNav").style.width = "0";
        document.getElementById("myContainer").style.left = "0";
        controlNav = false;
    } else {
        document.getElementById("myNav").style.width = "8vw";
        document.getElementById("myContainer").style.left = "8vw";
        controlNav = true;
    }
  }