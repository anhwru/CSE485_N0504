import React, { Component } from 'react';
import {
    BrowserRouter as Router,

} from 'react-router-dom'
import Menu from "./Components/Menu";
import Progress_bar from "./Components/Progress_bar";
import Totop from "./Components/Totop";
import Footer from "./Components/Footer";
import Url from "./Router/Url";




class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Progress_bar/>
                <Totop/>
                <Menu/>
                <Url/>
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
