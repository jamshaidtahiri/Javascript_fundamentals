let input = prompt("Choose your input: \n Press 0 For Rock\n Press 1 for Paper\n Press 2 for Scissor ");
input = parseInt(input);
let randNumber = Math.floor(Math.random()*3);

const Arr = ["Rock","Paper","Scissor"];

switch (Arr[input]){
case "Rock":
    if (Arr[randNumber] == "Scissor"){
        console.log("You win");
    }
    else if(Arr[randNumber] == "Rock"){
        console.log("It's tie");
    }
    else{
        console.log("You lose")
    }
    
case "Paper":
    if (Arr[randNumber] == "Rock"){
        console.log("You win");
    }
    else if(Arr[randNumber] == "Paper"){
        console.log("It's tie");
    }
    else{
        console.log("You lose")
    }
case "Scissor":
    if (Arr[randNumber] == "Paper"){
        console.log("You win");
    }
    else if(Arr[randNumber] == "Scissor"){
        console.log("It's tie");
    }
    else{
        console.log("You lose")
    }
default:
    console.log("Incorrect input");        

}








if ((Arr[input]=="Rock" && Arr[randNumber]=="Scissor") || (Arr[input]=="Paper" && Arr[randNumber]=="Rock") || (Arr[input]=="Scissor" && Arr[randNumber]=="Paper")){
    console.log("You win");
}

else if(Arr[input]==Arr[randNumber]){
    console.log("It's tie . Try Agin");
}
else{
    console.log("You lose");
}


console.log(randNumber);