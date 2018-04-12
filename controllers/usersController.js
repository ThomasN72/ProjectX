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
    getUser: (req, res) => {
        console.log("Getting user.........");
        console.log("ID", req.params.email);
        console.log("-------req.params---------");
        console.log(req.params);
        console.log("===================");
        db.user
            .find({ email: req.params.email })
            .then(user => res.json(user))
            .catch(err => res.status(422).json(err))
    }
};