import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://potluck-planner-bw2020.herokuapp.com/api',
        
        headers: {
            authorization: token
        }
    })
}