import React, {Component} from 'react'
import MainNav from './main-nav'
import IntroductionBox from './introduction'

const WelcomeStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL+"/assets/background1.jpg"})`,
  backgroundSize:"cover",  
  backgroundRepeat:"repeat",
  height: "100vh",
  border:"solid red",
  overflow:"scroll"
}

class Main extends Component{
    render(){
        return (
          <div id="main" style={WelcomeStyle}>       
            <MainNav/>
            <IntroductionBox/>
          </div>
        );
      }
}

export default Main;