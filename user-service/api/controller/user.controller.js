const Model = require("../model/user.model");
const passUtil = require("../util/hash")

exports.getAllUsers = (req, res, error) => {
    Model.getAll(req.body)
        .then((users) => {
            res.status(200).send({ messages: "All users" });
        })
        .catch((err) => {
            console.error(err);
        });
};
exports.createUser = (req, res, error) => {
    passUtil.hashPassword(req.body.password)
    .then((hash) => {
        Model
        .createUser({...req.body, hash})
            .then((data) => {
                res.status(201).send({ ...data, message: "Usuario criado com sucesso" });
            })
            .catch((err) => {
                console.error(err);
                res.status(400).send({ messages: err });
            });
    })
};
exports.updateUser = (req, res, error) => {
    Model.updateUser(req.body)
        .then((users) => {
            res.status(200).send({ messages: "All users" });
        })
        .catch((err) => {
            console.error(err);
        });
};
