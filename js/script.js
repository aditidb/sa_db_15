var vmin = 2;
var vmax = 5;
var vr = 2;
var timer1;

function Halloween(halloweenname, width, height) {
  this.named = halloweenname;
  this.vx = vmin + vmax * Math.random();
  this.vy = vmin + vmax * Math.random();
  this.w = width + 20;
  this.h = height;
  this.xx = 0;
  this.yy = 0;
  this.timer1 = null;
}

function movehalloween(halloweenname) {
  if (document.getElementById) {
    eval("halloween=" + halloweenname);
    if (window.innerWidth || window.opera) {
      pageX = window.pageXOffset;
      pageW = window.innerWidth - 40;
      pageY = window.pageYOffset;
      pageH = window.innerHeight - 20;
    }

    halloween.xx = halloween.xx + halloween.vx;
    halloween.yy = halloween.yy + halloween.vy;

    halloween.vx += vr * (Math.random() - 0.5);
    halloween.vy += vr * (Math.random() - 0.5);
    if (halloween.vx > vmax + vmin)
      halloween.vx = (vmax + vmin) * 2 - halloween.vx;
    if (halloween.vx < -vmax - vmin)
      halloween.vx = (-vmax - vmin) * 2 - halloween.vx;
    if (halloween.vy > vmax + vmin)
      halloween.vy = (vmax + vmin) * 2 - halloween.vy;
    if (halloween.vy < -vmax - vmin)
      halloween.vy = (-vmax - vmin) * 2 - halloween.vy;

    if (halloween.xx <= pageX) {
      halloween.xx = pageX;
      halloween.vx = vmin + vmax * Math.random();
    }
    if (halloween.xx >= pageX + pageW - halloween.w) {
      halloween.xx = pageX + pageW - halloween.w;
      halloween.vx = -vmin - vmax * Math.random();
    }
    if (halloween.yy <= pageY) {
      halloween.yy = pageY;
      halloween.vy = vmin + vmax * Math.random();
    }
    if (halloween.yy >= pageY + pageH - halloween.h) {
      halloween.yy = pageY + pageH - halloween.h;
      halloween.vy = -vmin - vmax * Math.random();
    }

    document.getElementById(halloween.named).style.left = halloween.xx + "px";
    document.getElementById(halloween.named).style.top = halloween.yy + "px";

    halloween.timer1 = setTimeout(
      "movehalloween('" + halloween.named + "')",
      100
    );
  }
}

/***********************************************
SET UP YOUR SPOOKY DIVS
***********************************************/

//  Define your divs and set the height and width in px so they are constrained in the viewport/
var spook1, spook2, spook3, spook4;
function pagestart() {
  spook1 = new Halloween("spook1", 47, 68);
  spook2 = new Halloween("spook2", 47, 68);
  spook3 = new Halloween("spook3", 47, 68);
  spook4 = new Halloween("spook4", 47, 68);
  spook5 = new Halloween("spook5", 47, 68);
  spook6 = new Halloween("spook6", 47, 68);

  movehalloween("spook1");
  movehalloween("spook2");
  movehalloween("spook3");
  movehalloween("spook4");
  movehalloween("spook5");
  movehalloween("spook6");
}

if (window.addEventListener) window.addEventListener("load", pagestart, false);
else if (window.attachEvent) window.attachEvent("onload", pagestart);
else if (document.getElementById) window.onload = pagestart;

// END SUPER SCARY HALLOWEEN FUN
