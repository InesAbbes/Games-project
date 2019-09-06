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

   //Function that compares the two selections and return a message.

}

