const Model = require('../model/report.model');

exports.getAllReports = (req, res, error) => {
    Model.getAll(req.body).then((users) => {
        res.status(200).send({ messages: 'All reports'})
    }).catch((err) => {
        log.error(err)
    })
}
