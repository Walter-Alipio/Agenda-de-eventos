interface userI{
  token:string,
  id: string,
  name: string,
  email:string
}


class DataUser {
  static setStorage = (data: userI)=>{
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("id", data.id);
    sessionStorage.setItem("name", data.name);
    sessionStorage.setItem("email", data.email);
  }

  static getToken = ()=>{
    return sessionStorage.getItem('token')
  }
}

export default DataUser;