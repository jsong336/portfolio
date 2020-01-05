import React, {Component} from 'react';
import './App.css';
import Main from './components/main/main';
import About from './components/about/about';

const AppStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL+"/assets/background.jpg"})`,
  backgroundSize:"cover",  
  backgroundRepeat:"repeat",
  //backgroundRepeat:"no repeat",
}

class App extends Component{
  render(){
    return (
      <div style={AppStyle}>       
        <Main/>
        <About/>
      </div>
    )
  }
}

export default App;
