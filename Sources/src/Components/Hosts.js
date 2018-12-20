import React, {Component} from 'react';
import Hostings from "./Hostings";
import Host2S from "./Host2s";
import Host from "./Host";
import Title from "./Title";
import Morehost from "./Morehost";

class Hosts extends Component {
    render() {
        return (
            <div>
                <Title tieude="Các gói hosting" colr="tomato" kieucd="zoom-in" />
                <Hostings/>
                <Host/>
                <Title tieude="Chính sách" colr="deepskyblue" kieucd="fade-up" />
                <Morehost/>
                <Title tieude="Bạn có biết" colr="cornflowerblue" kieucd="fade-up" />
                <Host2S/>

            </div>
        );
    }
}

export default Hosts;