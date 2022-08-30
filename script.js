const container=document.querySelector('#grid');
for(let i=0;i<16;i++){
  let div=document.createElement('div');
  div.setAttribute('class','square');
  grid.appendChild(div);
}
const divs=document.querySelectorAll('.square');
divs.forEach((square)=>{square.addEventListener('mouseover',()=>{changeColor(square)})});
function changeColor(square){
  square.classList.add('active');
}


const button=document.querySelector('#button');
let squares=0;
button.addEventListener('click',()=>{getNumberOfSquares()});
function getNumberOfSquares(){ squares=prompt('how many squares?',)
if (squares>100){getNumberOfSquares()}};





// const container=document.querySelector('#container');
// let div=document.createElement('div');
// div.setAttribute('class','pixel');
// container.appendChild(div);
// div.addEventListener('mouseover',()=>{div.classList.toggle('active')})