var sqltest = require("./fw-sqltests.js");



/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Use the famous_scientists schema",
    "USE famous_scientists"
  ],
  [
    "Show the existing tables",
    "SHOW TABLES"
  ],
  [
    "Select al the records from the scientists table",
    "SELECT * FROM scientists"
  ],
  [
    "Select all the records from the scientists table where year_of_birth is greater than 1500. Sort them by year_of_birth in descending order",
    "SELECT * FROM scientists WHERE year_of_birth > 1500 ORDER BY year_of_birth DESC"
  ]
];


/*
 Init test
 sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands("sql-2-7/sql-2-7.sql", tasks);
