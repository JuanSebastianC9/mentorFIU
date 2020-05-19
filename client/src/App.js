import React from 'react';
//Always use output.css
import './output.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPageComponent from './components/stateless/LandingPageComponent';
import Navigation from './components/stateless/Navigation';
import Header from './components/stateless/Header';
import FindMentor from './components/stateless/FindMentor'
import BecomeMentor from './components/stateless/BecomeMentor'
import LoginPage from './components/stateless/LoginPage'

const App = () => {
  return (
    <div className=''>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/find-mentor'>
            <FindMentor />
          </Route>
          <Route path='/become-mentor'>
            <BecomeMentor />
          </Route>
          <Route path='/login'>
            <LoginPage></LoginPage>
          </Route>
          <Route path='/'>
            <LandingPageComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}


export default App;