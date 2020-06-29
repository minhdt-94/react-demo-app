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
                <li><Link to="/Login">Login</Link></li>
            </ul>
           
        </div>
        <div className="text-center padding-15gi">
            <Route exact path='/' component={Home} />
            <Route  path='/info' component={Info} />
            <Route  path='/news' component={News} />
            <Route  path='/contact' component={Contact} />
            <Route  path='/login' component={Login} />
        </div>
    </Router>
)

const Info = () => (
    <div>
        <h2>Info</h2>
    </div>
     // xử lý trong phạm vi scope dễ dàng hơn
 )

const Demo = () =>(
    <div>

    </div>
)

const Contact = () => (
    <div>
        <h2>Contact</h2>
    </div>
)

const Login = () => (
    <div className="container">
        <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                <div className="card-body">
                    <h5 className="card-title text-center">Sign In</h5>
                    <form className="form-signin">
                    <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                        <label htmlFor="inputEmail">Email address</label>
                    </div>
                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
  </div>
)

export default RouterComponents;