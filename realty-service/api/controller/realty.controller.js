const Model = require('../model/realty.model');

exports.getAllRealtys = (req, res, error) => {
    Model.getAll(req.body).then((users) => {
        res.status(200).send({ messages: 'All realties'})
    }).catch((err) => {
        log.error(err)
    })
}
