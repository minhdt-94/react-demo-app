import React, { Component } from 'react';
import Home from './componets_router/Home';
import News from './componets_router/News';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// có 2 cách tạo 1 router cơ bản : là class và arrow function
// C1
// class RouterDemo extends React.Component{
//     render(){
//         return(
//             <Router>
//                 <div>
//                     <ul>
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/News">News</Link></li>
//                         <li><Link to="/Contact">Contact</Link></li>
//                     </ul>
//                     <Route exact path='/' component={Home} />
//                     <Route path='/News' component={News} />
//                     <Route path='/Contact' component={Contact} />
//                 </div>
//             </Router>
//         );
//     }
// }

const RouterDemo = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/News">News</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
            <Route exact path='/' component={Home} />
            <Route path='/News' component={News} />
            <Route path='/Contact' component={Contact} />
        </div>
    </Router>
);

const Contact = () => (
    <div>
        <h2>Contact</h2>
    </div>
);
export default RouterDemo;