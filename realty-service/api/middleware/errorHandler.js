module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof err === "string") {
        return res.status(400).json({ error: err });
    }

    return res.status(500).json({ error: err.message });
}
