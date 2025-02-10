/**
 * BEGIN
 SET count = 0; count_user = 0; count_comp = 0;
 WHILE count < 10:
     SET uservalue = INPUT
	IF uservalue != rock OR uservalue != paper OR uservalue != scissor:
         PRINT you've inputted invalid value
         BREAK;
     SET randomvalue = random(rock, paper, scissor)
     SET winner = gamerules(uservalue, randomvalue)
     IF winnner = tie;
         PRINT It's tie;
     ELSEIF winner = uservalue:
         PRINT winner is uservalue;
         count_user += 1;
     ELSE
         PRINT winner is randomvalue;
         count_comp += 1;
     SET count += 1;
 IF count == 10:
     IF count_user > count_comp:
         PRINT user is winner with count_user points;
     ELSEIF count_comp > count_user:
         PRINT computer is winner with coun_comp points;
     ELSE 
         PRINT it's a tie
END
 */

let count = 0
let count_user = 0
let count_comp = 0

let display_user = document.querySelector(".display_user");
let display_comp = document.querySelector(".display_comp");

let rk = document.querySelector(".rock");
let sc = document.querySelector(".scissor");
let pr = document.querySelector(".paper")
let result = document.querySelector(".result");
let comp = document.querySelector(".computer");
let user = document.querySelector(".user")
let played = document.querySelector(".played");

function gamerules(fvalue, svalue){
    if(fvalue == svalue){
        return "tie";
    }else if(fvalue == "ROCK" && svalue == "PAPER"){
        return svalue;
    }else if(fvalue == "ROCK" && svalue == "SCISSOR"){
        return fvalue;
    }else if(fvalue == "PAPER" && svalue == "SCISSOR"){
        return svalue;
    }else if(fvalue == "PAPER" && svalue == "ROCK"){
        return fvalue;
    }else if(fvalue == "SCISSOR" && svalue == "PAPER"){
        return fvalue;
    }else if(fvalue == "SCISSOR" && svalue == "ROCK"){
        return svalue;
    }
}


function playgame(uservalue) {
    if(count == 10){
        if(count_user > count_comp){
            document.querySelector(".won").style.display = "block";
            rk.style.backgroundColor = "burlywood";
            pr.style.backgroundColor = "burlywood";
            sc.style.backgroundColor = "burlywood";
            return;
        }else if(count_comp > count_user){
            document.querySelector(".lose").style.display = "block";
            rk.style.backgroundColor = "burlywood";
            pr.style.backgroundColor = "burlywood";
            sc.style.backgroundColor = "burlywood";
            return;
        }else{
            document.querySelector(".tie").style.display = "block";
            rk.style.backgroundColor = "burlywood";
            pr.style.backgroundColor = "burlywood";
            sc.style.backgroundColor = "burlywood";
            return;
        }

    }

    function rvalue(){
        let rn = Math.floor(Math.random()*100);
        if(rn%3 == 1){
            return "ROCK"
        }else if(rn%3 == 2){
            return "PAPER"
        }else{
            return "SCISSOR"
        }
    }
    let rval = rvalue()

    display_user.textContent = `${uservalue}`
    display_user.style.backgroundColor = "#cd853f"
    display_comp.textContent = `${rval}`
    display_comp.style.backgroundColor = "#cd853f"
 
    winner = gamerules(rval, uservalue);

    if(winner == "tie"){
        setTimeout(() => {
            result.textContent = "No point!"
            result.style.backgroundColor = "#808080";
            result.style.border = "none";
        }, 300)
    }else if(winner == uservalue ){
        setTimeout(() => {
            result.textContent = "You have got a point!"
            result.style.backgroundColor = "#008000"; 
            result.style.border = "none";
        }, 300)
        count_user += 1;
    }else if(winner == rval){
        setTimeout(() => {
            result.textContent = "Computer have got a point!";
            result.style.backgroundColor = "#d60101";
            result.style.border = "none";
        }, 300)
        count_comp +=1;
    }
    comp.textContent = count_comp;
    user.textContent = count_user;
    count++;
    played.textContent = count;
    }

rk.addEventListener("click", () => {
    playgame("ROCK");
});
pr.addEventListener("click", () => {
    playgame("PAPER");
});
sc.addEventListener("click", () => {
    playgame("SCISSOR");
});
document.querySelector(".reset-game").addEventListener("click", () => {
    location.reload();
})

