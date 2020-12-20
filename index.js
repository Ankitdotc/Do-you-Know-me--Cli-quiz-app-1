var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;
var userName = readlineSync.question("Hello! welcome to Ankit's quiz, let's have some fun , Enter any key to continue \n");

let userAnswer = readlineSync.question(
"\nDo you know Ankit ? \n");


if (userAnswer.toLowerCase() === "yes") {
    console.log(chalk.white("\nOk, let me ask some questions to you."))
} else if (userAnswer.toLowerCase() === "no") {
    console.log(chalk.green("\nKnow about him first to play this game"))
} else {
    console.log(chalk.red("Please answer in yes or no."))
}
if(userAnswer.toLowerCase()!="no")
{

//  high scores
var highScores = [
  {
    name: "Ankit",
    score: 5,
  },

  {
    name: "Ankur",
    score: 4,
  },
]

// array of objects
var questions = [{ question :"Where do I live ?",
 answer :"Patna"},
{ question :"Which city do I study ?",
answer :"Pune"},
{question :" From which city did I complete my 12th ?" ,answer:"Patna"},
{question :"Who is my favourite superhero    " ,
answer :"Shaktiman"},
{ question :"My favourite cricket player is  \n ",
answer :"Sachin Tendulkar"}];

function welcomeToTheQuiz() {
 var userName = readlineSync.question(chalk.red("What's your name? "));

  console.log(chalk.red("Welcome  to the quiz! "+ userName + "    \nLet's see How Much You Know About Ankit?"))
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log(chalk.green("right!"));
    score = score + 1;
    
  } else {
    console.log(chalk.red("wrong!"));
   
  }

  console.log(chalk.yellow("current score: ", score));
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  if (score==0){
    console.log(chalk.red("Sorry,tough luck this time"));
    console.log("YourScore="+score);
    console.log(chalk.bgRed("Check out the high scores, if you think you should be there ,   then ping me  with a screenshot  and I'll update it"))

  highScores.map(score => console.log(score.name, " : ", score.score))
  console.log("Thankyou"+ userName+" for playing this quiz")

  }
  else{
  console.log(chalk.bgCyan("YAY! You SCORED: ", score));

  console.log(chalk.bgRed("Check out the high scores, if you think you should be there ,   then ping me  with a screenshot  and I'll update it"))

  highScores.map(score => console.log(score.name, " : ", score.score))
  console.log(" Thankyou "+ userName+ " for playing this quiz")
}
}

welcomeToTheQuiz();
game();
showScores();
}