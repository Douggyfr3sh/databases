var models = require('../models');
var path = require('path');
var url = require ('url');
var fs = require ('fs');


module.exports = {

  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get( (err, results) => {
        if (err) {
          console.error(err);
        } else {
          res.json(results);
        }
      });
    },

    post: function (req, res) {
      var data = [req.body.message, req.body.roomname, req.body.username];
      models.messages.post(data, (err, results) => {
        if (err) {
          console.error(err);
        } else {
          res.sendStatus(201);
        }
      });

    }

  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get( (err, results) => {
        if (err) {
          console.error(err);
        } else {
          res.json(results);
        }
      });
    },

    post: function (req, res) {
      var data = [req.body.username];
      models.users.post(data, (err, results) => {
        if (err) {
          console.error(err);
        } else {
          res.sendStatus(201);
        }
      });
    }
  },

  rooms: {
    get: function (req, res) {
      models.rooms.get( (err, results) => {
        if (err) {
          console.error(err);
        } else {
          res.json(results);
        }
      });
    },

    post: function (req, res) {
      var data = [req.body.roomname];
      models.rooms.post(data, (err, results) => {
        if (err) {
          console.error(err);
        } else {
          res.sendStatus(201);
        }
      });
    }
  }
};
