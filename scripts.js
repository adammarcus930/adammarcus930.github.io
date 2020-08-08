const squares = document.querySelectorAll('.square');
const generateBtn = document.getElementById('generateBtn');

const generateArr = () => {
  const image = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ];

  const mappedImage = image.map((x) => x.map((y) => y * Math.round(Math.random())));

  return [
    ...mappedImage,
    mappedImage[1],
    mappedImage[0],
  ];
};

const resetColors = () => {
  for (let i = 0; i < 25; i += 1) {
    squares[i].style.backgroundColor = '#F8F7F7';
  }
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

generateBtn.addEventListener('click', () => {
  resetColors();
  const colorArray = generateArr();
  const color = randomColor();
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      if (colorArray[i][j] === 1) {
        const index = j * 5 + i;
        squares[index].style.background = color;
      }
    }
  }
});
