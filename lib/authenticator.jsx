import React, {PropTypes} from 'react';

class Authenticator extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label"
              for="hostname">Host Name:</label>
            <div className="col-sm-10">
              <input className="form-control"
                name="hostname"
                type="text"/>
              </div>
          </div>
        <div className="form-group">
          <label className="col-sm-2 control-label"
            for="personal_access_token">Personal Access Token:</label>
          <div className="col-sm-10">
            <input className="form-control"
              name="personal_access_token"
              type="text"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-primary"
              name="submit"
              type="submit"
              value="Submit">Submit</button>
          </div>
        </div>
        </form>
    );
  }
}

export default Authenticator;
