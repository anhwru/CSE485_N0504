import React, {Component} from 'react';
import Title from "./Title";
import Seoservice from "./Seoservice";
import Seopay from "./Seopay";
import Seouseful from "./Seouseful";

class Service extends Component {
    render() {
        return (
            <div>
                <Seoservice/>
                <Title tieude="Gói SEO" colr="deeppink" kieucd="zoom-out" />
                <Seopay/>
                <Title tieude="Lợi ích của SEO" colr="orangred" kieucd="flip-right" />
                <Seouseful/>

            </div>
        );
    }
}

export default Service;