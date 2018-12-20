import React, {Component} from 'react';

class MiniSlide extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <li className={this.props.active}>
                <div className="sliders">
                    <div className={"image " +this.props.slideclass} style={this.props.style} />
                    <img src={this.props.nenduoi} alt="anh" className="nd1" />
                    <img src={this.props.nenduoi} alt="anh" className="nd2" />
                    <img src={this.props.nentren} alt="anh" className="nt" />
                    <div className="content">
                        <small className={this.props.smalltt}>{this.props.slidetitle} </small>
                        <div className={"decoration "+this.props.dc }/>
                        <p>{this.props.slidecontent}</p>
                        <a className={"more "+this.props.slidemore} href="true">See more... <i className="fas fa-caret-down" /></a>
                    </div>
                </div>
            </li>

        );
    }
}

export default MiniSlide;