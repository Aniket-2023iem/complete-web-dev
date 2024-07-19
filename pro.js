let userscore = 0;
let compuser = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const scoreu = document.querySelector("#user-score");
const scorec = document.querySelector("#comp-score");

const getcomp = () => {

    const options = ["push","stroke","loft","out","miss"];
    const ransidx = Math.floor(Math.random() * 4);
    return options[ransidx];

};
const showWinner = (userwin,compchoice) => {
    if(userwin){
        console.log("OUT");
        msg.innerText = "Great bowling!";

        userscore++;
        scoreu.innerText=userscore;
        document.querySelector("body").style.backgroundColor="red";

        if(userscore === 10)
            {
                msg.innerText = "ALL out!";
                document.querySelector("body").style.backgroundColor="orange";

            }
    }
    else{
        console.log("RUNS");
        
        if(compchoice === "push"){
            compuser++;
            msg.innerText = "SINGLE";
            document.querySelector("body").style.backgroundColor="green";

        }
        else if(compchoice === "stroke"){
            compuser=compuser+4;
            msg.innerText = "FOUR RUNS!";
            document.querySelector("body").style.backgroundColor="green";

        }
        else if(compchoice === "loft"){
            compuser=compuser+6;
            msg.innerText = "SIX RUNS!";
            document.querySelector("body").style.backgroundColor="green";

        }
        scorec.innerText=compuser;
    }
}

const playgame = (userChoice) => {
      console.log("user choice = ", userChoice);
      const compchoice = getcomp();
      console.log("computer choice = ", compchoice);

      if(compchoice === "miss"){
        console.log("no run");
      }
      else {
        let userwin = false;
        if(userChoice === "boom") {
            userwin = compchoice === "out" ? true : false;

        }
        else if(userChoice === "zak"){
            userwin = compchoice === "out" ? true : false;

        }
        else{
            userwin = compchoice === "out" ? true : false;

        }
        showWinner(userwin,compchoice);
      }

};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice =choice.getAttribute("id");
       playgame(userChoice);
    });
});