
  //读取
  function Getstorage() {
    return JSON.parse(localStorage.getItem('user_key') || '[]') //解析不能为null  并且要为json字符串
  }

  //保存
  function SetStorage(val) {
    localStorage.setItem('user_key', JSON.stringify(val))
  }

export {
    Getstorage,
    SetStorage
}
