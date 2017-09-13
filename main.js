//get a grid on the screen

//when you click on each grid tile, make x and then an o appear
var p1 = true;
var p2 = false;
  $(".box").one("click",function(event){
      if(p1==true&&p2==false)
      {
        $(this).css("background-color","blue");
        p1 = false;
        p2 = true;
      }
      else if(p2==true&&p1==false)
      {
        $(this).css("background-color","green");
        p1 = true;
        p2 = false;
      }  
  });
//after each player has made a move, check to see if someone has won

var winScenarios=[
[$("b1"),$("b2"),$("b3")],//across top
[$("b4"),$("b5"),$("b6")],//across middle
[$("b7"),$("b8"),$("b9")],//across bottom
[$(""),$(""),$("")],
[$(""),$(""),$("")],
[$(""),$(""),$("")],
[$(""),$(""),$("")],
[$(""),$(""),$("")],

]



//if winner, display winner message.