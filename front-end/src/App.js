import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import Login from './components/Login';
import CreateFeedback from './components/CreateFeedback';

class App extends React.Component {

  render(){

 
  return (
    <BrowserRouter>
      <Switch>
        <Route path ="/" exact strict component={Login}/>
        <Route path ="/feedback" exact strict component={CreateFeedback}/>
      </Switch>
    </BrowserRouter>
  );
}
 }
export default App;
