import React, {Component} from 'react';
import list from '../../../../../data/data.js';
class Lis extends Component{
    componentDidMount(){
        let cvs = document.querySelectorAll('.mycanvas');
        let data = [30,70,10,40];
        var deg = Math.PI/180;
        let start = 0;
        cvs.forEach((v, i) => {
            var ctx = v.getContext('2d');
            ctx.translate(30,30);
            
            ctx.beginPath();
            ctx.arc(0,0,25,0,2*Math.PI);
            ctx.fillStyle = '#f00';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(0,0,25,-90*deg,(data[start]/100*360-90)*deg);
            ctx.strokeStyle = '#FFC426';
            ctx.lineWidth = 6;
            ctx.stroke();
            ctx.closePath();


            ctx.beginPath();
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('抢购',0,0);
            ctx.closePath();
            start++;
        });  
    }
    render () {
        console.log(list);
        return (list.map((item, index) => {
            return (<li className="li" key={index}>
                <h2>{item.title} <span>| {item.date}</span></h2>
                <aside>
                    <a href="javescript:;">{item.number}</a>
                    <a href="javescript:;"><span>年化收益</span><em>.0%</em></a>
                    <a href="javescript:;"><span>期限</span><b><strong>{item.qixian}</strong>个月</b></a>
                    <a href="javescript:;"><canvas className='mycanvas' width='60' height='60'></canvas><small>已有<u>{item.people}</u>购买</small></a>
                </aside>
        </li>);
        }));
    }
}
export default Lis;