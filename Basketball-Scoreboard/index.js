let h4HomeBtn = document.getElementById("h4-home-number")
let h4GuestBtn = document.getElementById("h4-guest-number")

let count = 0



function homeIncrement1() {
    count += 1
    h4HomeBtn.textContent = count
}

function homeIncrement2() {
    count += 2 
    h4HomeBtn.textContent = count
}

function homeIncrement3() {
    count += 3
    h4HomeBtn.textContent = count
}

function guestIncrement1() {
    count += 1
    h4GuestBtn.textContent = count
}

function guestIncrement2() {
    count += 2 
    h4GuestBtn.textContent = count
}

function guestIncrement3() {
    count += 3
    h4GuestBtn.textContent = count
}

function homeReset() {
    count = 0
    h4HomeBtn.textContent = count
}

function guestReset() {
    count = 0
    h4GuestBtn.textContent = count
}