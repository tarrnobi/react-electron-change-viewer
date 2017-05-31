import React, {PropTypes} from 'react';

class Authenticator extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <form className="form-inline">
        <input className="form-control"
          name="username"
          type="text"/>
        <input className="form-control"
          name="password"
          type="text"/>
      </form>
    );
  }
}


export default Authenticator;
