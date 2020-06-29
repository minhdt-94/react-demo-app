import React, { Component } from 'react'
//tạo biến bằng const của es6
// const user = {
//     name:'Minhdt',
//     email:'minhdt1994@gmail.com',
//     phone:'033.5255.669'
// }

// var Demo = function(){
//   return(
//     <div className="demo">
//       <header style={{height:'100vh'}} align="center" className="d-flex align-items-center justify-content-center">
//         <h1 style={{color:'red'}}>Xin Chào {user.name} , <br />Hãy gửi đến địa chỉ : {user.email} <br /> Call mình : {user.phone}</h1>
//       </header>
//     </div>
//   );
// }

// const so = [1,2,3,4,5,6];
// // const so2 = so.map((x) => x*2 + ","); 
// const so3 = so.map((x) => (
//        <p key={x}>Số : {x+1*2}</p>
// ));
// class Demo extends Component {
//   render() { 
//     return ( 
//         <div>
//           {so3}
//         </div>
//      );
//   }
// }
class Demo extends Component {
  constructor(props) { // nhằm triển khai tạo hàm setstate 
    super(props); // để gọi hàm props trong phạm vi hàm state
    this.state = { 
      status:0,
     }
  } 
  
  thongbao = () => (
      alert('Xin chào dương thanh minh')
  )
  renderButton = () => (
    <div>
      <a name="" id="" className="btn btn-primary margin-right-15" href="#" role="button" onClick={() => this.editClick()}>Edit</a>
      <a name="" id="" className="btn btn-danger" href="#" role="button" onClick={() => this.thongbao()}>Alert</a>
    </div>
  )
  renderForm = () => (
    <div className="form-group d-flex">
      <input type="text" className="form-control margin-right-15" />
      <a name="" id="" className="btn btn-danger" href="#" role="button" onClick={() => this.removeClick()}>Save</a>
    </div>
  )
  checkView = () => {
    if(this.state.status === 0){
        return this.renderButton();
    } else {
      return this.renderForm();
    }
  }
  editClick = () => (
    this.setState({status:1})
  )
  removeClick = () => (
    this.setState({status:0})
  )
  render() { 
    return ( 
      <div className="d-flex align-items-center justify-content-center margin-top-30">
        {this.checkView()}
      </div>
     );
  }
}
export default Demo;
 