const ball = document.querySelector('.ball');
const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const a3 = document.querySelector('.a3');
const a4 = document.querySelector('.a4');

const a1pos = 22;
const a2pos = 99;
const a3pos = 183
const a4pos = 272;
let cpos = a1pos;
let tDist = 0;

const aArray = [a1, a2, a3, a4];

//Add active class to a1 link
//a1.classList.add('active');


a1.addEventListener('mouseenter', 
res=()=>{
  tDist = a1pos - cpos;
  moveBall('a1',tDist)
    console.log('cpos: '+cpos);
  console.log('tDist: '+tDist);

});


a2.addEventListener('mouseenter', 
res=()=>{
  tDist = a2pos - cpos;
  moveBall('a2',tDist)
  console.log('cpos'+cpos);
  console.log('tdist: '+tDist);

});




a3.addEventListener('mouseenter', 
res=()=>{
  tDist = a3pos - cpos;
  moveBall('a3',tDist)
  console.log('cpos'+cpos);
  console.log('tdist: '+tDist);
});


a4.addEventListener('mouseenter', 
res=()=>{
  tDist = a4pos - cpos;
  console.log(cpos);
  moveBall('a4',tDist)
  console.log('cpos'+cpos);
  console.log('tdist: '+tDist);
});



function moveBall(ael,xpos){
  if(ael==='a1'){
  ball.style.transform = 'translateX(calc(77px * 0))';
    //`translateX(${xpos}px)`;
  cpos = a1pos;
  checkActiveClass(a1);
  }else if(ael==='a2'){
  ball.style.transform = 'translateX(calc(77px * 1))';
  //`translateX(${xpos}px)`;
  cpos = a2pos;
  checkActiveClass(a2);

  }else  if(ael==='a3'){
  ball.style.transform = 'translateX(calc(77px * 2))';

  //`translateX(${xpos}px)`;
  cpos = a3pos;
  checkActiveClass(a3);

  }else if(ael==='a4'){
  ball.style.transform = 'translateX(calc(77px * 3))';

  //`translateX(${xpos}px)`;
  cpos = a4pos;
  checkActiveClass(a4);

  }

}

function checkActiveClass(alink){
  for(let i=0;i<aArray.length;i++)
  if(alink ===aArray[i]){
    if(alink.classList.contains('active'))
     {
       
     }else{
       alink.classList.add('active');
     }
  }else{
    alink.classList.remove('active');
  }
}

