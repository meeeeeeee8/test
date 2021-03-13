
    canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;

background_image = nasa_mars_images_array[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgTag.src = background_image;   // load image

    rover_imgTag = new Image(); //defining a variable with a new image
    rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
    rover_imgTag.src = rover_image;   // load image
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", mykeydown)
function mykeydown(e)
{
    keypressed=e.keycode;
    console.log(keypressed);
    if(keypressed=='38')
    {
        up();
            console.log("up")
    }
    if(keypressed=='40')
    {
        down();
            console.log("down")
    }
    if(keypressed=='37')
    {
        left();
            console.log("left")
    }
    if(keypressed=='39')
    {
        right();
            console.log("right")
    }
}

function up()
{
    if(rover_y >=0)
    {
        rover_y-=10;
        console.log("when up arrow is pressed = " + rover_x + "-"rover_y);
        uploadbackround();
        uploadwater();
        uploadrover();
    }
}
function down()
{
    if(rover_y >=500)
    {
        rover_y-=10;
        console.log("when up arrow is pressed = " + rover_x + "-"rover_y);
        uploadbackround();
        uploadwater();
        uploadrover();
    }
    function left()
    {
        if(rover_y >=0)
        {
            rover_y-=10;
            console.log("when up arrow is pressed = " + rover_x + "-"rover_y);
            uploadbackround();
            uploadwater();
            uploadrover();
        }
        function right()
{
    if(rover_y >=700)
    {
        rover_y-=10;
        console.log("when up arrow is pressed = " + rover_x + "-"rover_y);
        uploadbackround();
        uploadwater();
        uploadrover();
    }