
const questions = [
  ["What is the capital of France?", "Berlin", "Madrid", "Paris"],
  ["Which planet is known as the Red Planet?", "Earth", "Mars", "Venus"],
  ["Who wrote 'Romeo and Juliet'?", "Charles Dickens", "William Shakespeare", "Mark Twain"],
  ["What is the chemical symbol for water?", "H2O", "CO2", "O2"],
  ["Which gas do plants absorb from the atmosphere?", "Oxygen", "Carbon Dioxide", "Nitrogen"],
  ["How many continents are there on Earth?", "5", "6", "7"],
  ["Which organ pumps blood in the human body?", "Lungs", "Brain", "Heart"],
  ["What is the square root of 64?", "6", "8", "10"],
  ["Which language is primarily spoken in Brazil?", "Spanish", "Portuguese", "French"],
  ["What is the largest ocean on Earth?", "Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
];

const rightAnswers = [
  "Paris",         // Q1
  "Mars",          // Q2
  "William Shakespeare", // Q3
  "H2O",           // Q4
  "Carbon Dioxide",// Q5
  "7",             // Q6
  "Heart",         // Q7
  "8",             // Q8
  "Portuguese",    // Q9
  "Pacific Ocean", // Q10
];

let answers=[];
document.getElementsByTagName("button")[0].addEventListener("click",()=>{
    console.log("enter");
    
    if((answers.length)==0){

        answers.push("#")
        console.log("#");
        
        document.querySelector(".question").innerHTML=`<p>
         ${questions[0][0]}<br>
         <input type="radio" name="ques" value="${questions[0][1]}">&nbsp;${questions[0][1]}<br>
         <input type="radio" name="ques" value="${questions[0][2]}">&nbsp;${questions[0][2]}<br>
         <input type="radio" name="ques" value="${questions[0][3]}">&nbsp;${questions[0][3]}<br>
     
         </p>
        
         `;
         let q=document.querySelector(".question")
        q.setAttribute("class","question ques");
        document.querySelector(".start").innerHTML="Next &#10230;";
        let p=document.querySelector(".start");
         p.setAttribute("class","questyle");


    }else if((answers.length)<10){
          let questionNumber=answers.length;
       let ans=0;
          let a=document.getElementsByName("ques");
          for(let i of a){
            if (i.checked){
               if((i.value)==rightAnswers[questionNumber-1]){
                ans=1;
               }
               else{
                ans=0; 
               }
            }
          }
          answers.push(ans);
        
         document.querySelector(".question").innerHTML=`<p>
         ${questions[questionNumber][0]}<br>
         <input type="radio" name="ques" value="${questions[questionNumber][1]}">&nbsp;${questions[questionNumber][1]}<br>
         <input type="radio" name="ques" value="${questions[questionNumber][2]}">&nbsp;${questions[questionNumber][2]}<br>
         <input type="radio" name="ques" value="${questions[questionNumber][3]}">&nbsp;${questions[questionNumber][3]}<br>
     
         </p>
        
         `;
    }else{
  let questionNumber=answers.length;
   let ans=0;
          let a=document.getElementsByName("ques");
          for(let i of a){
            if (i.checked){
               if((i.value)==rightAnswers[questionNumber-1]){
                ans=1;
               }
               else{
                ans=0;
               }
            }
          }
          answers.push(ans);
          let sum=0;
          for(let i=1;i<answers.length;i++){
            sum+=answers[i];
          }
          console.log("score = ",sum);
          document.querySelector(".box").innerHTML=`<h1>score:</h1><br><h1>${sum}/10</h1>`;
    }

})



