imgplate="";
status="";
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("statusplate").innerHTML = "Status : Detecting Objects";
}
function preload(){
    imgplate=loadImage('plate.jpg')
}
function draw()
{
    image(imgplate, 0, 0, 640, 420);
}
function modelLoaded()
{
    console.log("Model loaded!")
    status=true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}