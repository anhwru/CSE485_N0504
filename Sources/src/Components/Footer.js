import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (


            <div className="row footer">
                <div className="col-lg-4">
                    <h3>Công ty TM-DT RNode</h3>
                    <strong>Địa chỉ</strong><span> Tầng 30 Toà nhà Lotte 54 Liễu Giai - Ba Đình - Hà Nội</span><br />
                    <strong> SĐT : </strong><span> 0325743535 </span><br />
                    <strong> Email : </strong><span> anhnv620@wru.vn</span><br />
                    <strong> Mã số thuế : </strong><span> 96831174</span>
                </div>
                <div className="col-lg-4">
                    <h3 className="cwu">Kết nối với chúng tôi</h3>
                    <ul>
                        <li> <i className="fa fa-facebook"/></li>
                        <li><i className="fab fa-twitter" /></li>
                        <li><i className="fab fa-google-plus-g" /></li>
                        <li><i className="fab fa-codepen" /></li>
                    </ul>
                </div>
                <div className="col-lg-4 map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4240.898497407099!2d105.80896413164267!3d21.030939351166694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1544053106413" width="100%" height="100%" frameBorder={0} style={{border: 0}} allowFullScreen />
                </div>
            </div>

        );
    }
}

export default Footer;