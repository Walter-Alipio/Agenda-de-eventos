import {AxiosResponse} from 'axios'
export function userInfo({data}: AxiosResponse<any, any>){
  return {
        token: data.token,
        id: data.userSend.id,
        name: data.userSend.name,
        email: data.userSend.email
  }
}