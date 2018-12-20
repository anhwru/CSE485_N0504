import React, {Component} from 'react';
import Hosting from "./Hosting";
import axios from "axios";

class Hostings extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001').then(res =>{
            this.setState({
                data:res.data
            });
            console.log(this.state)
        });
    }
    render() {
        return (
            <div className="container-fluid" data-aos="flip-right">
                <div className="container">
                    <div className="row">
                        {
                            this.state.data.map((e,i)=>{
                                return(
                                    <Hosting key={i} icongoi="fa-paper-plane" tengoi="Basic" giahost="59000" bt="15GB" db="1" email="5" uptime="90%" hotro="fa-times-circle"/>
                                )
                            })
                        }


                        {/*<Hosting icongoi="fa-rocket" tengoi="Pro" giahost="359000" bt="Không giới hạn" db="Không giới hạn" email="Không giới hạn" uptime="99%" hotro="fa-check-circle"/>*/}
                        {/*<Hosting icongoi="fa-plane-departure" tengoi="Medium" giahost="159000" bt="Không giới hạn" db="3" email="20" uptime="99%" hotro="fa-check-circle"/>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default Hostings;