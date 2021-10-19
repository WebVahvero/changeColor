// Generating random number
const randNum = () => Math.floor(Math.random() * 255);

// Converting two digit values to character
const hexNum2Letter = num => {
    switch (num) {
        case 10:
            return 'A';
        case 11:
            return 'B';
        case 12:
            return 'C';
        case 13:
            return 'D';
        case 14:
            return 'E';
        case 15:
            return 'F';
        default:
            return 'Error ';
    }
}

// Function that converts rbg values to numeric hex values
const rbg2hex = () => {
    const digit = randNum() / 16;
    const floorDigit = Math.floor(digit);
    const remainder = (digit - floorDigit) * 16;

    //´Checking if the value is bigger than nine, and if it is then calling the function that converts value to character
    if (floorDigit > 9 && remainder > 9) {
        const firstChar = hexNum2Letter(Math.floor(digit));
        const secondChar = hexNum2Letter(Math.floor(remainder));
        return firstChar.concat(secondChar);
    } else if (floorDigit > 9 && remainder <= 9) {
        const firstChar = hexNum2Letter(Math.floor(digit));
        return firstChar.concat(remainder)
    } else if (floorDigit <= 9 && remainder > 9) {
        const secondChar = hexNum2Letter(Math.floor(remainder));
        let stringDigit = floorDigit.toString();
        return stringDigit.concat(secondChar);
    } else {
        let stringDigit = floorDigit.toString();
        let stringRemainde = remainder.toString();
        return stringDigit.concat(stringRemainde);
    }
}

// Concatting red, blue and green values and returning it as a string
const hex = () => {
    const red = rbg2hex();
    const blue = rbg2hex();
    const green = rbg2hex();
    return `#${red}${green}${blue}`;
}

// DOM function that changes the color and sends hex to button
const changeColor = () => {
    let color = hex();
    const elem = document.getElementById('body');
    elem.style.backgroundColor = color;

    const p = document.getElementById('para');
    p.innerHTML = color;
}