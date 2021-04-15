import React, { Component } from 'react';
import ButtonOne from './ButtonOne';
import ButtonTwo from './ButtonTwo';
import ButtonThree from './ButtonThree';
import NextButton from './NextButton';
let questionsArr = [["How many legs does a Centipede have?", "One: 50 Two: 100  Three: 30", "3"], ["How many Wives did Henry VIII have?","One: 6 Two: 9  Three: 12", "1"], ["What colour is the sky?", "One: Green Two: Blue  Three: Red", "2"]];

class Questions extends Component {
    constructor(props){
        super(props)
        this.state = {questionsList : questionsArr}
        this.counter = 0;
        this.counterTwo = 0;
    }
    evaluate = (event) => {
        if(event.target.innerText === questionsArr[this.counterTwo][2]) {
            this.setState({questionsList: [["CORRECT"]]})
        } else {
            this.setState({questionsList: [["INCORRECT"]]})
        }
    }
  
    render() {
        return (
            <div>
                <h1 id= "quiz-questions"> {this.state.questionsList[this.counter][0]}</h1>
                <h3 id= "quiz-choices">{this.state.questionsList[this.counter][1]}</h3>
                <ButtonOne onClick={this.evaluate} />
                <ButtonTwo onClick={this.evaluate}/>
                <ButtonThree onClick={this.evaluate}/>
                <NextButton onClick={this.next}/>
            </div>
            
            
        )    
    }
}

export default Questions;
