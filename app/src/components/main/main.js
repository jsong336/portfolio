import React, {Component} from 'react'
import MainNav from './main-nav'
import IntroductionBox from './introduction'

const MainStyle = {
    height: "100vh",
    //margin:"0",
}

class Main extends Component{
    render(){
        return (
          <div style={ MainStyle } id="main">       
            <MainNav/>
            <IntroductionBox/>
          </div>
        );
      }
}

export default Main;