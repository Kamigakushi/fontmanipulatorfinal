difference=0;
rightWristX = 0;
leftWristX = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + difference + "px";
    background('#baf5f5');
    textSize(difference);
    fill('#0af09b');
    text('Ghilbi',50,400);
}
function modelLoaded()
{
    console.log('PoseNet is Initialized!');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWrist = " + leftWristX + "rightWristX = "+rightWristX + "difference =" + difference);
    }
}