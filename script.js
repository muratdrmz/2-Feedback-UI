const ratingEls=document.querySelectorAll('.rating');
const btnEl=document.getElementById('btn');
const containerEl=document.getElementById('container');

let selectedRaiting='';

ratingEls.forEach((ratingEl)=>{
 ratingEl.addEventListener('click',function(e){
  // console.log(e.target.innerText || e.target.parentNode.innerText);
  removeActive();
  e.target.classList.add('active');
  e.target.parentNode.classList.add('active')

  selectedRaiting=e.target.innerText || e.target.parentNode.innerText;

 });

});

btnEl.addEventListener('click',()=>{
 if(selectedRaiting!==''){
  containerEl.innerHTML=`
  <strong>Thank you!</strong>
  <br>
  <br>
  <strong>Feedback:${selectedRaiting}</strong>
  <p>We'll use your feedback to improve our customer support.</p>
  `
 }
});

function removeActive (){
 ratingEls.forEach((ratingEl)=>{
   ratingEl.classList.remove('active')
 }); 
}; 