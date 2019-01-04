import React, { Component } from 'react';
import {
    BrowserRouter as Router,

} from 'react-router-dom'
import Menu from "./Components/Menu";
import Progressbar from "./Components/Progressbar";
import Totop from "./Components/Totop";
import Footer from "./Components/Footer";
import Url from "./Router/Url";




class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Progressbar/>
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
