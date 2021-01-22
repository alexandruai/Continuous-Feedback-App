import React from 'react';
import confused from '../resurse/confused.png';
import smiley from '../resurse/smiley.png';
import surprised from '../resurse/surprised.png';
import CreateFeedbackComponent from '../css stylesheets/CreateFeedbackComponent.css';
import frowny from '../resurse/frowny.jpg';
class CreateFeedback extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            reactie: ""
        }
        this.onImageClick = this.onImageClick.bind(this);
    }
    // tratare click pe imagine
    onImageClick(e) {
        if (e.target.name === "smiley") {
            this.setState({ reactie: e.target.alt });
        }
        if (e.target.name === "confused") {
            this.setState({ reactie: e.target.alt });
        }
        if (e.target.name === "surprised") {
            this.setState({ reactie: e.target.alt });
        }
        if (e.target.name === "frowny") {
            this.setState({ reactie: e.target.alt });
        }

        alert("Ati ales "+this.state.reactie) 
    }

    render() {
        return (<div align="center">
            <h1 align="center">Choose a feedback </h1>
            <div id="containerFeedback">
                <img src={confused} alt={"Confused face"} name="confused" onClick={this.onImageClick}></img>
                <img src={smiley} alt={"Smiley face"} name="smiley" onClick={this.onImageClick}></img>
                <img src={surprised} alt={"Surprised face"} name="surprised" onClick={this.onImageClick}></img>
                <img src={frowny} alt={"Frowny face"} name="frowny" onClick={this.onImageClick}></img>
            </div>
        </div>);


    }
}

export default CreateFeedback;