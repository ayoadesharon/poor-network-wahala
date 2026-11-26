
function fizzBuzz(){
for(let number=1;number<=15;number++){
if ( number %3==0 && number%5==0){
console.log("fizzBuzz");}
else if (number %3==0){
console.log("fizz");
}
else if (number%5==0){
console.log ("Buzz");
}
else{
console.log(number);
}
}
}
fizzBuzz()

