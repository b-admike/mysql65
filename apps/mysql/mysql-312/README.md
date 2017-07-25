Issue: https://github.com/strongloop/loopback-connector-mysql/issues/312

In order to reproduce this issue, you need to have a table created in your
database as follows:
```
create table `charTable` (`id` int primary key not null, `charcol` char(1) null);
```
You can check that it is properly created as follows:
```
mysql> describe `charTable`;
+---------+---------+------+-----+---------+-------+
| Field   | Type    | Null | Key | Default | Extra |
+---------+---------+------+-----+---------+-------+
| id      | int(11) | NO   | PRI | NULL    |       |
| charcol | char(1) | YES  |     | NULL    |       |
+---------+---------+------+-----+---------+-------+
```
