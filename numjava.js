function start_game(){   
    

        var x = window.prompt("Make your choice, e for easy, m for medium and h for hard.");
        if (x == "e"){
            var en = Math.floor( Math.random()*10 )+1;
            var eanwser = window.prompt("What's the number");
            //console.log("answer is "+en);
            if (eanwser == en){
                window.alert("you win");
            }else{
                window.alert("you lose, the number is"+en);
            }
        }
          console.log(x);
        if (x =="m"){
            var mn = Math.floor( Math.random()*20 )+1;
            var manwser = window.prompt("What's the number");
            if (manwser == mn) {
                window.alert("you win");
            } else {
                window.alert("you lose, the number is"+ mn);
            }
        }

        if (x =="h") {
            var hn = Math.floor( Math.random()*30 )+1 ;
            var hanwser = window.prompt("What's the number");

            if (hanwser == hn){
                window.alert("you win");
            }else;{
                window.alert("you lose, the number is"+ hn);
            }
        }
    }
    