let fan = document.querySelector(".fan")
let on= document.getElementById("on")
let off= document.getElementById("off")
let normal= document.getElementById("normal")
let medium= document.getElementById("medium")
let fast= document.getElementById("fast")

on.addEventListener("click",()=>{
    fan.style.animationName="spin"
    fan.style.animationDuration="7s"
})

off.addEventListener("click",()=>{
    fan.style.animationName=""
})

normal.addEventListener("click",()=>{
    fan.style.animationDuration="3s"
})

medium.addEventListener("click",()=>{
    fan.style.animationDuration="1s"
})

fast.addEventListener("click",()=>{
    fan.style.animationDuration="0.50s"
})