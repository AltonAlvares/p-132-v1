imgremote2="";
status="";
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("statusremote2").innerHTML = "Status : Detecting Objects";
}
function preload(){
    imgremote2=loadImage('small remote.jpg')
}
function draw()
{
    image(imgremote2, 0, 0, 640, 420);
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