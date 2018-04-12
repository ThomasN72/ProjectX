import axios from 'axios';

export default {
    createUser: function(user) {
        // console.log("client axios");
        console.log(user);
        return axios.post('/api/users', user);
    },
    getUserData: function(id) {
        return axios.get("/api/users/" + id);
    }
}