const Model = require("../model/user.model");
const passUtil = require("../util/hash")

/**
 * Buscar todos usuario
 * @param {status} res 200
 * @param {Object} res Todos usuarios
 * @param {status} error 400
 */
exports.getAllUsers = (req, res, error) => {
    Model.getAll(req.body)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            console.error(err);
        });
};

/**
 * Buscar usuario para login
 * @param {Object} body do usuario para login
 * @param {status} res 200
 * @param {Object} res Usuario
 * @param {status} error 400
 */
exports.loginUser = (req, res, error) => {
    
    Model.loginUser({
        password: req.body.password, 
        body: req.body,
        id: req.params.id
    })
    .then((result) => {
        passUtil.comparePassword(req.body.password, result[0].password)
            .then((user) => {
                if (user)
                res.status(200).send({ login:result[0].name, password: true });
            })
            .catch((err) => {
                res.status(200).send({ message: 'Senha incorreta' })
                console.error(err);
            });
    })
    .catch((err) => {
        res.status(200).send({ message: 'Usuario incorreta' })
        console.error(err);
    });
};

/**
 * Criar usuario
 * @param {Object} body dados para criar usuario
 * @param {status} res 200
 * @param {Object} res Usuario criado
 * @param {status} error 400
 */
exports.createUser = (req, res, error) => {
    passUtil.hashPassword(req.body.password)
    .then((hash) => {
        Model
        .createUser({...req.body, hash})
            .then((data) => {
                res.status(201).send({ 
                    ...data, message: "Usuario criado com sucesso"
                });
            })
            .catch((err) => {
                console.error(err);
                res.status(400).send({ messages: err });
            });
    })
};

/**
 * Atualizar usuario
 * @param {id} params identificador do usuario
 * @param {Object} body dados para serem atualizados
 * @param {status} res 200
 * @param {Object} res Usuario atualizado
 * @param {status} error 400
 */
exports.updateUser = (req, res, error) => {
    Model.updateUser({id: req.params.id, body: req.body})
        .then((user) => {
            res.status(200).send({ 
                message: "Usuário atualizado com sucesso",
                data: user
            });
        })
        .catch((err) => {
            console.error(err);
        });
};

/**
 * Remover usuario
 * @param {id} params identificador do usuario
 * @param {status} res 200
 * @param {Object} res Usuario removido
 * @param {status} error 400
 */
exports.deleteUser = (req, res, error) => {
    Model.deleteUser(req.params.id)
        .then((user) => {
            res.status(200).send({
                message: "Usuario removido com sucesso",
                data: user
            });
        })
        .catch((err) => {
            console.error(err);
        });
};
