
let shotsOne = document.querySelector("#teamone-numshots")
let goalsOne = document.querySelector("#teamone-numgoals")

let teamOneShootButton = document.querySelector("#teamone-shoot-button")

let shotsTwo = document.querySelector("#teamtwo-numshots")
let goalsTwo = document.querySelector("#teamtwo-numgoals")

let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button")

//team one

teamOneShootButton.addEventListener("click", function() {

    console.log("teamOneShootButton button clicked");
    let teamOneNumShots = Number(shotsOne.innerHTML) + 1;
    shotsOne.innerHTML = teamOneNumShots

})


//team two

teamTwoShootButton.addEventListener("click", function() {

    console.log("teamTwoShootButton button clicked");
    let teamTwoNumShots = Number(shotsTwo.innerHTML) + 1;
    shotsTwo.innerHTML = teamTwoNumShots

})