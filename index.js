const randNum = () => Math.floor(Math.random() * 255);

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

const rbg2hex = () => {
    const rbgValue = randNum();
    const digit = rbgValue / 16;
    const remainder = digit - Math.floor(digit);
    const multiplyedRemaider = remainder * 16;
    const floorDigit = Math.floor(digit);

    if (floorDigit > 9 && multiplyedRemaider > 9) {
        const firstChar = hexNum2Letter(Math.floor(digit));
        const secondChar = hexNum2Letter(Math.floor(multiplyedRemaider));
        return firstChar.concat(secondChar);
    } else if (floorDigit > 9 && multiplyedRemaider <= 9) {
        const firstChar = hexNum2Letter(Math.floor(digit));
        return firstChar.concat(multiplyedRemaider)
    } else if (floorDigit <= 9 && multiplyedRemaider > 9) {
        const secondChar = hexNum2Letter(Math.floor(multiplyedRemaider));
        let stringDigit = floorDigit.toString();
        return stringDigit.concat(secondChar);
    } else {
        let stringDigit = floorDigit.toString();
        let stringRemainde = multiplyedRemaider.toString();
        return stringDigit.concat(stringRemainde);
    }
}

const hex = () => {
    const red = rbg2hex();
    const blue = rbg2hex();
    const green = rbg2hex();

    return `#${red}${green}${blue}`;
}

const changeColor = () => {
    let color = hex();
    const elem = document.getElementById('body');
    elem.style.backgroundColor = color;

    const p = document.getElementById('para');
    p.innerHTML = color;
}