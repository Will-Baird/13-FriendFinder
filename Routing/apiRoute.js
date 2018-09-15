var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/list", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/list", function (req, res) {
        var newFriend = {
            name: req.body.name,
            age: req.body.age,
            link: req.body.link,
            answers: req.body.answers
        }

        friends.push(newFriend);
    });
}; // module.exports