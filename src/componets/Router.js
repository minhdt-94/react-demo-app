import React, { Component } from 'react';
import Home from './componets_router/Home';
import News from './componets_router/News';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

// class RouterComponents extends Component { // khai báo theo class chuẩn ES6
//     render() { 
//         return (
//             <Router>
//                <div>
//                     <ul>
//                         <li><a href="#Home">Home</a></li>
//                         <li><a href="#Info">Info</a></li>
//                         <li><a href="#News">News</a></li>
//                         <li><a href="#Contact">Contact</a></li>
//                     </ul>
//                </div>
//             </Router>
//         );
//     }
// }
const RouterComponents = () => ( // khởi tạo 1 component bằng lệnh arrow function 
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Info">Info</Link></li>
                <li><Link to="/News">News</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
           
        </div>
        <div className="text-center padding-15">
            <Route exact path='/' component={Home} />
            <Route  path='/info' component={Info} />
            <Route  path='/news' component={News} />
            <Route  path='/contact' component={Contact} />
        </div>
    </Router>
)

const Info = () => (
    <div>
        <h2>Info</h2>
    </div>
)


const Contact = () => (
    <div>
        <h2>Contact</h2>
    </div>
)

export default RouterComponents;