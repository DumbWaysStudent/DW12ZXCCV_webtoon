import axios from 'axios'

export const basePATH = 'http://192.168.1.47:5000'

export const api = axios.create({
    baseURL : 'http://192.168.1.47:5000/api/v1'
})


export const headerOptions = token => {
  return { headers: { Authorization: `Bearer ${token}` } }
}