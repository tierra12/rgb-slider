var rickyaSlider;
var tierraSlider;
var loveSlider;
function setup(){
    createCanvas(600,400);
    background(244, 66, 155);

   //createSiler(min, max, default)
    rickyaSlider = createSlider(0,255,0);
    //.position(x,y)
     rickyaSlider.position(20,20);
     tierraSlider = createSlider (0,255,0);
     tierraSlider.position(20,50);
     
     loveSlider = createSlider(0,255,0);
     loveSlider.position(20,80);
}

function draw(){
    redValue = rickyaSlider.value();
    tValue = tierraSlider.value();
    lValue = loveSlider.value();
    
    background(redValue,tValue ,lValue);
}