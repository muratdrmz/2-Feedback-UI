const ratingEls=document.querySelectorAll('.rating');

ratingEls.forEach((ratingEl)=>{
 ratingEl.addEventListener('click',function(e){
  // console.log(e.target.innerText || e.target.parentNode.innerText);
  removeActive();
  e.target.classList.add('active');
  e.target.parentNode.classList.add('active')

 });

});

function removeActive (){
 ratingEls.forEach((ratingEl)=>{
   ratingEl.classList.remove('active')
 }); 
}; 