import React from 'react';
import confused from '../resurse/confused.png';
import smiley from '../resurse/smiley.png';
import surprised from '../resurse/surprised.png';
import CreateFeedbackComponent from '../css stylesheets/CreateFeedbackComponent.css';
import firebase from '../firebase-config.js';
import { TextField, Button } from '@material-ui/core';
import frowny from '../resurse/frowny.jpg';
import axios from 'axios';



// Clasa pentru crearea feedbackului
class CreateFeedback extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            reactie: "",
            mesaj: ""
        }
        // Necesar pentru a fi this vizibil in callback
        this.onImageClick = this.onImageClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //  window.onload = function () {
        // var tenMinutes = 60 * 10,
        //     display = document.querySelector('#time');
        //     this.startTimer(tenMinutes, display);
        //   };

    }


    handleChange(e) {
        this.setState({ mesaj: e.target.value })
    }
    //Functie care incepe numaratoarea inversa
    startTimer(duration, display) {
        var timer = duration, minutes, seconds;

        // Ruleaza functia din nou in fiecare secunda si minut daca numarul nu este zero
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            // Afiseaza continutul text al unui element si incepe sa numere invers
            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                while (minutes != 0) {
                    minutes--;
                }

                while (seconds != 0) {
                    seconds--;
                }

            }
            if (timer === 0) {
                alert("A expirat timpul!");
            }
        }, 1000);
    }
    componentDidMount() {
        var fifteenMinutes = 60 * 15,
            display = document.querySelector('#time');
        this.startTimer(fifteenMinutes, display);
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

        alert("Ati ales " + this.state.reactie)
    }

    render() {
        // Definire componente vizuale
        return (<div align="center">
            <h1 align="center">Choose a feedback </h1>
            <div id="containerFeedback">
                <img src={confused} alt={"Confused face"} name="confused" onClick={this.onImageClick}></img>
                <img src={smiley} alt={"Smiley face"} name="smiley" onClick={this.onImageClick}></img>
                <img src={surprised} alt={"Surprised face"} name="surprised" onClick={this.onImageClick}></img>
                <img src={frowny} alt={"Frowny face"} name="frowny" onClick={this.onImageClick}></img>
            </div>
            <TextField
                label="Mesaj"
                placeholder="Introdu un mesaj"
                name="mesaj"
                multiline
                variant="outlined"
                onChange={this.handleChange}
            />
            <Button variant="contained" color="primary" onClick={async () => {
                let feedback = {
                    Mesaj: this.state.mesaj,
                    Recenzie: this.state.reactie,
                    DataFeedback: Date.now(),
                    UserId: 3

                }
                axios.post("http://localhost:8080/api/createFeedback/3", feedback).then(res => { console.log(res) })
                alert("Feedback inregistrat!")
                this.props.history.push("/AddActivityCode")
            }}>
                Save
               </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    firebase.auth().signOut();
                    this.props.history.push("/")
                }}>Sign out</Button>


        </div>);


    }
}
// Pentru a putea face clasa vizibila si in alte fisiere, pentru a putea fi utilizata in acestea
export default CreateFeedback;