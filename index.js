const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passOneEl = document.getElementById("passone-el")
let passTwoEl = document.getElementById("passtwo-el")
let lengthBox = document.getElementById("length-box")
let passwordLength = 15;
lengthBox.textContent = passwordLength

function add(){
    passwordLength ++
    lengthBox.textContent = passwordLength
}

function subtract(){
    passwordLength --
    lengthBox.textContent = passwordLength
    if (passwordLength <= 0){
        lengthBox.textContent = ""
        passwordLength = 0
    }
}

function generatePasswords(){
    passOneEl.textContent = ""
    passTwoEl.textContent = ""
    for (let i = 0; i < passwordLength; i++){
        let passwordOne = Math.floor(Math.random() * characters.length)
        let passwordTwo = Math.floor(Math.random() * characters.length)
        passOneEl.textContent += characters[passwordOne]
        passTwoEl.textContent += characters[passwordTwo]
    }
}