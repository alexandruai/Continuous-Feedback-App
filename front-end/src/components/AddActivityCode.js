import React from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import '../css stylesheets/AddActivityCode.css';
// Clasa pentru introducerea codului activitatilor
class AddActivityCode extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            code: "0000",
            rows: []
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange = (ev) => {
        this.setState({ code: ev.target.value })
    }
    componentDidMount() {
        this.getData();
    }
    async getData() {
        await axios.get("http://localhost:8080/api/activities").then(res => { this.setState({ rows: res.data }) });
    }

    render() {

        // Definire componente vizuale
        return (
            <div>
                <TextField
                    label="Cod activitate"
                    defaultValue="0000"
                    helperText="Introdu codul activitatii"
                    variant="outlined"
                    onChange={this.handleChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        let codes = this.state.rows.map(e => e.Cod);
                        console.log("Coduri:", codes);
                        // Verificare cod activitate - sa existe in BD si sa aiba 4 caractere
                        this.state.code.length === 4 && codes.includes(this.state.code) ?
                            this.props.history.push("/CreateFeedback") : alert("Codul trebuie sa aiba 4 caractere")
                    }}>Go to feedback form</Button>

            </div>)


    }
}
// Pentru a putea face clasa vizibila si in alte fisiere, pentru a putea fi utilizata in acestea
export default AddActivityCode;