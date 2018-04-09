const db = require("../models");

module.exports = {
    createUser: (req, res) => {
        const user = new db.User(req.body);
        user.save()
            .then(user => res.json(user))
            .catch(err => {
                console.log(err)
                res.sendStatus(400)
            });
    }
};