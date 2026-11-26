function reverseInteger(number) {

    let reversed = 0;
    let originalNumber = number;

    if (number < 0) {
        number = number * -1;
    }

    for (; number > 0; number = Math.floor(number / 10)) {

        let remainder = number % 10;

        reversed = reversed * 10 + remainder;
    }

    if (originalNumber < 0) {
        reversed = reversed * -1;
    }

    return reversed;
}

console.log(reverseInteger(-123));
