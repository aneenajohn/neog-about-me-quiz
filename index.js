// QUIZ GAME//
// Assignment 1

const chalk = require("chalk");
var readlineSync = require("readline-sync");

console.log(chalk.bold.bgYellow.black("WELCOME TO HOW WELL DO YOU KNOW "+ chalk.inverse(" ANEENA ") +" CHALLENGE"+"\n"));
var userName = readlineSync.question("What's your name? ");
console.log(chalk.bold.magentaBright("hello "+ userName.toUpperCase() + "! Let's start out!!")+"\n");

// console.log("Welcome "+ userName + " to DO YOU KNOW Aneena?");
var questionSet = [
  {
    question : "Where do I live? ",
    answer: "trichy",
  },
  {
    question : "Do I know swimming?",
    answer: "",
  },
  {
    question: "Do I like to watch movies? ",
    answer: "true",
  },
  {
    question : "Am I an Android or iPhone person? ",
    answer : "android",
  },
  {
    question : "Which of these food(s) I would like to eat ? " ,
    answer : "5",
  },
];
var score=0;
var i;
for ( i=0; i<questionSet.length ;i++)
{
var currentQuestion = questionSet[i];
play (currentQuestion.question,currentQuestion.answer);
}
console.log(chalk.bold.greenBright("Your final Score : "+ score+"/"+questionSet.length+"\n"));
console.log(chalk.cyan.bold("Thank you for playing the quiz!"));

function play(question,answer)
{
if (i === 1 || i === 2 )
{
var userAnswer = readlineSync.keyInYN(question); 
// console.log("Useranswer ="+userAnswer)
if (userAnswer === Boolean(answer))
{
  console.log(chalk.bold.green("Right!!"));
  score=score+1;
}
else
{
  console.log(chalk.bold.red("Wrong!"));
}
}
else if (i === 4)
{
  food = [ 'dosa' , 'briyani' , 'icecream' , 'momos' , 'maggie' , 'all the above'];
  var userAnswer = readlineSync.keyInSelect(food, question);
  // console.log(userAnswer);
  if (userAnswer === parseInt(answer))
{
  console.log(chalk.bold.green("Right!!"));
  score=score+1;
}
else
{
  console.log(chalk.bold.red("Wrong!"));
}
}
else
{
  userAnswer = readlineSync.question(question); 
if (userAnswer.toUpperCase() === answer.toUpperCase())
{
  console.log(chalk.bold.green("Right!!"));
  score=score+1;
}
else
{
  console.log(chalk.bold.red("Wrong!"));
}
}

console.log(chalk.magentaBright("Currrent Score : "+ score+"\n"));
// console.log("--------------------------------");
}

