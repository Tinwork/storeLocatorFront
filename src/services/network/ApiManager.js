import { isNull, isEmpty } from 'lodash';

let instance = null;

/**
 * Api Manager
 */
class ApiManager {

  /**
   * Get
   * 
   * @param {String} API 
   * @param {Array} queryString 
   * @return {Async} <Promise>
   */
  get(API, queryString) {
    if (isEmpty(queryString))
      return this._execute(API);

    let qs = '';
    
    for (let idx = 0; idx < queryString.length; idx++) {
      if (idx === 0)
        qs += `?`;
      else if (idx !== queryString.length - 1)
        qs += `&`;
      
      qs += `${queryString[idx].label}=${queryString[idx].value}`;
    }

    const endpoint = API + qs;

    return this._execute(endpoint);
  }

  /**
   * Post
   * 
   * @param {String} API 
   * @param {Object} datas 
   * @return {Async} <Promise>
   */
  post(API, datas) {
    const body = JSON.stringify(datas);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');

    const params = {
      method: 'POST',
      headers: headers,
      body,
      mode: 'no-cors'
    };

    return this._execute(API, params);
  }

  /**
   * _Execute
   * 
   * @param {Object} request
   * @return {Object} res
   */
  async _execute(request, datas) {
    let fetchReq = null;
    
    if (isEmpty(datas))
        fetchReq = await fetch(request);
    else
        fetchReq = await fetch(request, datas);

    const res = await fetchReq.json();
    return res;
  }
}

/**
 * Get Instance
 *    Return an instance of the Api Manager :: Singleton
 */
const getInstance = () => {
  if (isNull(instance))
    instance = new ApiManager();

  return instance;
}

export default getInstance;