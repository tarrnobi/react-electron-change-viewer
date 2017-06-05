import {expect} from 'chai';
import dotenv from 'dotenv';
import {
  test_connection_procedure,
  make_api_call,
  prepare_url_params} from '../lib/helpers/vsts';

dotenv.config();
describe('helpers/vsts',()=>{
  describe('test_connection_procedure', () => {
    it('should return true if a valid host and PAT is passed in');
    it('should return a status message if an invalid host or PAT is passed in');
  });
  const hostname           = "exceedrasoftware"
  const incorrect_pat_code = process.env.VSTS_PERSONAL_ACCESS_TOKEN+'somejunk';
  const correct_pat_code   = process.env.VSTS_PERSONAL_ACCESS_TOKEN
  const http_method = "get"
  var   params      = {}
  describe('make_api_call', () =>{
    it('should return an error message when passed an incorrect PAT Code', () =>{
      const endpoint    = "projects"
      make_api_call(hostname, incorrect_pat_code, http_method, endpoint, params)
      .then(response => {
        expect(response).to.equal("Error 203 - Non-Authoritative Information - Please Check Your Personal Access Token");
      });
    });

    it('should return a list of changesets when passed tfvc/changesets');
  });

  describe('get_projects', () =>{
    it('should return a list of projects for the given PAT / Host');
  });

  describe('prepare_url_params', () =>{
    it('should escape provided strings and join them with an ampersand',()=>{
      var params = {
        parameter1: 'value_1',
        parameter2: 'value 2',
        parameter3: 'value&3',
      }
      const expected_value = 'parameter1=value_1&parameter2=value%202&parameter3=value%263'
      expect(prepare_url_params(params)).to.equal(expected_value);
    });
  });
});
