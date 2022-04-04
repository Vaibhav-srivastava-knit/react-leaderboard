import Navbar from './Navbar'
import Home from './Home'
import Add from './Add'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useState} from 'react'
function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
       <div>

      < Switch>
         <Route exact path='/add'>
         <Add/>
          </Route>
          <Route exact path='/'>
           <Home/>
          </Route>
      </Switch>
      </div>
      </Router>
      </div>
  );
}

export default App;
