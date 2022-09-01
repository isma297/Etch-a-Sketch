const grid=document.querySelector('#grid');
const button=document.querySelector('#button');

button.addEventListener('click',()=>{ getNumberOfSquares()  });

function getNumberOfSquares(){
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  };
  let squares=prompt('how many squares?',)
  if (squares>100){getNumberOfSquares()};
  
  drawGrid(squares);
};

function drawGrid(squares){
  grid.style.gridTemplateColumns=`repeat(${squares},1fr)`;
  for(let i=0;i<squares**2;i++){
    let div=document.createElement('div');
    div.setAttribute('class','square');
    // div.style.width=getSquareSize(squares); unnecessary(see comments)
    grid.appendChild(div);
  }

  const divs=document.querySelectorAll('.square');
  divs.forEach((square)=>{square.addEventListener('mouseover',
  ()=>{changeColor(square)})});
};

function paintItBlack(square){
  // This function only works when the grid backgroundColor set to black
  // because it decreases the opacity each time the mouse is over the square. 
  // Otherwhise the idea would be the same but reducing each rgb value by 10%
  // untill it is completely black (I did not test it tho)
  let colorRgba=square.style.backgroundColor.toString();
  let colorRgb=colorRgba.substring(0,(colorRgba.length-1));
  let colorArr=[];
  colorArr=colorRgb.split(',',);
  colorArr[3]=(colorArr[3]-(0.1)+')');
  square.style.backgroundColor=colorArr;
}

function changeColor(square){
  if (square.matches('.paintedBefore')){
    paintItBlack(square)
  }
  else {const r = Math.floor(Math.random()*256);
  const g=Math.floor(Math.random()*256);
  const b=Math.floor(Math.random()*256);
  square.style.backgroundColor= `rgba(${r},${g},${b},0.99)`;
  square.classList.add('paintedBefore');
  }

};

// Unnecessary function or maybe not, but if the grid is square and a the  
// amount of row/columns is the same it is enough to have most of the cells
// in a square shape. Top and bottom row get a little stretched or cut when 
// the are many cells, not noticeable.
// Plus im not sure it is working properly.
// function getSquareSize(squares){
//   let squareSize=grid.offsetWidth/squares;
//   return squareSize;
// };
