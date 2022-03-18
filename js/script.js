var navber = document.getElementById("navber")
var back_to_top = document.querySelector(".back_to_top")
  
  window.addEventListener("scroll",function(){

    navber.classList.toggle("sticky",window.scrollY > 200)
    navber.classList.toggle("sticky-on",window.scrollY >250)
    back_to_top.classList.toggle("bTot",window.scrollY > 150)

})