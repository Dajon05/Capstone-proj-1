// setting variables for game 
var numOfPlayers = 2
var currentPlayer = 0
// keep track of current iteration that game is in 
var move = 1
var play = true
// Player 1 points
var points1 = 0
//  Player 2 points
var points2 = 0
// this function tracks player moves
$(document).ready(function () {
    //    JQuery click function to click within board
    $(".squares").click(function () {

        if ($(this).text() == "" && (play)) {
            // Use move variable as counter to keep track of each player move and place "X's" + "O's" Also set the alternating turns
            // This sets player 1 to x since they go when "move" is an odd number
            console.log(move)
            if ((move % 2) === 1) {
                $(this).html("X");
                if(checkWinner()){
                    alert("you win!")
                }
            }
            else {
                $(this).html("O")
                if(checkWinner()){
                    alert("you win!")
                }
            }
            function checkWinner() {
                if ($("#sq1").html() === $("#sq4").html() &&
                $("#sq1").html() === $("#sq7").html() 
                    && $("#sq1").html() !="") {
                    return(true)
                }

                if ($("#sq1").html() === $("#sq2").html() &&
                $("#sq1").html() === $("#sq3").html()
                && $("#sq1").html() !="") {
                    return(true)
                }
                
                if ($("#sq1").html() === $("#sq5").html() &&
                $("#sq1").html() === $("#sq9").html() 
                    && $("#sq1").html() !="") {
                    return(true)
                }
                if ($("#sq2").html() === $("#sq5").html() &&
                $("#sq2").html() === $("#sq8").html() 
                    && $("#sq2").html() !="") {
                    return(true)
                }
                if ($("#sq3").html() === $("#sq5").html() &&
                $("#sq3").html() === $("#sq7").html() 
                    && $("#sq3").html() !="") {
                    return(true)
                }
                if ($("#sq3").html() === $("#sq6").html() &&
                $("#sq3").html() === $("#sq9").html() 
                    && $("#sq3").html() !="") {
                    return(true)
                }
                if ($("#sq4").html() === $("#sq5").html() &&
                $("#sq4").html() === $("#sq6").html() 
                    && $("#sq4").html() !="") {
                    return(true)
                }
                if ($("#sq7").html() === $("#sq8").html() &&
                $("#sq7").html() === $("#sq9").html() 
                    && $("#sq7").html() !="") {
                    return(true)
                }
                
                
            }
            move++;
        }
        })
        






})