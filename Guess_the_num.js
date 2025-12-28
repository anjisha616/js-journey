
let y= Math.floor(Math.random()*100)+1;  ///TO GENERATE RN NUM BY COMPUTER 
console.log(y);
let guess =1;
document.getElementById("submitguess").onclick = function(){
    let x= document.getElementById("guessField").value;
    if ( x == y){
        alert(`Congratulations!! you guessed it right`);
    } else if ( x > y){
        guess++;
        alert(`Try a smaller num`);
    }else{
        guess++;
        alert(`Try a larger num`);
    }
}
