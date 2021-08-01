// import {BrowserRouter as Router,Route} from 'react-router-dom'
import React from 'react';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

export const userContext = React.createContext()

function App() {
  const [people,setPeople]=React.useState([]);
  const [username,setUsername]=React.useState([]);
  // var data = JSON.parse(localStorage.getItem('data'));
  return (
    <>
    <userContext.Provider value={{
      user1:people,updateUser:(a) => setPeople(a),
      name:username,updateName:(b)=> setUsername(b)
      }}>
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/createaccount" component={CreateAccount} />
        </Switch>
      </div>
    </Router>
    </userContext.Provider>
    </>
  );
}
export default App;
