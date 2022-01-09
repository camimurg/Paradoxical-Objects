var slideIndex = 1;

if(window.location.hash){
 var hash = window.location.hash.substring(1);
 modalOpen(hash);
}

function modalOpen(id){
 var modal = document.getElementById(id);
 modal.classList.add("visible")

var images = modal.querySelectorAll(".artwork img");

 if(images.length > 1){
  var slides = modal.getElementsByClassName("slides"); 
  showSlides(slideIndex, slides);
  
  var prev = modal.querySelector(".prev");
  prev.addEventListener("click", function(event){
   plusSlides(-1, slides);
  });

  var next = modal.querySelector(".next");
  next.addEventListener("click", function(event){
   plusSlides(1, slides);
  });
 }
 
 window.onclick = function(event){
  if(event.target == modal){
   modal.classList.remove("visible")
   noHash();
  }
 }
}

function modalClose(id){
 var modal = document.getElementById(id);
 modal.classList.remove("visible")
 noHash();
}

function plusSlides(n, a){
 showSlides(slideIndex += n, a);
}

function showSlides(n, a){
 var i;
 if (n > a.length){
  slideIndex = 1
 }   
 if(n < 1){
  slideIndex = a.length = b.length;
 }
 for(i = 0; i < a.length; i++){
  a[i].style.display = "none";  
 }
 a[slideIndex-1].style.display= "block"; 
}

function noHash(){
 var noHashURL = window.location.href.replace(/#.*$/, '');
 window.history.replaceState('', document.title, noHashURL)  
}

window.onscroll = function(){ showBtn() };
function showBtn(){
 if(document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight){
  document.getElementById("top").style.display = "block";
 }else{
  document.getElementById("top").style.display = "none";
 }
}

function goTop(){
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
}
