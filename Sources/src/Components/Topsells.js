import React, {Component} from 'react';
import Topsell from "./Topsell";

class Topsells extends Component {
    render() {
        return (
            <div>
            <div className="topsell" data-aos="fade-left">
                <Topsell anhweb="img/web7.png" alt="anh" tentrang="Education" motaweb="Web tổ chức giáo dục" giaweb="1290k" nen="nenv"/>
                <Topsell anhweb="img/web6.png"  alt="anh" tentrang="Hospital" motaweb="Website tổ chức y tế" giaweb="790k" nen="nenx"/>
                <Topsell anhweb="img/web1.png"  alt="anh" tentrang="Business" motaweb="Công ty,doanh nghiệp..." giaweb="1790k" nen="nenh"/>
            </div>
            <div className="topsell" data-aos="fade-right">
                <Topsell anhweb="img/web4.png"  alt="anh" tentrang="Blogger" motaweb="Trang tin tức cá nhân" giaweb="390k" nen="nenl"/>
                <Topsell anhweb="img/web5.png"  alt="anh" tentrang="Restaurant" motaweb="Website nhà hàng" giaweb="790k" nen="nenc"/>
                <Topsell anhweb="img/web8.png"  alt="anh" tentrang="Editor" motaweb="Mô hình trình bày ý tưởng" giaweb="290k" nen="nendt"/>
            </div>
            </div>
        );
    }
}

export default Topsells;