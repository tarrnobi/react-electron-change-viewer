import React from 'react';
import {mount,  shallow} from 'enzyme';
import {expect} from 'chai';
import Authenticator from '../lib/authenticator';

/*check the validation works
, check the login button is there
, check it submits the form correctly using the correct method
*/
describe('<Authenticator/>',() =>{
  it('should have an input for the username', ()=>{
    const wrapper = shallow(<Authenticator/>);
    const element = wrapper.find('input').filterWhere(n => n.props().name =="username");
    expect(element).to.have.length(1);
    // expect(wrapper.find('input').filterWhere(n => n.props().name=="username"));
  });

  it('should have an input for the password', ()=>{
    const wrapper = shallow(<Authenticator/>);
    const element = wrapper.find('input').filterWhere(n=> n.props().name=="password");
    expect(element).to.have.length(1);
  });

  it('should have a button to submit the form', () =>{
    const wrapper = shallow(<Authenticator/>);
    const element = wrapper.find('button').filterWhere(n=> n.props().name="submit");
    expect(element).to.have.length(1);
  });

  it('should submit the form using POST',() =>{
    expect(1).to.equal(0);
  });

  it('should validate the username',()=>{
    expect(1).to.equal(0);
  });

});
