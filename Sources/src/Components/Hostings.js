import React, {Component} from 'react';
import Hosting from "./Hosting";
import axios from "axios";
// const  getHostdata = () =>{
//         return axios.get('http://localhost:3001')
//             .then((res) => res.data)
// };
class Hostings extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    // lấy dữ liệu khi click vào dịch vụ
    sendId(id) {
        localStorage.setItem('id', id);
        var data = localStorage.getItem('id');
        var splitted = data.split(" ", 2);
        for(var i=0; i< splitted.length; i++){
            // console.log(splitted[0]+ splitted[1])
        };
        var tengoi = splitted[0];
        var gia = splitted[1];
        localStorage.setItem('ten',tengoi);
        localStorage.setItem('gia',gia);
        // console.log(localStorage)

    }
    // lấy dữ liệu từ datahost
    componentDidMount() {
        axios.get('http://localhost:3001/datahost').then(res =>{
            this.setState({
                data:res.data
            });
            // console.log(this.state)
        });
    }


    render() {
        return (

            <div className="container-fluid" data-aos="flip-right">
                <div className="container">
                    <div className="row">
                        {
                            this.state.data.map((value,key) => {
                                if (key<3){
                                    return(
                                        <Hosting key={key} icongoi={value.iconhost} tengoi={value.tengoi} giahost={value.giahost} bt={value.bt} db={value.db} email={value.email} uptime={value.uptime} hotro={value.hotro} handleClick={this.sendId.bind(this,value.tengoi+" "+value.giahost)}/>
                                    )
                                }

                            })
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default Hostings;