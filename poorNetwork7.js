function isPalindromeNumber(number) {
let mainnumber=number
    let reversed = 0;
    let originalNumber = number;

    if (number < 0) {
        number = number * -1;
    }

    for (; number > 0; number = Math.floor(number / 10)) {

        let remainder = number % 10;

        reversed = reversed * 10 + remainder;
    }
	if (mainnumber=reverse){
	return "true"
	}
}
console.log(isPalindromeNumber(121));
