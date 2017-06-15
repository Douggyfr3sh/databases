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

      db.query(queryString, queryArgs, function(err, results) {
        if (err) { throw err; }
        callback(results);
      });
    },
    post: function (msg, callback) {
      //TO DO: reference id_rooms and id_users from the correct tables in order to store them in the messages table.
      var msgsSql = 'INSERT INTO messages (text, timestamp, id_rooms, id_users) VALUE (?, ?, (SELECT id from rooms WHERE name = ? limit 1), (SELECT id from users WHERE name = ? limit 1))';
      var msgParams = [msg.message, msg.createdAt, msg.roomname, msg.username];

      db.query(msgsSql, msgParams, function(err, results) {
        callback(err, results);
      });
    } // a function which can be used to insert a message into the database
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

