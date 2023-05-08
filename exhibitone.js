let frame1, frame2, frame3, frame4, button, placard;

let Frame1, Frame2, Frame3, Frame4, Frame5, Frame6, Frame7;

// let Answer1;

let colorInput = document.getElementById('color-input');
let c;

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(6000, windowHeight);
    cnv.parent('myArtwork1');


    
    

    frame1 = createImg("images/frame1.png");
    frame1.position(600, 60);
    frame1.size(420,600);
    frame1.id('red')
    Frame1 = document.getElementById('red');
    colorInput.appendChild(Frame1);
    frame1.mousePressed(upclose1);

    frame2 = createImg("images/frame2.png");
    frame2.position(1500, 60);
    frame2.size(514,600);
    frame2.id('planet')
    Frame2 = document.getElementById('planet');
    colorInput.appendChild(Frame1);
    frame2.mousePressed(upclose2);

    frame3 = createImg("images/frame3.png");
    frame3.position(2500, 60);
    frame3.size(904,599);
    frame3.id('clock')
    Frame3 = document.getElementById('clock');
    colorInput.appendChild(Frame1);
    frame3.mousePressed(upclose3);

    frame4 = createImg("images/frame4.png");
    frame4.position(4000, 60);
    frame4.size(480,600);
    frame4.id('clock')
    Frame4 = document.getElementById('clock');
    colorInput.appendChild(Frame1);
    frame4.mousePressed(upclose4);

    frame5 = createImg("images/frame5.png");
    frame5.position(5000, 60);
    frame5.size(423,595);
    frame5.id('sam')
    Frame5 = document.getElementById('sam');
    colorInput.appendChild(Frame1);
    frame5.mousePressed(upclose5);

    placard = createImg("images/placard.png");
    placard.position(90, 300);
    placard.size(200,160);
    placard.id('placard')
    Frame6 = document.getElementById('placard');
    colorInput.appendChild(Frame1);
    placard.mousePressed(home);

    placard2 = createImg("images/placard2.png");
    placard2.position(68, 200);
    placard2.size(245,40);
    placard2.id('placard2')
    Frame7 = document.getElementById('placard2');
    colorInput.appendChild(Frame1);
    placard2.mousePressed(home);

    let button = createButton("back to entrance");
    button.id('yes');
    yes = document.getElementById('yes');
    colorInput.appendChild(yes);
    button.mousePressed(home);
    button.style('font-size', '30px');
    button.style('background-color', '#8A9A5B');
    button.style('color', '#FFFFFF')
    button.style('font-family', 'Helvetica')
    button.style('border-style', 'none')
    button.style('margin', '20px 0px')
    button.position(5900, 600);

}

function draw() {
}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}

function upclose1(){
    window.location.replace("upclose1.html")
  }

function upclose2(){
    window.location.replace("upclose2.html")
  }

function upclose3(){
    window.location.replace("upclose3.html")
  }

function upclose4(){
    window.location.replace("upclose4.html")
  }
  
function upclose5(){
    window.location.replace("upclose5.html")
  }

  function home(){
    window.location.replace("index.html")
  }

function home(){
  window.location.replace("index.html")
}