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
        console.log("Email", req.params.email);
        console.log("-------req.params---------");
        console.log(req);
        console.log("-------req.params.id---------");
        console.log(req.params.id);
        // userEmail = req.params.email;
        console.log("===================");
        db.User.findOne({ _id: req.params.email })
            .then(user => {
                res.json(user);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },
    findAll: (req, res) => {
        db.User.find({})
            .then(res => console.log(res))
    },
    findOne: (req, res) => {
        console.log("=1=1=1=1=1=1=1=1=1=1=1=1=1=1=1=1=");
        db.User.find({ email: "cmatson93@gmail.com" })
        console.log("=====end======end=======end");
    }
};