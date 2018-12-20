import React, {Component} from 'react';
import Title from "./Title";
import Advantage from "./Advantage";
import Client from "./Client";
import Parallax from "./Parallax";
import Connect from "./Connect";
import AllStep from "./All_step";
import AllSlide from "./All_slide";
import Vote from "./Vote";
import Counter from "./Counter";
import Advanindex from "./Advanindex";


class Home extends Component {
    render() {
        return (
            <div>
                <AllSlide/>
                <Title tieude="Thế mạnh" colr="orangred" kieucd="fade-up" />
                <Advanindex/>
                <Title tieude="Combo dịch vụ của chúng tôi" colr="deeppink" kieucd="fade-down" />
                <Connect/>
                <Title tieude="Quy trình nhanh gọn" colr="deepskyblue" kieucd="zoom-in" />
                <AllStep/>
                <Title tieude="khách hàng nói về chúng tôi" colr="cornflowerblue" kieucd="flip-down"/>
                <Vote/>
                <Title tieude="Thông số cơ bản" colr="deepskyblue" kieucd="fade-up"/>
                <Counter/>
                <Title tieude="Đối tác của chúng tôi" colr="navy" kieucd="zoom-out-down"/>
                <Client/>
                <Parallax/>

            </div>
        );
    }
}

export default Home;