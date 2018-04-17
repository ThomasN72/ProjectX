import axios from 'axios';

export default {
    createUser: function(user) {
        // console.log("client axios");
        console.log(user);
        return axios.post('/api/users', user);
    },
    getUserData: function(id) {
        console.log("Getting user front end...");
        console.log(id);
        return axios.get("/api/users/" + id);
    },
    findAll: function() {
        return axios.get('/api/users');
    },
    findOne: function() {
        return axios.get('/api/users');
    }
}