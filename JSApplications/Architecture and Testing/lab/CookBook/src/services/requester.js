const request = (method, url, data, token) => {
  const options = {
    method,
    headers: {}
  };
  if (method == "POST" || method == "PUT"){
    options.headers['Content-Type'] = 'application/json'
    options.body = data;
  }
  if (token){
    options.headers['X-Authorization'] = token
  }
  return fetch(url,options)
}


export default request
export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
