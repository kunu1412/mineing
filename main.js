
canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player= "";
var block_image_object= "";

function player_update()
{fabric.Image.fromURL("player.png",function(img){
        player=img
        player.scaleToWidth(100)
        player.scaleToHeight(150)


        player.set({
            top:player_y,left:player_x
        })
        canvas.add(player)
	})
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
		top:player_y,
		left:player_x
	});
	canvas.add(block_image_object);
 
	});

}
window.addEventListener("keydown",down)
function down(e){
	keypress=e.keyCode
  if(keypress=='80' && e.shiftKey==true){
	block_image_width=block_image_width+10
	block_image_height=block_image_height+10
	document.getElementById("current_width").innerHTML=block_image_width
	document.getElementById("current_height").innerHTML=block_image_height
  }
  if(keypress=='77' && e.shiftKey==true){
	block_image_width=block_image_width-10
	block_image_height=block_image_height-10
	document.getElementById("current_width").innerHTML=block_image_width
	document.getElementById("current_height").innerHTML=block_image_height

  }
if(keypress=='37'){
	left()
}
if(keypress=='38'){
	up()
}
if(keypress=='39'){
	right()
}
if(keypress=='40'){
	down()
}
if(keypress=='67'){
	new_image('cloud.jpg')
}
if(keypress=='68'){
	new_image('dark_green.png')
}
if(keypress=='71'){
	new_image('ground.png')
}
if(keypress=='76'){
	new_image('light_green.png')
}
if(keypress=='82'){
	new_image('roof.jpg')
}
if(keypress=='84'){
	new_image('trunk.jpg')
}
if(keypress=='85'){
	new_image('unique.png')
}
if(keypress=='87'){
	new_image('wall.jpg')
}
if(keypress=='89'){
	new_image('yellow_wall.png')
}
}
function up(){
	if(player_y>0){
		player_y=player_y-block_image_height
		canvas.remove(player)
		player_update()
		console.log("up")
	}

}
function down(){
	if(player_y<=600){
		player_y=player_y+block_image_height
		canvas.remove(player)
		player_update()
		console.log("down")

	}
}
function left(){
	if(player_x>0){
		player_x=player_x-block_image_width
		canvas.remove(player)
		player_update()
		console.log("left")


	}
}
function right(){
	if(player_x>=1000){
		player_x=player_x+block_image_width
		canvas.remove(player)
		player_update()
		console.log("right")

		
	}
}





