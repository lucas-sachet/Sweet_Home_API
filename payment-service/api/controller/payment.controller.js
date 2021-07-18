const Model = require('../model/payment.model');

exports.getAllPayments = (req, res, error) => {
    Model.getAll(req.body).then((users) => {
        res.status(200).send({ messages: 'All payments'})
    }).catch((err) => {
        log.error(err)
    })
}
