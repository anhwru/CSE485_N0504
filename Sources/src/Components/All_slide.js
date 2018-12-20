import React, {Component} from 'react';
import MiniSlide from "./Mini_Slide";

class AllSlide extends Component {
    constructor(props){
        super(props);
        this.state={
            slimg : [
                {slimg: '../img/SEO2.jpeg',

                    },
        ]
        }
    }
    render() {

        var Slider_1 = '../img/SEO2.jpeg';
        const slide_1 = {
            backgroundImage: 'url("'+Slider_1+'")',
            backgroundSize: 'cover',

        };
        var Slider_2 = '../img/ds2.jpg';
        const slide_2 = {
            backgroundImage: 'url("'+Slider_2+'")',
            backgroundSize: 'cover',
        };
        var Slider_3 = '../img/up3.jpg';
        const slide_3 = {
            backgroundImage: 'url("'+Slider_3+'")',
            backgroundSize: 'cover',
        };
        return (

            <div className="slidewrapper">
                <div className="slider" data-aos="zoom-out">
                    <ul>
                       <MiniSlide active="activesld" dc="dc1" slideclass="sl1" slidemore="m1" smalltt="tt1" style={slide_1} nenduoi="../img/xd.png" nentren="../img/xt.png" slidetitle=" SEO " slidecontent="Với nhiều năm kinh nhiệm trong việc SEO chúng tôi tự tịn khẳng định mang đến thứ hạng rank luôn lọt top tìm kiếm, SEO chưa bao giờ dễ dàng hơn thế! Bạn đã sẵn sàng?!" />

                       <MiniSlide dc="dc2" slideclass="sl2" slidemore="m2" smalltt="tt2" style={slide_2} nenduoi="../img/nd1.png" nentren="../img/nt.png" slidetitle=" DESIGN " slidecontent="Với đội ngũ xây dựng giao diện hàng đầu của chúng tôi đảm bảo website của bạn sẽ có được vẻ đẹp hoàn chỉnh nhất và luôn cập nhật những xu hướng thiết kế mới nhất" />

                       <MiniSlide dc="dc3" slideclass="sl3" slidemore="m3" smalltt="tt3" style={slide_3} nenduoi="../img/dd.png" nentren="../img/dt.png" slidetitle=" USAGE " slidecontent="Các trang web đều thân thiện với người dùng từ giao diện đến tính năng, tối ưu cho việc sử dụng dễ dàng nâng cấp và thuận tiện cho việc bảo trì! Sẽ không có rào cản nào cho website của bạn. " />
                    </ul>
                </div>
                {/*nút chuyển slide*/}
                <div className="nextslide">
                    <ul>
                        <li className="isactive">1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AllSlide;