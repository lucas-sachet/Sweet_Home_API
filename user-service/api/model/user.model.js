const mySql = require("../../mysql-connect.js");

exports.GetAll = (data) => {
    const sql = "select";
    return execSql(sql);
};

exports.loginUser = (data) => {
    const sql = `
        SELECT 
            name,
            password
        FROM user 
        WHERE id = '${data.id}'
    `;

    return mySql.execSql(sql);
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

exports.updateUser = (data) => {
    console.log(data);
    const sql = `
    UPDATE user
	SET 
        password = '${data.body.password}',
        name = '${data.body.name}',
        cpf = '${data.body.cpf}',
        birth = '${data.body.birth}'
    WHERE id = ${data.id};
    ;`;
    return mySql.execSql(sql)
};

exports.deleteUser = (data) => {
    const sql = `
    DELETE FROM user
    WHERE id = ${data}
    ;`;
    return mySql.execSql(sql)
};
