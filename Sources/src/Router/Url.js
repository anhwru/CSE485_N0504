import React, {Component} from 'react';
import {

    Route,

} from 'react-router-dom'

import Home from "../Components/Home";



import Login from "../Components/Login";
import Service from "../Components/Service";
import About from "../Components/About";
import Hosts from "../Components/Hosts";
import Topsells from "../Components/Topsells";
import Form from "../Components/Form";
import Ui from "../Components/UI";
class Url extends Component {
    render() {
        return (


                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/seo" component={Service}/>
                        <Route path="/hosting" component={Hosts} />
                        <Route path="/interface" component={Ui} />
                        <Route path="/about" component={About} />
                        <Route path="/ad625" component={Login} />
                        <Route path="/clientinfo" component={Form} />


                    </div>


        );
    }
}

export default Url;