import React, {Component} from 'react';
import SeoPrice from "./SeoPrice";

class Seopay extends Component {
    render() {
        return (
            <div className="container-fluid" data-aos="flip-right">
                <div className="container">
                    <div className="row">
                        <SeoPrice icongoi="fas fa-street-view" tengoiseo=" Tư nhân" giaseo="8000000" quymoseo="Toàn quốc" tg="3 tháng"/>
                        <SeoPrice icongoi="fas fa-store" tengoiseo=" Nhà hàng" giaseo="1800000" quymoseo="Toàn quốc" tg="3 tháng"/>
                        <SeoPrice icongoi="fas fa-university" tengoiseo=" Doanh nghiệp" giaseo="58000000" quymoseo="Toàn cầu" tg="6 tháng"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Seopay;