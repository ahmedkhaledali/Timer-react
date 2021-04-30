import React, { Component } from "react"
import './App.css';
class Timer extends Component {
    constructor(props) {
        super(props);
  this.state = {
    seconds: 0,
     
  };
  
  this.tick = this.tick.bind(this);
  this.pause = this.pause.bind(this);
  
}


  change = () => {
    this.setState({
      seconds: document.getElementById("ppt").value,
   
    });
  };


    
  tick() {
    this.interval = setInterval(() => {
        this.setState(prevState => ({
          seconds: document.getElementById("ppt").value++
        }));
      }, 1000);
    }

    
    resetInput  = () => {
        this.setState({
            seconds :0
        })
        document.getElementById("ppt").value =""
          }; 



           pause () {
            
            if(!this.state.interval) {
                return
            }
            clearInterval(this.state.interval)
            this.setState({
                interval: undefined
            })
           }

        

  render() {
    return (
      <div className="body">
          <h1 className="titre" >Enter the number of seconds</h1>
<div className="cont">
        <input type="text" id="ppt" onChange={this.change} />
         <button onClick={this.tick}>play</button> 
         <button onClick={this.resetInput} id="valeur" >Reset</button>
          <button onClick={this.pause}>Stop</button> 
                </div>
        <div className="resul">
        <p >{Math.floor(this.state.seconds / 3600)} hours</p>
        <p>{Math.floor((this.state.seconds % 3600) / 60)} Min</p>
        <p>{this.state.seconds % 60} sec </p>
        </div>
      </div>
    );
  }
}

export default Timer;