import React from 'react';

const user = {
    name:'Minhdt',
    email:'demo@gmail.com',
}

function Demo(){
  return(
    <div className="demo">
      <header align="center">
          <h1 style={{color:'red'}}>Xin Chào {user.name} , <br />Hãy gửi đến địa chỉ : {user.email} </h1>
      </header>
    </div>
  );
}

export default Demo;
 