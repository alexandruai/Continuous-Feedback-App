import React from 'react';
import{ TextField,  Button } from '@material-ui/core';
import '../css stylesheets/AddActivityCode.css';
class AddActivityCode extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            code: "0000"
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange = (ev) => {
        this.setState({ code: ev.target.value })
    }
    render() {

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
                        this.state.code.length===4?
                        this.props.history.push("/CreateFeedback"):alert("Codul trebuie sa aiba 4 caractere")
                    }}
                >Go to feedback form</Button>

            </div>)


    }
}
export default AddActivityCode;