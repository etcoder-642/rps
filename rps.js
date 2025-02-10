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

    display_user.textContent = `You've chosen ${uservalue}`
    display_comp.textContent = `The Computer have Chosen ${rval}`
    winner = gamerules(rval, uservalue);

    if(winner == "tie"){
        setTimeout(() => {
            result.textContent = "No point!"
        }, 2000)
    }else if(winner == uservalue ){
        setTimeout(() => {
            result.textContent = "User have got a point!"
        }, 2000)
        count_user += 1;
    }else if(winner == rval){
        setTimeout(() => {
            result.textContent = "Computer have got a point!"
        }, 2000)
        count_comp +=1;
    }
    comp.textContent = count_comp;
    user.textContent = count_user;
    count++;
    played.textContent = count;
    }

    

// if(count == 10){
//     if(count_user > count_comp){
//         console.log(`User have won with ${count_user} points!`)
//     }else if(count_comp > count_user){
//         console.log(`Computer have won with ${count_comp} points!`)
//     }else{
//         console.log("It's a tie!")
//     }
// }

rk.addEventListener("click", () => {
    playgame("ROCK");
});
pr.addEventListener("click", () => {
    playgame("PAPER");
});
sc.addEventListener("click", () => {
    playgame("SCISSOR");
});

