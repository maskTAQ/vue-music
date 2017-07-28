import originJSONP from 'jsonp'

const param = (data) => {
  let url = '';
  for (let k in data) {
    let value = data[k] !== undefined
      ? data[k]
      : '';
    url += `&${k}=${encodeURIComponent(value)}`
  }

  //去掉第一个参数的&符号
  return url
    ? url.substring(1)
    : ''
}

export default function jsonp(url, data, option) {
  //判断原来的url有没有？ 没有加上？有加上&
  url += (url.includes('?')
    ? '&'
    : '?') + param(data);
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err);
      }
    });
  });
}
