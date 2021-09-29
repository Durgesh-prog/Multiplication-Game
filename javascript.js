var playing = false;
var score; 
var action;
var timeremaining;
var correctAnswer;

// if click on start/reset button
  document.getElementById("startreset").onclick = function(){
   //if we are playing 
    if(playing == true){
        location.reload();//reload page
    }
    else  
    { 
        //if not playing
        //change mode to playing
        
        playing = true;
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        
       //show countdown box
       show("timeremaining");
        
        timeremaining = 60;
        
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        //hide game over message
        hide("gameover");
        
        //change button text to reset
        
        document.getElementById("startreset").innerHTML = "Reset Game";
        
        //start the countdown
        startCountdown();
        
        //generate questions and answer
        
        generateQA();
        
        
        
    }
    
}

//clicking on answer box
for(i=1; i<5; i++){
    
    
      document.getElementById("box"+i).onclick = function(){
    //check we are playing
    if(playing == true){
      if(this.innerHTML == correctAnswer){
         //correct answer
         // increasing score
         score++;
         document.getElementById("scorevalue").innerHTML = score;
         //hide wrong box and show correct box
    hide("wrong");
         show("correct");
        setTimeout(function(){
        hide("correct"); }, 1000);
         generateQA();
         
     }    
    
      
    
    else{
            // wrong box 
            hide("correct");
         show("wrong");
        setTimeout(function(){
        hide("wrong"); }, 1000);
        
            
        }
        
    }
}


}

    
    
    
    
    


//functions
function startCountdown(){
    
action = setInterval(function(){ 
  timeremaining -= 1;
    
 document.getElementById("timeremainingvalue").innerHTML = timeremaining;
  if(timeremaining == 0){
      //game over
      stopCountdown();
   show("gameover");
       document.getElementById("gameover").innerHTML = 
           "<p>game over !</p> <p>Your score is : "+ score +" </p>";
   hide("timeremaining");
      hide("correct");
      hide("wrong");
      playing = false;
      
      document.getElementById("startreset").innerHTML ="Start Game";
  }  
    }, 1000);    
    
    
}


 function stopCountdown(){
      clearInterval(action);
     
 }

function hide(id){
    
     document.getElementById(id).style.display = "none";
}

function show(id){
    
     document.getElementById(id).style.display = "block";
    
}

function generateQA(){
    var x = 1 + Math.round(9*Math.random());
    var y = 1 + Math.round(9*Math.random());
     correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1 + Math.round(3*Math.random());
    
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
    //fill one box 
    var answers = [correctAnswer];
    //fill wrong answers
    for(i=1; i<5; i++){
        if(i != correctPosition)
        {  var wrongAnswer;
         
        do{
            
        wrongAnswer =  (1 + Math.round(9*Math.random())) * (1 + Math.round(9*Math.random()));
         
              
            
            
        }while(answers.indexOf(wrongAnswer)>-1)
            
            
            
        document.getElementById("box"+i).innerHTML = wrongAnswer; 
            
         answers.push(wrongAnswer);   
         
        }
        
        
    }
}