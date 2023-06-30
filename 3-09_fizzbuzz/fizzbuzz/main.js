console.log('test')

function fizzbuzz(num) {
    if(num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz!';
    } else if(num % 3 === 0) { //早期Return
        return 'Fizz!';
    } else if(num % 5 === 0) {
        return 'Buzz!';
    } else {
        return num;
    }
}

// fizzbuzz(15);

let i = 1;
while(i <= 10000) {
    console.log(fizzbuzz(i))
    i += 1; //i++でも可
}