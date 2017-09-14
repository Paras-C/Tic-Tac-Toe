var p1 = true;
var p2 = false;
var winningScenarios = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];
var p1Moves=[];
var p2Moves=[];
var win = false;
var winner = "";
var moveCounter = 0;


  $(".box").one("click",function(event){
      if(moveCounter===9)
      {
        $("#Winner").html("It's a Draw");
      }
      var d = $(this).attr("id");
      if(p1==true&&p2==false)
      {
        $(this).append("<p class='xoro'>X</p>"); 
        p1 = false;
        p2 = true;
        p1Moves.push(parseInt(d));
        checkWin();
        moveCounter++;
        console.log(moveCounter);
      }
      else if(p2==true&&p1==false)
      {
        $(this).append("<p class='xoro'>O</p>");        
        p1 = true;
        p2 = false;
        p2Moves.push(parseInt(d));
        checkWin();
        moveCounter++;
        console.log(moveCounter);
      }  
  });


  $("#reset").click(function(event){
    location.reload();
  });

function checkWin()
{
   for (var i = 0; i < winningScenarios.length; i++) 
   {

      if ($(p1Moves).not(winningScenarios[i]).length === 0 && $(winningScenarios[i]).not(p1Moves).length === 0) {
        win = true;
        winner = "Player 1";
        setWinner(winner);
   }
      else if ($(p2Moves).not(winningScenarios[i]).length === 0 && $(winningScenarios[i]).not(p2Moves).length === 0) {
        console.log("P2 Wins!");
        win = true;
        winner = "Player 2";
        setWinner(winner);
   }
  
  }
}

function setWinner(win)
{
  $("#Winner").html(win + " Wins the Game!");
}
















// var winScenarios=[
// [$("b1"),$("b2"),$("b3")],//across top
// [$("b4"),$("b5"),$("b6")],//across middle
// [$("b7"),$("b8"),$("b9")],//across bottom

// [$("b1"),$("b4"),$("b7")],//down left
// [$("b2"),$("b5"),$("b6")],//down middle
// [$("b3"),$("b6"),$("b9")],//down right

// [$("b1"),$("b5"),$("b9")],//diagonally ltf
// [$("b3"),$("b5"),$("b7")],//diagonally rtl
// ];


// var $winScenario1 = winScenarios[1]
// if($winScenario1.join().filter(".blue").length === 3)
// {
//   console.log("Meep");
// }







