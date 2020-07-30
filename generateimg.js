squares = document.querySelectorAll(".square")

function generatearr() {

  const image = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

 const mappedImage = image.map(x => x.map( y => y * Math.round(Math.random())))

 // const symMappedimage = [mappedImage[0],mappedImage[1],mappedImage[2],mappedImage[1],mappedImage[0]]

 const symMappedimage = [
   ...mappedImage,
   ...[mappedImage[1]],
   ...[mappedImage[0]]
 ]

 return symMappedimage
}


generateBtn.addEventListener("click", function(){
  resetColors();
  colorArray = generatearr()
	color = randomColor();
	for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (colorArray[i][j] == 1) {
        index = ((j*5) + i)
        squares[index].style.background = color;

      }
    }


		}

})


randomColor = () => {
	//red
	var red = Math.floor(Math.random()* 256);
	//green
	var green = Math.floor(Math.random()* 256);
	//blue
	var blue = Math.floor(Math.random()* 256);

	return("rgb("+red+", "+green+", "+blue+")");

}

resetColors = () => {

	//loop through all squares
	for (var i = 0; i < 25; i++){
		//change color
		squares[i].style.backgroundColor = "#F8F7F7";

	}

}
