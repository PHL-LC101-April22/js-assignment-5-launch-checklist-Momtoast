// Write your helper functions here!
require('isomorphic-fetch');

// const { validateInput } = require("./scriptHelper");


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === "") {
    return "Empty";
   } else if (isNaN(testInput)) {
    return "Is not a number";
   } else {
    return "Is a number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotName = document.getElementById("pilotStatus");
    let copilotName = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let faultyList = document.getElementById("faultyItems");
     if (validateInput(pilot.value) === "Is not a number" && validateInput(copilot.value) === "Is not a number" && fuelLevel.value>=10000 && cargoLevel.value<=10000) {
        launchStatus.innerHTML = "Shuttle is ready for launch.";
        launchStatus.style.color = "green";
     } else {
        if (validateInput(pilot.value) === "Empty") {
            alert("All fields are required");
        } else if (validateInput(pilot.value) === "Is a number") {
            alert("Pilot name can not be a number.");
        } else {
            pilotName.innerHTML = `${pilot.value} is ready for launch.`;
        }

        if (validateInput(copilot.value) === "Empty") {
            alert("All fields are required");
        } else if (validateInput(copilot.value) === "Is a number") {
            alert("Copilot name can not be a number.");
        } else {
            copilotName.innerHTML = `${copilot.value} is ready for launch.`;
        }

        if (validateInput(fuelLevel.value) === "Empty") {
            alert("All fields are required");
        } else if (validateInput(fuelLevel.value) === "Is not a number") {
            alert("Fuel level must be a number.");
        } else if (fuelLevel.value<10000) {
            faultyList.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch.";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
        }

        if (validateInput(cargoLevel.value) === "Empty") {
            alert("All fields are required");
        } else if (validateInput(cargoLevel.value) === "Is not a number") {
            alert("Cargo mass must be a number.");
        } else if (cargoLevel.value>10000) {
            faultyList.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass too high for launch.";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
        }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
