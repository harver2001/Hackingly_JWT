import axios from "axios";

export const fetchData = async (method, url, payload) => {
    axios({
        method: method,
        url: url,
        data: payload
    })
    .then((response) => {
        console.log(response.data);
        return response.data;
    })
    .catch((error) => {
        if(error.status === 400 || error.status === 401 || error.status === 403) {
            refreshToken();
            axios({
                method: method,
                url: url,
                data: payload
            })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                //Logout the user then or tell that session has expired
                return err.message;
            })
        } else {
            return error.message;
        }
    })
}

const refreshToken = async() => {
    const refresh_token = localStorage.getItem('refreshToken');
    axios({
        method: 'PUT',
        url: 'https://api.hackingly.xyz/users/refresh_token',
        data: {
            refresh_token: refresh_token
        }
    })
    .then((response) => {
        console.log(response.data);
    })

}