let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let countHome = 0
let countGuest = 0

function add1home(){
    countHome += 1
    scoreHome.textContent = countHome
}

function add2home(){
    countHome += 2
    scoreHome.textContent = countHome
}

function add3home(){
    countHome += 3
    scoreHome.textContent = countHome
}

function add1guest(){
    countGuest += 1
    scoreGuest.textContent = countGuest
}

function add2guest(){
    countGuest += 2
    scoreGuest.textContent = countGuest
}

function add3guest(){
    countGuest += 3
    scoreGuest.textContent = countGuest
}