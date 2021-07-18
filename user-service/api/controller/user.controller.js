const Model = require('../model/user.model');

exports.getAllUsers = (req, res, error) => {
    Model.getAll(req.body).then((users) => {
        res.status(200).send({ messages: 'All users'})
    }).catch((err) => {
        log.error(err)
    })
}
