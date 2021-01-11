import React from 'react';
import confused from '../resurse/confused.png';
import smiley from '../resurse/smiley.png';
import surprised from '../resurse/surprised.png';
import CreateFeedbackComponent from '../css stylesheets/CreateFeedbackComponent.css';
import frowny from '../resurse/frowny.jpg';
class CreateFeedback extends React.Component {





    render() {

        return (<div align="center">
          <h1 align="center">Choose a feedback </h1>
          <div id="containerFeedback">
              <img src={confused} alt={"Confused face"} ></img>
              <img src={smiley} alt={"Smiley face"}></img>
              <img src={surprised} alt={"Surprised face"}></img>
              <img src={frowny} alt={"Frowny face"}></img>
          </div>
        </div>);


    }
}

export default CreateFeedback;