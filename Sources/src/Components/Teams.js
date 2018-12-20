import React, {Component} from 'react';
import Team from "./Team";

class Teams extends Component {
    render() {
        return (
            <section id="team" className="pb-5" data-aos="zoom-in">
                <div className="container" >
                    <div className="row">
                        <Team memimg="img/team2.jpg" memname="TRANG NT" linkfb="" linktw="" linklk="" linkgg="" memposition="Quản lý tài chính dự án" memdecription="This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button."/>
                        <Team memimg="img/teamleader.jpg" memname="ANH NV"  linkfb="" linktw="" linklk="" linkgg="" memposition="Phân tích hệ thống, xây dựng giao diện" memdecription="This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button."/>
                        <Team memimg="img/team1.png" memname="VIỆT ND"  linkfb="" linktw="" linklk="" linkgg="" memposition="Xử lý server - cơ sở dữ liệu" memdecription="This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button."/>
                        <Team memimg="img/team4.jpg" memname="CƯƠNG NB"  linkfb="" linktw="" linklk="" linkgg="" memposition="Xử lý tầng server" memdecription="This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button."/>
                        <Team memimg="img/team5.jpg" memname="THÀNH ĐT"  linkfb="" linktw="" linklk="" linkgg="" memposition="Quản lý bộ phận CSKH" memdecription="This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button."/>
                        <Team memimg="img/team6.jpg" memname="LAM NH"  linkfb="" linktw="" linklk="" linkgg="" memposition="Tối ưu hoá tìm kiếm google" memdecription="This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button."/>
                     </div>
                </div>
            </section>
        );
    }
}

export default Teams;