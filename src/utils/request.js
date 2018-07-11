/**
 * Created by apple on 2018/6/20.
 */


function get(url,params,headers) {
  const header = {
    'content-type': 'application/json'
  };
  if (params) {
    let paramsArray = [];
    //encodeURIComponent
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
      url += '&' + paramsArray.join('&')
    }
  }
  return new Promise((resolve,reject)=>{
    fetch(url,{method: 'GET', headers:{...header , ...headers}})
      .then(res =>{
        resolve(res.json())
      })
      .catch(err =>{
        reject(err)
      })
  })
}


export {
  get
}
