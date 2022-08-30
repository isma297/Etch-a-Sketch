const grid=document.querySelector('#grid');
const button=document.querySelector('#button');

button.addEventListener('click',()=>{getNumberOfSquares()});


function getSquareSize(squares){
  let squareSize=grid.offsetWidth/squares;
  return squareSize;
}

function drawGrid(squares){
  for(let i=0;i<squares**2;i++){
    let div=document.createElement('div');
    div.setAttribute('class','square');
    div.style.width=getSquareSize(squares);
    grid.appendChild(div);
  }
  grid.style.gridTemplateColumns=`repeat(${squares},1fr)`;

  const divs=document.querySelectorAll('.square');
  divs.forEach((square)=>{square.addEventListener('mouseover',
  ()=>{changeColor(square)})});
}

function changeColor(square){
  square.classList.add('active');
}

function getNumberOfSquares(){
  let squares=prompt('how many squares?',)
  if (squares>100){getNumberOfSquares()};
  drawGrid(squares);
};
