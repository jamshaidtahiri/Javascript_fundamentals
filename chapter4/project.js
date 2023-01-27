let input = prompt("Choose your input: \n Press 0 For Rock\n Press 1 for Paper\n Press 2 for Scissor ");
input = parseInt(input);


let randNumber = Math.floor(Math.random()*3);

const Arr = ["Rock","Paper","Scissor"];

if ((Arr[input]=="Rock" && Arr[randNumber]=="Scissor") || (Arr[input]=="Paper" && Arr[randNumber]=="Rock") || (Arr[input]=="Scissor" && Arr[randNumber]=="Paper")){
    console.log("You win");
}
else if(Arr[input]!=Arr[randNumber] && input<=2 && input>=0){
    console.log("You lose");
}
else if(Arr[input]==Arr[randNumber]){
    console.log("It's tie . Try Agin");
}
else{
    console.log("Incorrect Input");
}

