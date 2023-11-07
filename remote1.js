imgremote1="";
status="";
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("statusremote1").innerHTML = "Status : Detecting Objects";
}
function preload(){
    imgremote1=loadImage('big remote.jpg')
}
function draw()
{
    image(imgremote1, 0, 0, 640, 420);
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