// route that stores in the database
const Kudos = require("./models/Kudos.js");
const mongoose = require('mongoose');

module.exports = function (app) {
    app.get('/api/kudos', function (req, res) {
        Kudos.findOne({to: 'Andrew'}).then(function (data) {
            res.json(data);
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    app.post('/api/kudos', function (req, res) {
        Kudos.create({ to: req.body.to, from: req.body.from, title: req.body.title, body: req.body.body
        }).then(function (data) {
            res.json(data);
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
}