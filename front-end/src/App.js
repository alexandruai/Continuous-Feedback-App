import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import Login from './components/Login';

class App extends React.Component {

  render(){

 
  return (
    <BrowserRouter>
      <Switch>
        <Route path ="/" exact strict component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}
 }
export default App;
