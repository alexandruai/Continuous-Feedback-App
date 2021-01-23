import React from 'react';
import axios from 'axios';
import { Paper, Table, TableBody, TableCell, TableRow, TableContainer, TableHead, IconButton } from '@material-ui/core'
import '../css stylesheets/ListActivitati.css';
// Clasa pentru listarea activitatilor
class ListaActivitati extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            rows: []
        };
    }
    // preluare activitati din baza de date la initializarea componentei
    componentDidMount() {
        this.getData();
    }
    async getData() {
        let data = await axios.get("http://localhost:8080/api/activities").then(res => { this.setState({ rows: res.data }) });
    }



    render() {
        // Definire componente vizuale - tabelul cu activitati
        return (<div>
            <h3>Lista activitatilor</h3>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Denumire</TableCell>
                            <TableCell align="right">Descriere</TableCell>
                            <TableCell align="right">Data</TableCell>
                            <TableCell align="right">Durata</TableCell>
                            <TableCell align="right">Cod</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map((row, index) => (
                            <TableRow key={row.ActivitateId}>

                                <TableCell align="right">{row.Denumire}</TableCell>
                                <TableCell align="right">{row.Descriere}</TableCell>
                                <TableCell align="right">{row.DataActivitate}</TableCell>
                                <TableCell align="right">{row.Durata}</TableCell>
                                <TableCell align="right">{row.Cod}</TableCell>



                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>);


    }
}
// Pentru a putea face clasa vizibila si in alte fisiere, pentru a putea fi utilizata in acestea
export default ListaActivitati;