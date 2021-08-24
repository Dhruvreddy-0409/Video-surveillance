video="";
status = "";
objects = [];

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
        if(status !="") {
            objectdetector.detect(video, gotResult);
            for (i = 0; i < objects.length; i++) {
                document.getElementById("status").innerHTML = "Status : Objects Detected";
                document.getElementById("number_of_objects").innerHTML = "Number of objects =" + objects.length;

                fill("#002352");
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15)
                noFill();
                stroke("#002352");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
        }
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

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}