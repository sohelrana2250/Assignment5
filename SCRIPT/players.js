
const playerNameList = [];

function getElementByPlayerName(playerID) {
    const playerField = document.getElementById(playerID);
    const playerName = playerField.innerText;
    return playerName;

}


function getElementByPlayerList(playerName, disableButtonID) {


    playerNameList.push(playerName);
    const button = document.querySelector(disableButtonID);
    if (playerNameList.length <= 5) {

        const playerList = document.getElementById('all-players');
        const createList = document.createElement('li');
        createList.innerText = playerName;
        playerList.appendChild(createList);
        button.disabled = true;


    }
    else {
        alert('maximun 5 playes included');
        button.disabled = true;

    }

}




document.getElementById('btn-Araújo').addEventListener('click', function () {

    //players Name
    const playerOne = getElementByPlayerName('player-one');
    //Player List Calculation and disable button
    getElementByPlayerList(playerOne, '#btn-Araújo')





})

document.getElementById('btn-Lewandowski').addEventListener('click', function () {

    //players Name
    const playerTwo = getElementByPlayerName('player-two');

    //Player List Calculation and disable button
    getElementByPlayerList(playerTwo, '#btn-Lewandowski')



})



document.getElementById('btn-Gavira').addEventListener('click', function () {

    //players Name
    const playerThree = getElementByPlayerName('player-three');
    //Player List Calculation and disable button
    getElementByPlayerList(playerThree, '#btn-Gavira');


})


document.getElementById('btn-depay').addEventListener('click', function () {
    //players Name
    const playerFour = getElementByPlayerName('player-four');
    //Player List Calculation and disable button
    getElementByPlayerList(playerFour, '#btn-depay')


})




document.getElementById('btn-Pedro').addEventListener('click', function () {

    //players Name
    const playerFive = getElementByPlayerName('player-five');
    //Player List Calculation and disable button
    getElementByPlayerList(playerFive, '#btn-Pedro')



})

document.getElementById('btn-messi').addEventListener('click', function () {

    //players Name
    const playerSix = getElementByPlayerName('player-six');

    //Player List Calculation and disable button

    getElementByPlayerList(playerSix, '#btn-messi')




})


/* ---  -------player cost, coach const,and manager cost Calculation */

function inputFieldGetElementById(inputID) {
    const inputField = document.getElementById(inputID);
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString);
    inputField.value = ""

    if (inputFieldNumber < 0) {
        alert('Negative Number does not Accept')
    }
    else {
        return inputFieldNumber;

    }


}
function displayInputField(displayID, inputFieldNumber) {
    const displayField = document.getElementById(displayID);
    displayField.innerText = inputFieldNumber;

}



document.getElementById('btn-Calculate').addEventListener('click', function () {

    //players const
    const playerCost = inputFieldGetElementById('player-input');

    if (playerNameList.length <= 5) {
        const totalPlayersCost = playerCost * (playerNameList.length);

        displayInputField('Player-Expense', totalPlayersCost);

    }
    else if (playerNameList.length <= 6) {
        const totalPlayersCost = playerCost * (playerNameList.length - 1);
        displayInputField('Player-Expense', totalPlayersCost);
    }
    else {
        alert('No Player Selected')
    }



})
document.getElementById('btn-CalculateTotal').addEventListener('click', function () {
    //Manager Cost

    const managerCost = inputFieldGetElementById('manager-input');
    //coach const
    const coachCost = inputFieldGetElementById('btn-Coach');
    const playerExpense = document.getElementById('Player-Expense');
    const playerExpenseString = playerExpense.innerText;
    const playerExpenseNumber = parseFloat(playerExpenseString);

    const total = playerExpenseNumber + managerCost + coachCost;
    displayInputField('total-cost', total);


})