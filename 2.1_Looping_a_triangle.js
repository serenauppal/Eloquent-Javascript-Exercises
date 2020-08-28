//https://eloquentjavascript.net/code/

//exercise 2.1  LOOPING A TRIANGLE

for (let i = '#'; i.length<=7; i+='#'){
    console.log(i)};


//exercise 2.2  FIZZBUZZ

for (let i=1; i<=100; i++){
    if ((i%3==0)&&(i%5==0)){
        console.log('FizzBuzz')
    }
    else if (i%3==0){
        console.log('Fizz')
    }
    else if (i%5==0){
        console.log('Buzz')
    }
    else {console.log(i)}
}

//exercise 2.3  CHESSBOARD
let chessboard = "";
let size=8;
let i=' '
let x='#'

console.log(chessboard.indexOf())

for (chessboard;chessboard.length>size;chessboard+=i){
    console.log(chessboard)
}

if (chessboard.length < 8){
    chessboard +=i
} 

//2 loops, 1 inside the other
