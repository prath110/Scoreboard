let homecount = 0

let guestcount = 0

let homeScore = document.getElementById("home-score")

let guestScore = document.getElementById("guest-score")

function add1home() {
    homeScore.textContent = homecount += 1
}

function add2home() {
    homeScore.textContent = homecount += 2
}

function add3home() {
    homeScore.textContent = homecount += 3
}

function add1guest() {
    guestScore.textContent = guestcount += 1
}

function add2guest() {
    guestScore.textContent = guestcount += 2
}

function add3guest() {
    guestScore.textContent = guestcount += 3
}