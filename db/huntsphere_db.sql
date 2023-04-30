-- -- The Beginning of the script
-- DROP DATABASE IF EXISTS `huntsphere_db`;
-- CREATE DATABASE `huntsphere_db`;
-- USE `huntsphere_db`;


-- -- Table structure for table `User`
-- DROP TABLE IF EXISTS `User`;
-- CREATE TABLE `User` (
--   `uid` int(8) NOT NULL,
--   `name_first` varchar(50),
--   `name_last` varchar(50),
--   PRIMARY KEY (`uid`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- ALTER TABLE `User` DISABLE KEYS;
-- INSERT INTO `User` VALUES (11111111,'Kiran','Sheikh'),(22222222,'Edgar','Gutierrez'),(33333333,'Santa','Claus'),(44444444,'Kiran','Mario');
-- ALTER TABLE `User` ENABLE KEYS;


-- -- Table structure for table `Host`
-- DROP TABLE IF EXISTS `Host`;
-- CREATE TABLE `Host` (
--   `uid` int(8),
--   PRIMARY KEY (`uid`),
--   FOREIGN KEY (`uid`) REFERENCES `User`(`uid`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- ALTER TABLE `Host` DISABLE KEYS;
-- INSERT INTO `Host` VALUES (11111111),(22222222),(44444444);
-- ALTER TABLE `Host` ENABLE KEYS;


-- -- Table structure for table `Hunts`
-- DROP TABLE IF EXISTS `Hunt`;
-- CREATE TABLE `Hunt` (
--   `hunt_id` int(5),
--   `host_id` int(8) NOT NULL,
--   `name` varchar(50),
--   `description` varchar(100),
--   `duration` TIME,
--   PRIMARY KEY (`hunt_id`, `host_id`),
--   FOREIGN KEY (`host_id`) REFERENCES `Host`(`uid`) ON DELETE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- ALTER TABLE `Hunt` DISABLE KEYS;
-- INSERT INTO `Hunt` VALUES (11111, 11111111, 'Park Hunt', 'Day at the park', '00:00:10'),(22222, 22222222, 'Beach Day', 'Hunt at the beach', '00:10:59');
-- ALTER TABLE `Hunt` ENABLE KEYS;


-- DROP TABLE IF EXISTS `Hunt_locations`;
-- CREATE TABLE `Hunt_locations` (
--   `hunt_id` int(5),
--   `location` varchar(50),
--   PRIMARY KEY (`hunt_id`, `location`),
--   FOREIGN KEY (`hunt_id`) REFERENCES `Hunt`(`hunt_id`) ON DELETE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- ALTER TABLE `Hunt_locations` DISABLE KEYS;
-- INSERT INTO `Hunt_locations` VALUES (11111,'Plaza Park'),(11111,'Costco'),(22222,'Laguna Beach');
-- ALTER TABLE `Hunt_locations` ENABLE KEYS;
-- -- The End of the Script