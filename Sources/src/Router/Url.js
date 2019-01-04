import React, {Component} from 'react';
import {

    Route,
    Switch,
    Link, BrowserRouter

} from 'react-router-dom'

import Home from "../Components/Home";



import Login from "../Components/Login";
import Service from "../Components/Service";
import About from "../Components/About";
import Hosts from "../Components/Hosts";
import Ui from "../Components/UI";
import Valiform from "../Components/Formik";
import Nomatch from "../Components/Nomatch";
import Views from "../Components/Views";
import Invoice from "../Components/Invoice";
class Url extends Component {

    render() {
        return (



                        <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/seo" component={Service}/>
                        <Route path="/hosting" component={Hosts} />
                        <Route path="/template" component={Ui} />
                        <Route path="/about" component={About} />
                        <Route path="/yourinvoice" component={Invoice} />
                        <Route path="/ad625" component={Login} />
                        <Route path="/pay" component={Valiform} />
                        <Route path="/invoice" component={Views} />
                        <Route path="/*" component={Nomatch} />

                        </Switch>




        );
    }
}

export default Url;