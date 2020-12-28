
import './Quiz.css';
import React, { Component } from "react";
import firebase from './config';
import questions from'./Questions';
import axios from 'axios'

 class Quiz extends Component{
  constructor() {
    super();
    this.state={   scores: [],
      answers: [],
      questionIndex: 0,
      currentQuestion: questions[0],
      selectedAnswer: null,
      score:0,
      email: ''
      }
    }
    setAnswer = e => {
      this.setState({
        selectedAnswer: e.target.value
      });
    }; //setAnswer
    
    submitAnswer = e => {
      if (this.state.selectedAnswer) {
        if (this.state.selectedAnswer === this.state.currentQuestion.answer) {
         
  
        this.state.score=this.state.score+1;
         console.log(this.state.score)
           
          var nextQuestionIndex = this.state.questionIndex + 1;
          this.state.answers.push(this.state.selectedAnswer)
          console.log(this.state.answers)
          alert("Correct answer");       
        
        }else{
        var nextQuestionIndex = this.state.questionIndex + 1;
        this.state.answers.push(this.state.selectedAnswer)
            console.log(this.state.answers)
            alert("wrong Answer");         
          }
      
        if (nextQuestionIndex < questions.length) {
          this.setState({ questionIndex: nextQuestionIndex,
            currentQuestion: questions[nextQuestionIndex],
            selectedAnswer: null}
            
            )
          }else if(nextQuestionIndex == questions.length){
            alert("Test is over");

        alert(`score is ${this.state.score}`);
       
        this.sendToServer(this.state.email,this.state.score) 

        firebase
    .database()
    .ref('scores/' )
    .set({ scores:this.state.score });
      }
     }
    }; //submitAnswer
    sendToServer(email,score){
      axios({method: "POST", 
      url:"http://localhost:8080/api/sendMail", 
      data: {score:this.state.score,email:"mai.sa2sa2@gmail.com"
    }}).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
     })
    }

 
    
    
  

     
 
 
  
  render() 
  {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            Question
            <span className="float-right">
              Current Score
              <span className="badge badge-warning">

              </span>
            </span>
          </div>
          <div className="card-body">
            <h5 className="card-title">
            {this.state.currentQuestion.question}
            </h5>
            <div>
             <ul>
             {this.state.currentQuestion.options.map(option => (
                  <li key={option}>
                    <input
                      type="radio"
                      name="answer"
                      value={option.name}
                      onChange={this.setAnswer}
                      checked={this.state.selectedAnswer === option.name}
                    />{" "}
                    {option.name}:{option.body}
                  </li>
                ))}
              </ul>
            </div>
            <div className="row">&nbsp;</div>
            <button
              className="btn btn-primary"
              onClick={this.submitAnswer}
              disabled={this.state.gameOver}
            >
              Submit Answer
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">Your past answers</div>
          <ul className="list-group list-group-flush">
            <li>
            <span>
              {this.state.answers}
                      </span>
                    </li>
               
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  );


  }
 }

 

export default Quiz;
