function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('poses',gotPoses);
    
}
function draw(){
    background('#C0C0C0');
}
function modelLoaded(){
    console.log('POSENET is Initialized!!');
}
function gotPoses(results){
   if(results.length > 0){
       console.log(results);
   }
}