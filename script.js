const container=document.querySelector('#container');
for(let i=0;i<16;i++){
  let div=document.createElement('div');
  div.setAttribute('class','pixel');
  container.appendChild(div);
}
const divs=document.querySelectorAll('div');
divs.forEach((div)=>{div.addEventListener('mouseover',()=>{changeColor(div)})});
function changeColor(div){
  div.classList.toggle('active');
}
const button=document.querySelector('#button');
let squares=0;
button.addEventListener('click',()=>{getNumberOfSquares()});
function getNumberOfSquares(){ squares=prompt('how many squares?',)
if (squares>100){getNumberOfSquares()}};

div.setAttribute('style', 'grid-template-columns: `repeat(${squares},1fr)`; background-color:black;');




// const container=document.querySelector('#container');
// let div=document.createElement('div');
// div.setAttribute('class','pixel');
// container.appendChild(div);
// div.addEventListener('mouseover',()=>{div.classList.toggle('active')})