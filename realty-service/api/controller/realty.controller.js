const Model = require('../model/realty.model');

/**
 * Buscar todos contratos

 * @param {status} res 200
 * @param {Object} res Todos usuarios
 * @param {status} error 400
 */
exports.getAllRealtys = (req, res, error) => {
    Model
    .getAll()
    .then((realtys) => {
        res.status(200).send({ 
            messages: 'Todos imóveis',
            data: realtys
        })
    }).catch((err) => {
        log.error(err)
    })
}

/**
 * Criar registro imóvel
 * @param {Object} body dados para criar imóvel
 * @param {status} res 200
 * @param {Object} res Imóvel criado
 * @param {status} error 400
 */
exports.createRealty = (req, res, error) => {
    passUtil.hashPassword(req.body.password)
    .then((hash) => {
        Model
        .createRealty({...req.body, hash})
            .then((data) => {
                res.status(201).send({ 
                    ...data, message: "Imóvel criado com sucesso"
                });
            })
            .catch((err) => {
                console.error(err);
                res.status(400).send({ messages: err });
            });
    })
};

/**
 * Atualizar Imóvel
 * @param {id} params identificador do Imóvel
 * @param {Object} body dados para serem atualizados
 * @param {status} res 200
 * @param {Object} res Imóvel atualizado
 * @param {status} error 400
 */
exports.updateRealty = (req, res, error) => {
    Model.updateRealty(req.params.id)
        .then((realty) => {
            res.status(200).send({ 
                message: "Imóvel atualizado com sucesso",
                data: realty
            });
        })
        .catch((err) => {
            console.error(err);
        });
};

/**
 * Remover Imóvel
 * @param {id} params identificador do Imóvel
 * @param {status} res 200
 * @param {Object} res Imóvel removido
 * @param {status} error 400
 */
exports.deleteRealty = (req, res, error) => {
    Model.deleteRealty(req.params.id)
        .then((realty) => {
            res.status(200).send({
                message: "Imóvel removido com sucesso",
                data: realty
            });
        })
        .catch((err) => {
            console.error(err);
        });
};

