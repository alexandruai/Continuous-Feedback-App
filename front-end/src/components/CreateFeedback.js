import { Grid, GridList } from '@material-ui/core';
import React from 'react';
import confused from '../resurse/confused.png';
import smiley from '../resurse/smiley.png';
import surprised from '../resurse/surprised.png';
import CreateFeedbackComponent from '../css stylesheets/CreateFeedbackComponent.css';
class CreateFeedback extends React.Component {





    render() {

        return (<>
          <div id="containerFeedback">
              <img src={confused} alt={"Confused face"} ></img>
              <img src={smiley} alt={"Smiley face"}></img>
              <img src={surprised} alt={"Surprised face"}></img>
          </div>
        </>);


    }
}

export default CreateFeedback;