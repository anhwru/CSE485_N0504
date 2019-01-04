import React, {Component} from 'react';
import Topsell from "./Topsell";
import axios from "axios";

class Topsells extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
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
    componentDidMount() {
        axios.get('http://localhost:3001/datatemplate').then(res =>{
            this.setState({
                data:res.data
            });
        });
    }
    render() {
                return (
                    <div>
                        <div className="topsell" data-aos="fade-left">

                            {
                                this.state.data.map((value,key) => {
                                    if (key<6){
                                        return(
                                            <Topsell anhweb={value.imgtem} alt="anh" tentrang={value.temname} motaweb={value.cattem}
                                        giaweb={value.temprice} demo={value.demotem} nen="nenx"
                                                     handleClick={this.sendId.bind(this,value.temname+" "+value.temprice)}/>
                                        )
                                    }

                                })
                            }

                            {/*<Topsell anhweb="img/web6.png" alt="anh" tentrang="Hospital" motaweb="Website tổ chức y tế"*/}
                                     {/*giaweb="790k" nen="nenx"/>*/}
                            {/*<Topsell anhweb="img/web1.png" alt="anh" tentrang="Business"*/}
                                     {/*motaweb="Công ty,doanh nghiệp..." giaweb="1790k" nen="nenh"/>*/}
                        </div>
                        <div className="topsell" data-aos="fade-right">
                            {
                                this.state.data.map((value,key) => {
                                    if (key>5&&key<12){
                                        return(
                                            <Topsell anhweb={value.imgtem} alt="anh" tentrang={value.temname} motaweb={value.cattem}
                                                     giaweb={value.temprice} demo={value.demotem} nen="nenx"  handleClick={this.sendId.bind(this,value.temname+" "+value.temprice)}/>
                                        )
                                    }

                                })
                            }
                            {/*<Topsell anhweb="img/web4.png" alt="anh" tentrang="Blogger" motaweb="Trang tin tức cá nhân"*/}
                                     {/*giaweb="390k" nen="nenl"/>*/}
                            {/*<Topsell anhweb="img/web5.png" alt="anh" tentrang="Restaurant" motaweb="Website nhà hàng"*/}
                                     {/*giaweb="790k" nen="nenc"/>*/}
                            {/*<Topsell anhweb="img/web8.png" alt="anh" tentrang="Editor"*/}
                                     {/*motaweb="Mô hình trình bày ý tưởng" giaweb="290k" nen="nendt"/>*/}
                        </div>
                    </div>
                );

        }
    }



export default Topsells;