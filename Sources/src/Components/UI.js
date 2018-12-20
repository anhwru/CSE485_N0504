import React, {Component} from 'react';
import AboutUi from "./AboutUI";
import Topsells from "./Topsells";
import Title from "./Title";

class Ui extends Component {
    render() {
        return (
            <div>
                <Title tieude="Mô tả" colr="navy" kieucd="fade-down"/>
                <AboutUi/>
                <Title tieude="Giao diện" colr="orangred" kieucd="fade-up"/>
                <Topsells/>
            </div>
        );
    }
}

export default Ui;