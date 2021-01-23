import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Register from './components/Register';
import CreateFeedback from './components/CreateFeedback';
import Login from './components/Login';
import AddActivityCode from './components/AddActivityCode';
import ListaActivitati from './components/ListaActivitati';
class App extends React.Component {

  render() {
    // creare Rute front-end pentru componente
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact strict component={Login} />
          <Route path="/Register" exact strict component={Register} />
          <Route path="/AddActivityCode" exact strict component={AddActivityCode} />
          <Route path="/ListaActivitati" exact strict component={ListaActivitati} />
          <Route path="/CreateFeedback" exact strict component={CreateFeedback} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
