function checkPerfectNumber(number) {

    let total = 0;

    for (let count = 1; count < number; count++) {

        if (number % count === 0) {
            total += count;
        }
    }

    if (total === number) {
        return true;
    } else {
        return false;
    }
}

const x = checkPerfectNumber(28);

console.log(x);
