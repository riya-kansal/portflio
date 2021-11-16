import React from 'react';
import "./App.css" ;
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Work from './components/work';

import Footer from './components/Footer';
function App() {
  return (
    <>
    <Router> <Navbar/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/work" exact component={Work}/>
    </Switch> <Footer/>
    </Router>
  
    </>  
  );
}

export default App;
