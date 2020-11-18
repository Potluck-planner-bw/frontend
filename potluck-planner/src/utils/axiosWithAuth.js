import axios from 'axios';

const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		baseURL: 'https://potluck-planner-bw2020.herokuapp.com/api',
		headers: {
			authorization: token,
		},
	});
};

<<<<<<< HEAD
export default axiosWithAuth;
=======
export default axiosWithAuth;
>>>>>>> f1e50d7574287a0f058233b977e050f43136b2ff
