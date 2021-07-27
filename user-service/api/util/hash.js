const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.hashPassword = (password) => {
    return bcrypt.hash(password, saltRounds);
}

exports.comparePassword = (data) => {
    return bcrypt.compare(data, data.hash);
}
