import {expect} from 'chai';
import dotenv from 'dotenv';
import sinon from 'sinon';
import utils from '../lib/utils/utils';
var rp = require('request-promise');
var vsts = require('../lib/helpers/vsts');
dotenv.config();
describe('helpers/vsts',()=>{
  const hostname           = process.env.VSTS_HOSTNAME
  const incorrect_pat_code = process.env.VSTS_PERSONAL_ACCESS_TOKEN+'somejunk';
  const correct_pat_code   = process.env.VSTS_PERSONAL_ACCESS_TOKEN
  const http_method = "get"
  var   params      = {}
  var sandbox = sinon.sandbox.create();
  describe('make_api_call', () =>{
    afterEach(() =>{
      sandbox.restore();
    });
    it('should return an error message when passed an incorrect PAT Code', () =>{
      const endpoint    = "projects"
      sandbox.stub(rp, 'get').resolves("Error 203 - Non-Authoritative Information - Please Check Your Personal Access Token");;
      return vsts.make_api_call(hostname, incorrect_pat_code, http_method, endpoint, params)
      .then(response => {
        expect(response).to.equal("Error 203 - Non-Authoritative Information - Please Check Your Personal Access Token");

      });
    });

    it('should return a list of projects when passed the endpoint projects', () => {
      var json_response = {
        "count": 3,
        "value": [
          {
            "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
            "name": "Fabrikam-Fiber-TFVC",
            "description": "Team Foundation Version Control projects.",
            "url": "https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
            "state": "wellFormed"
          },
          {
            "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
            "name": "Fabrikam-Fiber-Git",
            "description": "Git projects",
            "url": "https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
            "state": "wellFormed"
          },
          {
            "id": "281f9a5b-af0d-49b4-a1df-fe6f5e5f84d0",
            "name": "TestGit",
            "url": "https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/projects/281f9a5b-af0d-49b4-a1df-fe6f5e5f84d0",
            "state": "wellFormed"
          }
        ]
      };
      sinon.stub(rp, 'get').resolves(json_response);
      var endpoint = '/projects/'
      return vsts.make_api_call(hostname, correct_pat_code, http_method, endpoint, params)
      .then(response => {
        expect(response.count).to.equal(3);
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
      expect(vsts.prepare_url_params(params)).to.equal(expected_value);
    });
  });
});
