import React, {Component} from 'react';
import './App.css';
import Main from './components/main/main';
import About from './components/about/about';
import Contact from './components/contact/contact';

class App extends Component{
  componentDidMount() {
    document.title = 'Portfolio';
  }
  render(){
    return (
      <div>
        <Main/>
        <About/>
        <Contact/>
      </div>
      )
  }
}

export default App;
