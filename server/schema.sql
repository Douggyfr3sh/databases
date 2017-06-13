CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--    Describe your table here.
-- );

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER(10) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `friends` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Rooms'
--
-- ---

-- DROP TABLE IF EXISTS `rooms`;

CREATE TABLE `rooms` (
  `id` INTEGER(10) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL DEFAULT 'lobby',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Messages'
--
-- ---

-- DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `text` MEDIUMTEXT NOT NULL DEFAULT 'NULL',
  `timestamp` INTEGER(20) NOT NULL,
  `id_rooms` INTEGER(10) NOT NULL,
  `id_users` INTEGER(10) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (id_rooms) REFERENCES `rooms` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`name`,`friends`) VALUES
-- ('','','');
-- INSERT INTO `Rooms` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `Messages` (`id`,`text`,`timestamp`,`id_Rooms`,`id_Users`) VALUES
-- ('','','','','');