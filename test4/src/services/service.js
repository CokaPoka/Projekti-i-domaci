import axios from 'axios'

const BASE_URL = `http://dummy.restapiexample.com/api/v1`

export const sviZaposleni = () => {
    return axios.get(`${BASE_URL}/employees`)
}

export const dodajZaposlenog = (name,salary,age) => {
    return axios.post(`${BASE_URL}/create`, {name,salary,age})
}