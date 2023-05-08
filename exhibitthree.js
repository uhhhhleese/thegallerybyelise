let frame8, frame9, frame10, frame11, frame12, frame13, frame14, frame15, frame16, frame17, frame18, frame19;

let Frame1, Frame8, Frame9, Frame10, Frame11, Frame12, Frame13, Frame14, Frame15, Frame16, Frame17, Frame18, Frame19;

// let Answer1;

let colorInput = document.getElementById('color-input');
let c;

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('myArtwork1');

    frame8 = createImg("images/birthcontrol.png");
    frame8.position(0, 20);
    frame8.size(660,442);
    frame8.id('birth')
    Frame8 = document.getElementById('birth');
    colorInput.appendChild(Frame8);

    frame9 = createImg("images/clawclip.png");
    frame9.position(650, 60);
    frame9.size(388,485);
    frame9.id('clip')
    Frame9 = document.getElementById('clip');
    colorInput.appendChild(Frame9);

    frame17 = createImg("images/wallet.png");
    frame17.position(800, 270);
    frame17.size(579,485);
    frame17.id('wallet')
    Frame17 = document.getElementById('wallet');
    colorInput.appendChild(Frame17);

    frame11 = createImg("images/nailglue.png");
    frame11.position(1000, 60);
    frame11.size(274,604);
    frame11.id('glue')
    Frame11 = document.getElementById('glue');
    colorInput.appendChild(Frame11);
    

    
    

    frame10 = createImg("images/lipgloss.png");
    frame10.position(10, 400);
    frame10.size(668,371);
    frame10.id('lip')
    Frame10 = document.getElementById('lip');
    colorInput.appendChild(Frame10);
    
    frame11 = createImg("images/papperspray.png");
    frame11.position(200, 600);
    frame11.size(579,485);
    frame11.id('pepper')
    Frame11 = document.getElementById('pepper');
    colorInput.appendChild(Frame11);

    frame15 = createImg("images/tylenol.png");
    frame15.position(0, 1200);
    frame15.size(581, 207);
    frame15.id('pill')
    Frame15 = document.getElementById('pill');
    colorInput.appendChild(Frame15);

    frame12 = createImg("images/phone.png");
    frame12.position(300, 700);
    frame12.size(842, 737);
    frame12.id('phone')
    Frame12 = document.getElementById('phone');
    colorInput.appendChild(Frame12);

    frame13 = createImg("images/shout.png");
    frame13.position(47, 800);
    frame13.size(329, 364);
    frame13.id('shout')
    Frame13 = document.getElementById('shout');
    colorInput.appendChild(Frame13);

    frame14 = createImg("images/text.png");
    frame14.position(1200, 700);
    frame14.size(148, 426);
    frame14.id('text')
    Frame14 = document.getElementById('text');
    colorInput.appendChild(Frame14);

    frame18 = createImg("images/patch.png");
    frame18.position(1100, 1100);
    frame18.size(329, 355);
    frame18.id('patch')
    Frame18 = document.getElementById('patch');
    colorInput.appendChild(Frame18);

    frame16 = createImg("images/perf.png");
    frame16.position(800, 1100);
    frame16.size(426, 284);
    frame16.id('perf')
    Frame16 = document.getElementById('perf');
    colorInput.appendChild(Frame16);

   
    let button = createButton("back to entrance");
    button.id('yes');
    yes = document.getElementById('yes');
    colorInput.appendChild(yes);
    button.mousePressed(home);
    button.style('font-size', '30px');
    button.style('background-color', '#000000');
    button.style('color', '#FFFFFF')
    button.style('font-family', 'Helvetica')
    button.style('border-style', 'none')
    button.style('margin', '20px 0px')
    button.position(800, 1359);
   
    


}

function draw() {
}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}

function home(){
    window.location.replace("index.html")
  }