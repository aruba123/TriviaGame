// Making a Javascript Quiz

// Steps 
//1. Set up the structure 
//2. show the questions
//3. On submit ,show the results

// Setting up the structure 
// create function to generate the quiz questions
//Function will have to do these things
//1. generate quiz questions
//2. A place to put the quiz questions
//3. a place for th results
//4. a submit button
function generateQuiz(questions,quizContainer, resultsContainer,submitButton){


}
function showQuestions(questions, quizContainer){



}

function showResults(questions, quizContainer, resultsContainer){

}

//showQuestions(Questions,quizContainer);

// when user clicks submit,show results
submitButton.onClick=function (){

	showResults(questions,quizContainer,resultsContainer)
}

}

//Step 2 :Show the questions
var myQuestions = [
{    

	question: " Who was the legendary Benedictine monk who invented champagne"


	answers:{ a: 'Jon Bovi',
              b:  'John Millicent',
              c:   'Dom Perignon',
          },

   correctAnswer: 'c'

},

{ 

 question: " Name the Largest freshwater lake in the world?"

 answers:{  a: 'lake Havana'
            b: 'lake Mississipi'
            c:  'Lake Superior'
        },


  correctAnswer: 'c'


  question: " Who invented the rabies Vaccine"

  answers:{  a:'Edward Jenner'
             b. 'Louis Pasteur'
             c. 'Isaac Newton'
  correctAnswer: 'b'

       },

       question:  "Name the World/s biggest  island"

       answers a: 'Greenland'
               b:'jamaica'
               c: 'iceland' 
},
  correctAnswer: 'a'


}

];


// We need to show our questions
function showQuestions(questions,quizContainer){
//we need a place to store the output and the answer choice
 // we need to create a variable
 var output = [];
 var answers;

 // for each question
 for (var i=0 ; i<questions.length; i++)

// first reset the list of answers
answers = [];

// for each available answer to this question
for (letter in question[i].answers) {

	// add an html radio button 
	answers.push (
              '<label>'
                       +'<input type "radio" name'
                       + letter + ':'
                       +questions[i].answers[let]

                    + '</label>'
		);
}

// adds this question and its answers to the output
output.push (

	'<divclass="questions">' + questions[i].questions
	+ '<div class= "answers">' +answers.join('')



	);
}

//finally combine our output list into one string of html an 
quizContainer.innerHTML = output.join(''
);
}
// run the function

showQuestions(questions,quizContainer);

function showResults(questions,quizContainer,resultsContainer){
	//gatther answer containers from the quiz

	var answerContainers= quizContainer.querySelectorAll('.answers')

	// keep track of user's answers 

	var userName = '';
	var numCorrect=0;

	//for each question
	for (var i=0 ; i<questions.length; i++){

	
// find selected answer
userAnswer = (answerContainers[i]).querySelector('input')	

// if answer is correct
if(userAnswer===questions[i].correnct Answer){
	//add to the number of correct answers
	numCorrect++;

//	color the answers green
answerContainers[i].style.color='lightgreen'
	}
// if answer is wrong or blank
else{
   // color the answer red
   answerContainers[i].style.color= 'red';

   }
}
//show number of correct answers out of total 
resultsContainer.innerHTML= numCorrect + 'out of' + questions

// show quiz results when someone clicks the button
// on submit ,show results

submitButton.onClick= function(){
showResults(questions,quizContainer,resultsContainer)

}

// to let javascript know which html elements to use for the quiz

var quizContainer= document.getElementById( 'quiz')
var resultsContainer=document.getElementById('results')
var submitButton = document. getElementById('submit')

