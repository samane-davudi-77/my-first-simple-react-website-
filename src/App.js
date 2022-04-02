import React from 'react';
import Navbar from './components/Navbar';
import {Switch , Route} from 'react-router-dom'
import Home from './components/pages/Home';
import LoginPage from './components/login/LoginPage';
import Gallery from './components/Gallery';
import Signup from './components/login/Signup';
import Myfooter from './components/Myfooter';

const App = () => {
  return ( 
   <div>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/gallery" exact component={Gallery} />
    </Switch>
    <Myfooter />
   </div>
   );
}
 
export default App;