var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomimage1 ="./inverted-dice-"+ randomnumber1 + ".png" ;

// Math.random():generate random 
// Math.floor(): gives round off floor(small value)

var dice1 = document.querySelectorAll("img")[0] ;//selecting first image tag

dice1.setAttribute("src", randomimage1)



///for second dice

var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomimage2 ="./inverted-dice-"+ randomnumber2 + ".png" ;

var dice2 = document.querySelectorAll("img")[1] ;//selecting second image tag

dice2.setAttribute("src", randomimage2)

/// for showing winner

if(randomnumber1>randomnumber2){
    document.querySelector("h1").textContent="Player 1 wins "
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").textContent="Player 2 wins"
}
else{
    document.querySelector("h1").textContent="Draw"
}