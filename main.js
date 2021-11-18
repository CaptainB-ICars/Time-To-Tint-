function preload()
{

}

function setup()
{
canvas=createCanvas(400,365)
canvas.position(450,200)

video=createCapture(VIDEO)
video.hide()

tint_color=""
}

function draw()
{
image(video,0,0,400,365)
tint(tint_color)
}

function take_snapshot()
{
tint_color=document.getElementById("filter_color").value
}

function download_snapshot()
{
save("Filtered Image.png")
}






