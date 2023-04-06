let Passwords01 = document. getElementById("passwords")
let Password02 = document. getElementById("passwords02")
let passwordsBtn = document. getElementById("passwords-btn")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",",
"|",":",";","<",">",".","?","/"];


passwordsBtn.addEventListener("click", function(){
    Passwords01.textContent = ""
    for (let i = 0; i < 15; i++) {
        Passwords01.textContent += characters[Math.floor(Math.random()*characters.length)]
    }
    Password02.textContent = ""
    for (let i = 0; i < 15; i++) {
        Password02.textContent += characters[Math.floor(Math.random()*characters.length)]
    }
})