var myQuestions = [
    {
        question: "What is 10/2?",
        option1: "12",
        option2: "3",
        option3: "5",
        option4: "8",
        correctAnswer: "3"
    },
    {
        
        question: "What is 30/3?",
        option1: "3",
        option2: "10",
        option3: "5",
        option4: "8",
        correctAnswer: "2"
    },
    {
        
        question: "Who was the current prime minister of pakistan",
        option1: "Nawaz Sharif",
        option2: "Bilawal Bhutto",
        option3: "Quaid-e-Azam",
        option4: "Imran Khan",
        correctAnswer: "4"
    },
    {
        
        question: "What is the value of π",
        option1: "3.142",
        option2: "14.5",
        option3: "31.42",
        option4: "314.2",
        correctAnswer: "1"
    },
    {
        
        question: "The capital city of pakistan",
        option1: "Karachi",
        option2: "Multan",
        option3: "Islamabad",
        option4: "Lahore",
        correctAnswer: "3"
    }
    
];


var currentQuestion=0;
var score=0;
var totalQuestions=myQuestions.length;

var container=document.getElementById("quizContainer");
var ques=document.getElementById("question");
var opt1=document.getElementById("opt1");
var opt2=document.getElementById("opt2");
var opt3=document.getElementById("opt3");
var opt4=document.getElementById("opt4");
var nextButton=document.getElementById("nextButton");
var res=document.getElementById("result");




function loadQuestion(questionIndex){  //this function generate question
    var q=myQuestions[questionIndex];
    ques.textContent=(questionIndex+1)+'. ' +q.question;
    opt1.textContent=q.option1;
    opt2.textContent=q.option2;
    opt3.textContent=q.option3;
    opt4.textContent=q.option4;

}


 loadQuestion(currentQuestion);  // first question

 function loadNextQuestion(){  //next questions
    var selectedOption=document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert("Please select your answer")
    }
    var answer=selectedOption.value;
    if(myQuestions[currentQuestion].correctAnswer==answer){
        score++;
    }
    selectedOption.checked=false;
    currentQuestion++;
    if(currentQuestion==totalQuestions-1){
        nextButton.textContent="Finish"
    }
    if(currentQuestion==totalQuestions){
        container.style.display='none'
        res.style.display='';
        res.textContent="Your score is "+score +" out of "+myQuestions.length;
    }
    loadQuestion(currentQuestion);

} 
