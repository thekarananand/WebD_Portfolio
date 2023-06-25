const DISPLAY = document.getElementById('display')

let num1 = 0
let num2 = 0
let Sel  = 0
let opr  = ""

function num(x) {
    if (num1 === "Error!") {
        return
    }
    if (DISPLAY.innerText === "Hello, World!"){
        DISPLAY.innerText = ""
    }

    if (Sel == 1){
        num2 = num2 * 10 + x
    }
    else {
        num1 = num1 * 10 + x
    }


    DISPLAY.innerHTML += x
}

function add() {
    if (num1 === "Error!") {
        return
    }
    if (DISPLAY.innerText === "Hello, World!"){
        DISPLAY.innerText = ""
    }

    if (Sel == 1){
        equal()
    }
    else {
        Sel = 1
    }

    opr = "+"

    DISPLAY.innerHTML += "+"
}

function sub() {
    if (num1 === "Error!") {
        return
    }
    if (DISPLAY.innerText === "Hello, World!"){
        DISPLAY.innerText = ""
    }

    if (Sel == 1){
        equal()
    }
    else {
        Sel = 1
    }

    opr = "−"

    DISPLAY.innerHTML += "−"
}

function mul() {
    if (num1 === "Error!") {
        return
    }
    if (DISPLAY.innerText === "Hello, World!"){
        DISPLAY.innerText = ""
    }

    if (Sel == 1){
        equal()
    }
    else {
        Sel = 1
    }

    opr = "×"

    DISPLAY.innerHTML += "×"
}

function div() {
    if (num1 === "Error!") {
        return
    }
    if (DISPLAY.innerText === "Hello, World!"){
        DISPLAY.innerText = ""
    }

    if (Sel == 1){
        equal()
    }
    else {
        Sel = 1
    }

    opr = "÷"

    DISPLAY.innerHTML += "÷"
}

function AC() {
    DISPLAY.innerHTML = ""
    Sel = 0
    num1 = 0
    num2 = 0
}

function equal() {

    if (opr === "+") {
        num1 += num2
    }
    else if (opr === "−") {
        num1 -= num2
    }
    else if (opr === "×") {
        num1 *= num2
    }
    else if (opr === "÷") {
        if (num2 === 0) {
            num1 = "Error!"
        }
        else{
            num1 /= num2
        }
    }
    else{
        return
    }

    DISPLAY.innerHTML = num1
    num2 = 0
}

function equalKey(){
    equal()
    Sel = 0
}