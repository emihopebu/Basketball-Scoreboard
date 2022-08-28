let homeScoreEl = document.getElementById("home-points")
let guestScoreEl = document.getElementById("guest-points")

let homeScore = 0
let guestScore = 0

function onepointHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function twopointsHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function threepointsHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function onepointGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function twopointsGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function threepointsGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
function resetting(){
    guestScore=0
    
    homeScore =0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}
