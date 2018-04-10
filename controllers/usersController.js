const db = require("../models");

module.exports = {
    createUser: (req, res) => {
        console.log("----CONTROLLER SERVER SIDE----");
        console.log("req.body");
        console.log(req.body);
        console.log(req.body.user);
        console.log("--------------------------");
        const user = new db.User(req.body);
        user.save()
            .then(user => res.json(user))
            .catch(err => {
                console.log(err)
                res.sendStatus(400)
            });
    },
    findUser: (req, res) => {
        db.user
            .find(req.query)
    }
};