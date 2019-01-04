import React, {Component} from 'react';
import SeoPrice from "./SeoPrice";
import axios from "axios";

class Seopay extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    // lấy dữ liệu khi click vào dịch vụ
    sendId(id) {
        localStorage.setItem('seo', id);
        var data = localStorage.getItem('seo');
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
        axios.get('http://localhost:3001/dataseo').then(res =>{
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

                                    return(
                                        <SeoPrice icongoi={value.icongoi} tengoiseo={value.tengoi} giaseo={value.giaseo} quymoseo={value.quymo} tg={value.thoigian} handleClick={this.sendId.bind(this,value.tengoi+" "+value.giaseo)}/>
                                    )


                            })
                        }

                        {/*<SeoPrice icongoi="fas fa-store" tengoiseo=" Nhà hàng" giaseo="1800000" quymoseo="Toàn quốc" tg="3 tháng"/>*/}
                        {/*<SeoPrice icongoi="fas fa-university" tengoiseo=" Doanh nghiệp" giaseo="58000000" quymoseo="Toàn cầu" tg="6 tháng"/>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default Seopay;