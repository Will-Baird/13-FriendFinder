var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../Public/Home.html"));
    });

    app.get("/Quiz", function(req, res) {
        res.sendFile(path.join(__dirname, "../Public/Questions.html"));
    });

}; // module.exports