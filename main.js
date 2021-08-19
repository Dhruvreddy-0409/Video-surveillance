video="";

function preload() {
    video = createVideo("video.mp4");
    video.hide();
}

function setup() {
    canvas = createCanvas(500, 380)
    canvas.center()
}

function draw() {
    image(video, 0, 0, 480, 300);
}

function start() {
    objectdetector = ml5.objectDetector('cocossd', ModelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function ModelLoaded() {
    console.log("Model Loaded!")
    status = true;
    video.loop();
    video.speed(4);
    video.volume(0);
}