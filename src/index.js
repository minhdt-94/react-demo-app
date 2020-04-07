import React from 'react';
import ReactDOM from 'react-dom';
import './style/scss/style.scss';
import Router from './componets/Router';
import Redux from './componets/Redux';
// Redux common //
import createStore from 'redux';
// import App from './componets/App';
import Demo from './componets/Demo'
// import * as serviceWorker from './serviceWorker' ==> bỏ đi ko cần ;

// ReactDOM.render(
//     <Redux />,
//     document.getElementById('root')
// );


ReactDOM.render(
    <Demo />,
    document.getElementById('root')
);

// var counter = 0;
// setInterval(function(){
//     counter = counter + 1;
//     console.log('updating...' + counter)
// },1000)

// function UserInfo(props){
//     return( // return trả về jsx
//         <div align="center">
//             <p>Name: {props.name}</p>
//             <p>Email: {props.email}</p>
//         </div>
//     );
// }
// const element = <UserInfo name="DTM" email="dtm@gmail.com"/>
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// function UserInfo(props){
//     return( // return trả về jsx
//         <div align="center">
//             <p>Name: {props.name}</p>
//             <p>Email: {props.email}</p>
//         </div>
//     );
// }
// ReactDOM.render(
//     <UserInfo name="DTM1" email="dtm1@gmail.com"/>,
//     document.getElementById('root')
// );

// class UserDetail extends React.Component{
//     render(){
//         return(
//             <div className="user_top">
//                 <p>Name: {this.props.name}</p>
//                 <p>Email: {this.props.email}</p>
//             </div>
//         );
//     }
// }
// class UserOther extends React.Component{
//     render(){
//         return(
//             <div className="user_bottom">
//                 <p>Other Infomation: {this.props.otherInfomation}</p>
//             </div>
//         );
//     }
// }
// class UserInfo extends React.Component { // Định nghĩ ES6 class vẫn phổ biến hơn theo chuẩn 
//   render() {
//     return( // return trả về jsx
//         <div>
//             <UserDetail name={this.props.name} email={this.props.email} />
//             <UserOther otherInfomation={this.props.otherInfomation} />
//         </div>
//     );
//   }
// }
// const element = <UserInfo name="Minh" email="minhdt@gmail.com" otherInfomation="Demosâsasas" />
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// hàm khởi tạo constructor
// class Counter extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {seconds : 0}; //chỉ trong hàm mới đc gán
//     }
//     incCounter(){ //  định nghiã hàm để gọi
//         this.setState( // đây là 1 sette để thay đổi giá trị thuộc tính statestate
//             (preState, props) => ({ // => là arrow function
//                 seconds: preState.seconds + 1
//             })
//             // prevState là hàm lúc ban đầu gán trước đó dùng lưu giá trị lúc trước lúc sau

//         );
//     }
//     componentDidMount(){ // đc gọi khi componets đc tạo ra và hiện nên trên giao diện
//         this.timesID = setInterval(
//             () => this.incCounter(),
//             1000
//         );
//     }
//     componentWillUnmount(){ // khi xoá đi ko dùng nữa thì gọi hàm này 
//         clearInterval(this.timesID)
//     }
//     render(){
//         return(
//             <div align="center">
//                 <h1>Đây là counter</h1>
//                 <h2>Seconds: {this.state.seconds} s</h2>
//             </div>
//         );
//     }
// };
// ReactDOM.render(
//     <Counter />,
//     document.getElementById('root')
// );


// function updateTimer(){
//     const element = (
//         <div align="center">
//             <h1>Demo Update Timer</h1>
//             <h2>Thời Gian: {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
//     // gọi hàm này để trả vể UI giao diên
// }
// setInterval(updateTimer,1000);

// Tạo giờ theo chuẩn ES6
// class Clock extends React.Component{
//     render(){
//         return(
//             <div align="center">
//                 <h1>Đây là đồng hồ </h1>
//                 <h2>{this.props.date.toLocaleTimeString()}</h2>
//             </div>
//         );

//     }
// }
// function tick(){
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     );
// };
// setInterval(tick,1000)

// Tạo giờ theo chuẩn ES6 state
// class Clock extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {date:new Date()};
//     }
    
//     render(){
//         return(
//             <div align="center">
//                 <h1>Đây là đồng hồ </h1>
//                 <h2>{this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         );
//     }
// }
// function tick(){
//     ReactDOM.render(
//         <Clock />,
//         document.getElementById('root')
//     );
// };
// setInterval(tick,1000)

// Taok theo lifecycle 
// function FormatTime(props){
//     return(
//         <h2>{props.date.toLocaleTimeString()}</h2>
//     )
    
// }
// class Clock extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {date:new Date()};
//     }

//     tick(){
//         this.setState ({// thực hiện thay đổi state
//             date: new Date()
//         });
//     }

//     componentDidMount() { // hàm khởi tạo đầu tiên khi render về dom ra màn hình
//         this.timesID = setInterval(
//             () => this.tick(),
//             1000
//         )
//     }
    
//     componentWillUnmount() { // hàm kết thúc ko dùng nữa
//         clearInterval(this.timesID)
//     }
    
//     render(){
//         return(
//             <div align="center">
//                 <h1>Đây là đồng hồ </h1>
//                 <FormatTime date={this.state.date} />
//             </div>
//         );
//     }
// }

// function DoubleClock(){
//     return(
//         <div>
//             <Clock />
//             <Clock />
//             <Clock />
//             <Clock />
//         </div>
//     )
// }

// ReactDOM.render(
//     <DoubleClock />,
//     document.getElementById('root')
// );


// Tạo giờ theo props function
// function Clock(props){
//     return(
//         <div>
//             <h1>Đây là đồng hồ </h1>
//             <h2>{props.date.toLocaleTimeString()}</h2>
//         </div>
//     );
// }
// function tick(){
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     );
// };
// setInterval(tick,1000)

// Click Action Button 
// class ToggleButton extends React.Component{
//     // constructor(props){// để khởi tạo hàm hay là thiết lập state
//     //     super(props);// dùng để thực hiện hàm this.props trong phạm vi hàm state
//     // }
//     constructor(props){
//         super(props);
//         this.state = {isOn : true};
//         this.buttonClick = this.buttonClick.bind(this);
//     }
//     buttonClick() {
//         this.setState(prevState => (
//             {
//                 isOn : !prevState.isOn
//             }
//         ));
//     }

//     // buttonClick = () => { // hàm mũi tên arror function
//     //     this.setState(prevState => ({
//     //         isOn: !prevState.isOn
//     //         }
//     //     ));
//     // }

//     render(){
//         return(
//             <button className="toogle_button" onClick={this.buttonClick}>
//                 Click Nut {this.state.isOn ? "On" : "Off"}
//             </button>
//         );
//     }
// };
// ReactDOM.render(
//     <ToggleButton />,
//     document.getElementById('root')
// );

// Render có điều kiện
// class LoginComponets extends React.Component {
//   constructor(props){
//       super(props);
//       this.state = {isLoginIn:false}
//   }
//   handleLogout = () =>{
//       this.setState({isLoginIn:false}); //lưu giá trị vào state
//   }
//   handleLogin = () =>{
//       this.setState({isLoginIn:true});
//   }
//   render() {
//     let myButton = null;
//     let title = null;
//     var isLoginIn = this.state.isLoginIn;
//     if(isLoginIn){
//         myButton = <button className="btn btn-primary" onClick={this.handleLogout}>Logout</button>
//     }else{
//         myButton = <button className="btn btn-primary" onClick={this.handleLogin}>Login</button>
//     }
//     title = isLoginIn ? <h1>Bạn đã đăng nhập</h1> : <h1>Bạn đã đăng xuất</h1>
//     return(
//         <div className="container text-center padding-top-30">
//             {title}
//             {myButton}
//         </div>
//     );
//   }
// }
// ReactDOM.render(
//     <LoginComponets />,
//     document.getElementById('root')
// );

// class MailStatic extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() { 
//         const newMesseger = this.props.newMesseger
//         return ( 
//             <div>
//                 <h1>Mail Static</h1>
//                 {newMesseger.length > 0 &&
//                     <h2>You have {newMesseger.length}</h2>
//                 }
//             </div>
//          );
//     }
// }
// const newMesseger = (['demo','demo1','demo2','demo2'])
// ReactDOM.render(
//     <MailStatic newMesseger = {newMesseger} />,
//     document.getElementById('root')
// );

// Form Componets
// class FormComponets extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {textData:""};
//     }

//     handleChange = (e) => {
//         this.setState({textData : e.target.value}) // cái này để lưu vào setState khi mà gõ vào còn submit chỉ check thôi
//     }
//     handleSubmit = (e) => {
//         alert("You submit text data:" + this.state.textData);
//         e.preventDefault();// để giữ nguyên dữ liệu khi submit bỏ default mặc định của nó đi
//     }

//     render() { 
//         return (
//             <React.Fragment>
//             <form onSubmit={this.handleSubmit} className="form_custom d-flex justify-content-center padding-15">
//                 <label className="no-margin form-inline">
//                     Your name:
//                     <input placeholder="Enter text here..." className="form-control margin-left-10" type="text" value={this.state.textData} onChange={this.handleChange} />
//                     <input type="submit" value="Submit" className="btn btn-danger margin-left-10"/>
//                 </label>
//             </form>
//             </React.Fragment>
//         );
//     }
// }
// ReactDOM.render(
//     <FormComponets />,
//     document.getElementById('root')
// );

// List and key
// function ListItem(props){
//     return (
//         <li>props.value</li>
//     )
// }
// class AnimalsComponets extends Component {
//     constructor(props) {
//         super(props);
//         this.props = props.animals.map(
//             (animals,index) => <ListItem key={animals} value={index.toString() + '' + animals} />
//         );       
//     }
//     render() { 
//         return ( 
//             <ul>
//                 {this.ListItem}
//             </ul>
//         );
//     }
// }
 
// export default AnimalsComponets;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
