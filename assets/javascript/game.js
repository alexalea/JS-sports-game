//team one//

let shotsOne = document.querySelector("#teamone-numshots")
let goalsOne = document.querySelector("#teamone-numgoals")
let teamOneShootButton = document.querySelector("#teamone-shoot-button")

//team two//

let shotsTwo = document.querySelector("#teamtwo-numshots")
let goalsTwo = document.querySelector("#teamtwo-numgoals")
let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button")


//Reset Function//

let resetButton = document.querySelector("#reset-button")
let resetNumber = document.querySelector("#num-resets")


//team one shots and goals//

teamOneShootButton.addEventListener("click", function() {

    console.log("teamOneShootButton button clicked");
    let teamOneNumShots = Number(shotsOne.innerHTML) + 1;
    shotsOne.innerHTML = teamOneNumShots

    teamOneNumGoals = Number (goalsOne.innerHTML) + 1;

    if (Math.random()>= 0.5 ) {
        goalsOne.innerHTML = teamOneNumGoals;
    }

    else {

    }
})

//team two shots and goals//

teamTwoShootButton.addEventListener("click", function() {

    console.log("teamTwoShootButton button clicked");
    let teamTwoNumShots = Number(shotsTwo.innerHTML) + 1;
    shotsTwo.innerHTML = teamTwoNumShots

    teamTwoNumGoals = Number(goalsTwo.innerHTML) + 1;

    if (Math.random()>= 0.5 ) {
        goalsTwo.innerHTML = teamTwoNumGoals;
    }

    else {

    }
})


//Reset//

resetButton.addEventListener("click", function() {

let resetFunction = Number(resetNumber.innerHTML) + 1;
shotsOne.innerHTML = 0;
shotsTwo.innerHTML = 0;
goalsOne.innerHTML = 0;
goalsTwo.innerHTML = 0;

})
