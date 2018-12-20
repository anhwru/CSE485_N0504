import React, {Component} from 'react';
import Teams from "./Teams";
import Parallax from "./Parallax";
import Counter from "./Counter";
import Advantage from "./Advantage";
import Client from "./Client";
import Title from "./Title";
import Aboutus from "./Aboutus";

class About extends Component {
    render() {
        return (
            <div>
                <Title tieude="Tại sao là chúng tôi?" colr="deeppink" kieucd="fade-down"/>
                <Aboutus/>
                <Title tieude="Vượt trội" colr="orangred" kieucd="flip-up"/>
                <Advantage/>
                <Title tieude="Đội ngũ giàu kinh nghiệm" colr="tomato" kieucd="zoom-out-down"/>
                <Teams/>
                <Parallax/>
            </div>
        );
    }
}

export default About;