import React from 'react';
import News1 from './news1.jsx';
import News2 from './news2.jsx';
import * as router from 'react-router-dom';
let { BrowserRouter, Router, Route, Link, HashRouter } = router;
class List extends React.Component{
    render(){
        let {match} = this.props;
        return(<div>
            这是列表页
            <HashRouter>
                <div>
                    <ul>
                        <li><Link to={ match.url + '/news1'}>列表1</Link></li>
                        <li><Link to={ match.url + '/news2'}>列表2</Link></li>
                    </ul>
                    <ul>
                        <Route path={ match.url + '/news1'} component={News1}></Route>
                        <Route path={ match.url + '/news2'} component={News2}></Route>
                    </ul>
                </div>
            </HashRouter>
        </div>);
    }
}
export default List;