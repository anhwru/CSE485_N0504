import React, {Component} from 'react';

class Parallax extends Component {
    render() {
        return (
           <section>
               <div className="sec1">
                   <h2> " Luôn mang lại cho bạn những gì tốt đẹp nhất "</h2>
                   <img src="img/pr3.png" className="para1" />
                   <img src="img/pr4.png" className="para2" />
               </div>
           </section>
        );
    }
}

export default Parallax;