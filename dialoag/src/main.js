import React from 'react';
import ReactDOM from 'react-dom';
if(NODE.ENV === 'development'){
    console.log('处于开发阶段');
} else{
    console.log('处于打包阶段');
}
import Home from './views/home/home.jsx';
ReactDOM.render(
    <div>
        <Home></Home>
    </div>,
    document.getElementById('root')
)