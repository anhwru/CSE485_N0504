import React, {Component} from 'react';

class Advantage extends Component {
    render() {
        return (
                <div className="container hot">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-list li1" data-aos="fade-right" data-aos-offset={80} data-aos-easing="ease-in-sine">
                                <div className="service-list-col1">
                                    <i className="fas fa-shield-alt" aria-hidden="true" />
                                </div>
                                <div className="service-list-col2">
                                    <h3 className="t1">An toàn &amp; Bảo mật</h3>
                                    <p>Chúng tôi cam kết website của bạn được an toàn bởi các cuộc tấn công khi đăng kí hosting của chúng tôi</p>
                                </div>
                            </div>
                            <div className="service-list li2" data-aos="fade-right" data-aos-offset={80} data-aos-easing="ease-in-sine">
                                <div className="service-list-col1">
                                    <i className="fas fa-rocket" />
                                </div>
                                <div className="service-list-col2">
                                    <h3 className="t2">Tối ưu tốc độ</h3>
                                    <p>Công nghệ mới sử dụng Virtual DOM cho tốc độ tải trang nhanh nhất</p>
                                </div>
                            </div>
                            <div className="service-list li3" data-aos="fade-right" data-aos-offset={80} data-aos-easing="ease-in-sine">
                                <div className="service-list-col1">
                                    <i className="fas fa-cogs" />
                                </div>
                                <div className="service-list-col2">
                                    <h3 className="t3">Cài đặt dễ dàng</h3>
                                    <p>Mội quá trình vận hành trang web đều được rút ngắn thời gian, dễ dàng khi cần bảo trì nâng cấp</p>
                                </div>
                            </div>
                            <div className="service-list li4" data-aos="fade-right" data-aos-offset={10} data-aos-easing="ease-in-sine">
                                <div className="service-list-col1">
                                    <i className="fas fa-search" />
                                </div>
                                <div className="service-list-col2">
                                    <h3 className="t4">SEO hiệu quả</h3>
                                    <p>Sử dụng hai hình thức SEO On-page và Off-page giúp trang web có được thứ hạng tốt</p>
                                </div>
                            </div>
                        </div>
                        <figure className="col-lg-8 col-sm-6  text-right hi" data-aos="fade-left" data-aos-offset={220}>
                            <img src="../img/web10.png" alt="anh" />
                        </figure>
                    </div>
                </div>
        );
    }
}

export default Advantage;