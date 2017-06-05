/*
  TODO:
    - Test Connection procedure:
      - Tests that the connection to VSTS is valid for the host name
      and PAT that was provided.
    - Make API Call (host, endpoint, PAT)
      Calls the REST API specified. Gets the JSON response and adds
      the response code. returns the JSON response.
    -
*/
var fetch = require('node-fetch');
var btoa = require('btoa');
import format from '../utils/utils';
var esc = encodeURIComponent;
const VSTS_REST_URL = "https://{0}.visualstudio.com/DefaultCollection/_apis/{1}?{2}";
function test_connection_procedure(hostname, personal_access_token){

}

function make_api_call(hostname, personal_access_token, method, endpoint, parameters){
  parameters["api-version"] = "1.0"
  var url = VSTS_REST_URL.format(hostname, endpoint, prepare_url_params(parameters));
  var return_value;
  return fetch(VSTS_REST_URL.format(hostname, endpoint), {
    method: method,
    headers: {
      'Authorization': 'Basic '+ btoa(':{0}'.format(personal_access_token))
    },
  }).then(response => {
    if (response.status == 203){
      throw Error("Error {0} - {1} - Please Check Your Personal Access Token".format(response.status, response.statusText));
    }
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }).then(response => response.json())
  .then(json => json)
  .catch(err => err.message);
}

function get_projects(hostname, personal_access_token){
  var parameters = {}
  make_api_call(hostname, personal_access_token, 'projects', parameters)
}

function prepare_url_params(params){
  return Object.keys(params).map(k => esc(k) + '=' + esc(params[k])).join('&');
}


exports.test_connection_procedure = test_connection_procedure;
exports.make_api_call = make_api_call;
exports.get_projects = get_projects;
exports.prepare_url_params = prepare_url_params;
