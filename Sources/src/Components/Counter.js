import React, {Component} from 'react';
import MiniCount from "./Mini_count";

class Counter extends Component {
    render() {
        return (
            <div className="container" data-aos="zoom-out">
                <div id="counter" className="row text-center">
                    <MiniCount count_icon="fas fa-laptop-code" maxvalues='890' title_count="Dự Án"/>
                    <MiniCount count_icon="fas fa-user-tie" maxvalues='2500' title_count="Khách Hàng"/>
                    <MiniCount count_icon="fas fa-briefcase" maxvalues='55' title_count="Đối Tác"/>
                    <MiniCount count_icon="fas fa-users" maxvalues='168' title_count="Nhân Viên"/>
                </div>
            </div>
        );
    }
}

export default Counter;