function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunc = {
    lower: getRandomLower(),
    upper: getRandomUpper(),
    number: getRandomNumber(),
    symbol: getRandomSymbol(),
};

const lowercaseBoolean = confirm("Include lowercase?");
const uppercaseBoolean = confirm("Include uppercase?");
const numberBoolean = confirm("Include numbers?");
const symbolBoolean = confirm("Include symbols?");

if (!numberBoolean && !uppercaseBoolean && !lowercaseBoolean && !symbolBoolean) {
    var userChoice = alert("Whoops. Does not match standard. Please try again.")
}


function generatePassword() {

    const passLength = parseInt(prompt("Please Select Password Length 8 - 128 characters"));

    while (passLength < 8 || passLength > 128) {
        passLength = parseInt(prompt("Password does not meet required length, 8 - 128, try again."));

        if (!passLength) {
            alert("Invalid value. Please select a value and start over.")
            return (passLength);
        }
    }


    let generatedPassword = "";

    console.log("types", types)
    const types =
    {
        "lowercaseBoolean": lowercaseBoolean,
        "uppercaseBoolean":
            uppercaseBoolean,
        "symbolBoolean":
            symbolBoolean,
        "numberBoolean":
            numberBoolean
    }
    
    const typesCount =
        numberBoolean +
        symbolBoolean +
        lowercaseBoolean +
        uppercaseBoolean;

    
   

    const typesArr = [{ lowercaseBoolean }, { uppercaseBoolean }, { numberBoolean }, { symbolBoolean }]
        .filter(
            item => Object.values(item)[0]
        );

    console.log("typesCount: ", typesArr);

    