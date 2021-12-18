function ir()
{
     var a = "minombreesjose";
     var b = "mi nombre es josé";
     var c = "mi nombre es jose";
     var d = "Mi nombre es josé";
     var e = "MI NOMBRE ES JOSE";
     var f = "MI NOMBRE ES JOSÉ";
     var g = "MINOMBREESJOSÉ";
     var h = "Mi nombre es José";
     var i = "MinombreesJosé";
     var j = "Minombre es Jose";
     var j = "MinombreesJose";
     var k = "mi nombre es José";
     var l = "mi nombre es Jose";

     if(document.form.login.value==a)
     {
         alert("¡CORRECTO!, PASAS AL SIGUIENTE NIVEL");
         window.location ="audios2.html";
     }
     else if(document.form.login.value==b)
     {
        alert("¡CORRECTO!, PASAS AL SIGUIENTE NIVEL");
        window.location ="audios2.html";
     }
     else if(document.form.login.value==c)
     {
        alert("¡CORRECTO!, PASAS AL SIGUIENTE NIVEL");
        window.location ="audios2.html";
     }
     else if(document.form.login.value==d)
     {
        alert("¡CORRECTO!, PASAS AL SIGUIENTE NIVEL");
        window.location ="audios2.html";
     }
     else if(document.form.login.value==e)
     {
        alert("¡CORRECTO!, PASAS AL SIGUIENTE NIVEL");
        window.location ="audios2.html";
     }
     else if(document.form.login.value==f)
     {
        alert("¡CORRECTO!, PASAS AL SIGUIENTE NIVEL");
        window.location ="audios2.html";
     }
     else if(document.form.login.value==g)
     {
        alert("¡CORRECTO!, PASAS AL SIGUIENTE NIVEL");
        window.location ="audios2.html";
     }
     else if(document.form.login.value==h)
     {
        alert("¡CORRECTO!, PASAS AL SIGUIENTE NIVEL");
        window.location ="audios2.html";
     }
     else if(document.form.login.value==i)
     {
        alert("¡CORRECTO!, PASAS AL SIGUIENTE NIVEL");
        window.location ="audios2.html";
     }
     else if(document.form.login.value==j)
     {
        alert("¡CORRECTO!, PASAS AL SIGUIENTE NIVEL");
        window.location ="audios2.html";
     }
     else if(document.form.login.value==k)
     {
        alert("¡CORRECTO!, PASAS AL SIGUIENTE NIVEL");
        window.location ="audios2.html";
     }
     else if(document.form.login.value==l)
     {
        alert("¡CORRECTO!, PASAS AL SIGUIENTE NIVEL");
        window.location ="audios2.html";
     }

     else 
     {
         alert("¡P E R D I S T E!, intentelo de nuevo.");

     }
}


function go()
{
     var a = "holavivoenlaciudaddemexico";
     var b = "holavivoenlaciudaddeméxico";
     var c = "hola, vivo en la ciudad de mexico";
     var d = "hola, vivo en la ciudad de méxico";
     var e = "Holavivoenlaciudaddemexico";
     var f = "Holavivoenlaciudaddeméxico";
     var g = "Hola, vivo en la ciudad de mexico";
     var h = "Hola, vivo en la ciudad de méxico";
     var i = "Hola, vivo en la ciudad de Mexico";
     var j = "HolavivoenlaciudaddeMexico";
     var j = "Hola, vivo en la ciudad de México";
     var k = "Hola, vivo en la Ciudad de México";
     var l = "HolavivoenlaCiudaddeMéxico";
     var m = "Hola, vivo en la Ciudad de México";

     if(document.form.login.value==a)
     {
        alert("¡GANASTE, F E L I C I D A D E S!");
        window.location ="Audios.html";
         
     }
     else if(document.form.login.value==b)
     {
        alert("¡GANASTE, F E L I C I D A D E S!");
        window.location ="Audios.html";
     }
     else if(document.form.login.value==c)
     {
        alert("¡GANASTE, F E L I C I D A D E S!");
        window.location ="Audios.html";
     }
     else if(document.form.login.value==d)
     {
        alert("¡GANASTE, F E L I C I D A D E S!");
        window.location ="Audios.html";
     }
     else if(document.form.login.value==e)
     {
        alert("¡GANASTE, F E L I C I D A D E S!");
        window.location ="Audios.html";
     }
     else if(document.form.login.value==f)
     {
        alert("¡GANASTE, F E L I C I D A D E S!");
        window.location ="Audios.html";
     }
     else if(document.form.login.value==g)
     {
        alert("¡GANASTE, F E L I C I D A D E S!");
        window.location ="Audios.html";
     }
     else if(document.form.login.value==h)
     {
        alert("¡GANASTE, F E L I C I D A D E S!");
        window.location ="Audios.html";
     }
     else if(document.form.login.value==i)
     {
        alert("¡GANASTE, F E L I C I D A D E S!");
        window.location ="Audios.html";
     }
     else if(document.form.login.value==j)
     {
        alert("¡GANASTE, F E L I C I D A D E S!");
        window.location ="Audios.html";
     }
     else if(document.form.login.value==k)
     {
        alert("¡GANASTE, F E L I C I D A D E S!");
        window.location ="Audios.html";
     }
     else if(document.form.login.value==l)
     {
        alert("¡GANASTE, F E L I C I D A D E S!");
        window.location ="Audios.html";
     }
     else if(document.form.login.value==m)
     {
        alert("¡GANASTE, F E L I C I D A D E S!");
        window.location ="Audios.html";
     }
     else 
     {
         alert("¡P E R D I S T E!, intentelo de nuevo.");
     }
}


let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelector('.logo');

window.addEventListener('DOMContentLoaded', ()=>
{
   setTimeout(()=>
   {
      logoSpan.forEach((span, idx)=>
      {
         setTimeout(()=>
         {
            span.classList.add('active');
         }, (idx + 1) *400)
      });

      setTimeout(()=>
      {
         logoSpan.forEach((span, idx)=>
         {
            setTimeout(()=>
            {
               span.classList.remove('active');
               span.classList.add('fade');
            }, (idx + 1) *50)
         }) 
      })
   },2000);

   setTimeout(()=>
   {
      intro.style.top = '-100vh';
   })
}
)

var myQuestions = [
   {
     question: "",
     answers:
     {
       a:'a      ',
       b:'tomar  ',
       c:'Voy   '
     },
     correctAnswer: 'c'
   },
   {
     question: "",
     answers: 
     {
       a:'a  ' ,
      
       b:'vas  ',
       
       c:'foto   '
     },
     correctAnswer: 'a'
   },
   {
       question: "",
       answers: 
       {
         a:'dibujar  ' ,
         b:'tomar  ' ,
         c:'crear  '
       },
       correctAnswer: 'b'
   },
   {
       question: "",
       answers: 
       {
         a:'un  ' ,
         b:'uno  ' ,
         c:'una  '
       },
       correctAnswer: 'c'
   },
   {
       question: "",
       answers: 
       {
         a:'foto ',
         b:'carro  ',
         c:'casa  '
       },
       correctAnswer: 'a'
   }
   
];
 
 var quizContainer = document.getElementById('quiz');
 var resultsContainer = document.getElementById('results');
 var submitButton = document.getElementById('submit');
 
 generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
 
 function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
 
   function showQuestions(questions, quizContainer){
     // we'll need a place to store the output and the answer choices
     var output = [];
     var answers;
 
     // for each question...
     for(var i=0; i<questions.length; i++){
       
       // first reset the list of answers
       answers = [];
 
       // for each available answer...
       for(letter in questions[i].answers){
 
         // ...add an html radio button
         answers.push(
           '<label>'
             + '<input type="radio" name="question'+i+'" value="'+letter+'">'
             + letter + ': '
             + questions[i].answers[letter]
           + '</label>'
         );
       }
 
       // add this question and its answers to the output
       output.push(
         '<div class="question">' + questions[i].question + '</div>'
         + '<div class="answers">' + answers.join('') + '</div>'
       );
     }
 
     // finally combine our output list into one string of html and put it on the page
     quizContainer.innerHTML = output.join('');
   }
 
 
   function showResults(questions, quizContainer, resultsContainer)
   {
       
     // gather answer containers from our quiz
     var answerContainers = quizContainer.querySelectorAll('.answers');
     
     // keep track of user's answers
     var userAnswer = ' ';
     var numCorrect = 0;
     
     // for each question...
     for(var i=0; i<questions.length; i++){
 
       // find selected answer
       userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
       
       // if answer is correct
       if(userAnswer===questions[i].correctAnswer)
       {
         // add to the number of correct answers
         numCorrect++;
         
         // color the answers green
         answerContainers[i].style.color = 'lightgreen';
       }
       // if answer is wrong or blank
       else{
         // color the answers red
         answerContainers[i].style.color = 'red';
       }
     }
 
     // show number of correct answers out of total
     resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
     if(numCorrect === questions.length)
       {
           alert("FELICIDADES, ...VOY A TOMAR UNA FOTO... FUE LA OPCIÓN");
           console.beep();
       }
       else
       {
           alert("PERDISTE, VUELVE A INTENTARLO");
       }
     
   }
 
   // show questions right away
   showQuestions(questions, quizContainer);
   
   // on submit, show results
   submitButton.onclick = function()
   {
     showResults(questions, quizContainer, resultsContainer);
     
   }
   
 }