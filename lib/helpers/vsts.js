/*
  TODO:
*/
import btoa from 'btoa';
import format from '../utils/utils';
var rp = require('request-promise');
var esc = encodeURIComponent;
const VSTS_REST_URL = "https://{0}.visualstudio.com/DefaultCollection/_apis/{1}?{2}";

function make_api_call(hostname, personal_access_token, method, endpoint, parameters){
  parameters["api-version"] = "1.0"
  var url = VSTS_REST_URL.format(hostname, endpoint, prepare_url_params(parameters));
  var options = {
    url: url,
    qa: parameters,
    headers: {
      'Authorization': 'Basic ' + btoa(':{0}'.format(personal_access_token))
    },
    json: true,
    resolveWithFullResponse: true,
  }
  return rp.get(options)
  .then(response => {
    if (response.statusCode == 203){
      throw Error("Error {0} - {1} - Please Check Your Personal Access Token".format(response.statusCode, response.statusMessage));
    }
    // if (!response.ok) {
    //   throw Error(response.statusText);
    // }
    return response;
  }) //.then(response => response.json())
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


exports.make_api_call = make_api_call;
exports.get_projects = get_projects;
exports.prepare_url_params = prepare_url_params;
