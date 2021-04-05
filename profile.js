 var profile_button = document.querySelector(".profile");  

var zak_modal = document.querySelector(".zakmodal");

var closeX = document.querySelector(".closeX"); 
//var closebtn = document.querySelector(".closebtn"); 

profile_button .addEventListener("click", function() { 
  zak_modal.classList.add("active");

})

////////////////////////// 
closeX.addEventListener("click", function() { 
  zak_modal.classList.remove("active");

}) 


