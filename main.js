alarm = "";
status = "";
objects =[];

function preload() {
    alarm = loadsound('alarm.mp3');
}

function setup() {

    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Object Detecting";
}

function modelLoaded() {
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(video,gotResults);
}

function gotResults(error,results) {
    if(error){
        console.error(error);
    }else {
        console.log(results);
        objects = results
    }
}

if (status=true) {

    for (let i = 0; i < objects.length; i++) {

    fill("#fffff");




    text(objects[i].label +" "+ percentage +"%",objects[i].x + 10,objects[i].y + 10)  
    noFill();
    stroke(r, g, b);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)

    if (objects[i].label = "person") {
        document.getElementById("baby_status").innerHTML = "baby Detected"; 
    } else {
        alarm.play()
    }


    document.getElementById("status").innerHTML = "Object Detected";
    }
}