const mySql = require("../../mysql-connect.js");

exports.GetAll = (data) => {
    const sql = "select";
    return execSql(sql);
};

exports.createUser = (data) => {
    const sql = `
    INSERT INTO user(
        password,
        name,
        cpf,
        birth
    )
    VALUES (
        '${data.hash}',
        '${data.name}',
        '${data.cpf}',
        '${data.birth}'
    );`;
    return mySql.execSql(sql)
};
