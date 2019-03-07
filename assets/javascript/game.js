console.log("connected")

// <!-- for (i = 10, i < 20, i++)



//     dont worry about parameters so much

    

//         var answerKey ={
//             question1:3,
//             question2:4,
//         }

//         $(".btn").on("click", function(event){
//             event.preventDefault()
//             $(".answers").each(function(){
//                 console.log$(this).prop("checked", true);
//                 $(this).is(":checked");

//                 if ($(this).is(":checked" === true){
//                     console.table(
//                         {
//                             var q = $(this).attr("question1");
//                             var ans = $(this).attr("data-ans");
//                             if (ans == answerKey[q]){
//                                 correctTotal++;
//                             }
//                         }
//                     )
//                 }

//             })
//             console.log()

//         }
//         var questions = [
//             {
//                 question: "What year was JavaScript made?",
//                 answer1: "1995",
//                 answer2: "2006",
//                 answer3: "1989",
//                 answer4: "1883",
//                 correctAnswer: "1995",

//             },
//             {
//                 question: "What year did Node.js come out?",
//                 answer1: "2015",
//                 answer2: "2011",
//                 answer3: "2009",
//                 answer4: "A year which I have never node",
//                 correctAnswer: "2009",

//             },
//             {
//                 question: "Which symbol represents the remainder?",
//                 answer1: "%",
//                 answer2: "55318008",
//                 answer3: "&",
//                 answer4: "**",
//                 correctAnswer: "%",

//             },
//             {
//                 question: "Which programming language is most widely used for data science",
//                 answer1: "Compiled Language",
//                 answer2: "JavaScript",
//                 answer3: "Dada",
//                 answer4: "Python",
//                 correctAnswer: "Python",

//             },
//             {
//                 question: "Which large influential tech company manages the React JavaScript Library?",
//                 answer1: "Amazon",
//                 answer2: "Facebook",
//                 answer3: "Boston Dynamics",
//                 answer4: "Skynet",
//                 correctAnswer: "Facebook",

//             },
//         ]

        // const {answer key=question1:3, question 2:4, question 3:2, question 4:1, question 5:1} if the question was 1 and the answer was 3 in the index.

        for (i = 0; i < questions.length; i++) {
            var questionDiv = $("<div>")
            questionDiv.append("<p>" + questions[i].question + "</p>")
        }
        document.getElementById("myBtn").addEventListener("click", function(event){
            // test my eventListener
            
            
            // declare varibles totalCorrect and totalIncorrect // .each is used to make sure youre addressing each and everyone of the classes
            // $(".answers").each(function(){

            //     // is the radio button checked
            //     // if it is checked 
            //         //  what is the question? "data-question"??? 
            //         // if question is correct compare to question # correct answer 
            //             // keep track of correct answers  totalCorrect++
            //         //else
            //             // totaIncorrect++
            //    //else
            //         // do nothing 
                    
            // })
        });


        
        //how to do radio buttons, append a radio button for each answer that you have (1-4), take that question div and append it to that html (trivdiv), add a submit button (checks which buttons are checked), set up a click event after everything is displaying property, timer - click on the start button display question and start the timer. (could be in click event of that start button)