import React, {Component} from 'react';
import './App.css';
import Main from './components/main/main';
import About from './components/about/about';
import Contact from './components/contact/contact';

const WelcomeStyle = {
  //backgroundImage: `url(${process.env.PUBLIC_URL+"/assets/background2.jpg"})`,
  //backgroundSize:"cover",  
  //backgroundRepeat:"repeat",
  
  //backgroundRepeat:"no repeat",
}

const AboutStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL+"/assets/background1.jpg"})`,
  backgroundSize:"cover",  
  backgroundRepeat:"repeat",
}

const ContactStyle = {
  background: `url(${process.env.PUBLIC_URL + "/assets/background2.jpg"})`,
  backgroundSize:"cover",  
  backgroundRepeat:"repeat",
}

class App extends Component{
  render(){
    return (
      <div>  
        <div style={AboutStyle}>
          <Main/>
        </div> 
        <div style={WelcomeStyle}>
          <About/>  
        </div> 
        <div style={ContactStyle}>
          <Contact/>  
        </div>
      </div>

      )
  }
}

export default App;
