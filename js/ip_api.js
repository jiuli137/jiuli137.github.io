// 获取访问者IP地址
function getVisitorIP(callback) {
    fetch('https://api.ipify.org?format=json')
     .then(response => response.json())
     .then(data => {
        const ip = data.ip;
        callback(ip);
      })
     .catch(error => {
        console.error('获取IP地址出错:', error);
      });
  }
  
  // 根据IP地址获取地理位置信息
  function getLocationByIP(ip, callback) {
    const apiUrl = `https://geoapi.qweather.com/v2/city/lookup?key=a5f7ed6637c449e4b2c7e1a1320000cd&location=${ip}`;
    fetch(apiUrl)
     .then(response => response.json())
     .then(data => {
        if (data.code === '200' && data.location && data.location.length > 0) {
          const city = data.location[0].name;
          callback(city);
        } else {
          console.error('获取地理位置出错或未找到匹配城市:', data);
        }
      })
     .catch(error => {
        console.error('请求地理位置接口出错:', error);
      });
  }
  
  // 主函数
  function getVisitorCity() {
    getVisitorIP(ip => {
      getLocationByIP(ip, city => {
        console.log('访问者所在城市:', city);
        // 你可以在这里将获取到的城市信息进行进一步处理或展示
      });
    });
  }
  
  // 调用主函数
  getVisitorCity();