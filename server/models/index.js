var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // a function which produces all the messages
      var queryString = 'SELECT messages.id, messages.text, rooms.name, users.name \
        FROM messages, rooms, users WHERE \
        messages.id_rooms rooms.id AND \
        messages.id_users = users.id \
        ORDER BY messages.id DESC';
      var queryArgs = [];

      db.query(queryString, (err, results) => {
        callback(results);
      });
    },

    // a function which can be used to insert a message into the database
    post: function (data, callback) {
      //TO DO: reference id_rooms and id_users from the correct tables in order to store them in the messages table.
      var queryString = 'INSERT INTO messages (text, id_rooms, id_users) \
        VALUES (?, (SELECT id from rooms WHERE name = ? limit 1), \
        (SELECT id from users WHERE name = ? limit 1))';

      db.query(queryString, data, (err, results) => {
        callback(err, results);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (msg, callback) {
      var usersSql = 'INSERT INTO users (name) VALUES (?)';
      var usersParams = [msg.username];
      db.query(usersSql, usersParams, function(err, results) {
        callback(err, results);
      });
    }
  },

  rooms: {
    get: function() {},
    post: function (msg, callback) {
      var roomsSql = 'INSERT INTO rooms (name) VALUES (?)';
      var roomsParams = [msg.roomname];
      db.query(roomsSql, roomsParams, function(err, results) {
        callback(err, results);
      });
    }
  }
};

