{// Global variable for remember wich option has selected the user
let userOption = undefined;

//function that will be called when the user click on an option.
    function playWith(option){
        // first deselect the previous selected element (if exist)
        if (userOption !== undefined)
        {
            let userSelectionElement = document.getElementById(userOption);
            // i remove the purple border (if exist)
            userSelectionElement.style.border = "10px #F8F8F8  solid";
        }
        // then,  select the user option and add
        // a purple border
        userOption = option;
        userSelectionElement = document.getElementById(option);
        userSelectionElement.style.border = "10px #990066 solid";
    }
    //Function that execute the game.
    function playGame() {
        let computerOption = Math.random();
        if (computerOption<0.34){
            computerOption="stone";
        }else
        if (computerOption <= 0.67){
            computerOption ="paper";
        }else{
            computerOption ="scissor";
        }
        resultMessage = compare(userOption, computerOption);
        document.getElementById("result").innerHTML ="<p>User select: " + userOption + " - Computer select:"
            + computerOption + "</p> <p>" + resultMessage + "</p>";
    }
    //Function that compares the two selections and return a message.
    function compare (userSelection , computerSelection)
    {
        if (userSelection === undefined)
        {
            return "Please, select an option before play.";
        }
        if (userSelection === computerSelection)
        {
            return "It is a draw !";
        }
        if (userSelection === "stone")
        {
            if (computerSelection === "scissor")
            {
                return "You win.";
            } else {
                return "you lose! , Try again! ";
            }
        }else if (userSelection === "paper")
        {
            if (computerSelection === "stone")
            {
                return "You win." ;
            }else if ("scissor")
            {
                return "You lose!, Try again.";
            }
        }else if (userSelection === "scissor")
        {
            if (computerSelection === "stone")
            {
                return "You lose!, Try again.";
            }else{
                return "You win." ;
            }
        }
    }
}

