let frame1, frame2, frame3, frame4, button;

let Frame1, Frame2, Frame3, Frame4, Frame5;

// let Answer1;

let colorInput = document.getElementById('color-input');
let c;

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('myArtwork1');

    cnv.mousePressed(upclose1);

}

function upclose1(){
    window.location.replace("exhibitone.html")
  }