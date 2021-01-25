import React from 'react';


const SignIn = (props) => {


return (
  <div>
    <button onClick={(e) => props.handleLogin(e)}>click</button>
  </div>
)

}
export default SignIn