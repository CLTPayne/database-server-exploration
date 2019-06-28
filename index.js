const express = require("express");
const app = express();
app.use(express.json());
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "password"
});

const port = 3000;

connection.connect();

connection.query("CREATE DATABASE IF NOT EXISTS race", function(err) {
  if (err) throw err;
  connection.query("USE race", function(err) {
    if (err) throw err;
    connection.query(
      "CREATE TABLE IF NOT EXISTS companies(" +
        "id INT NOT NULL AUTO_INCREMENT," +
        "PRIMARY KEY(id)," +
        "name VARCHAR(128) NOT NULL," +
        "year_founded SMALLINT," +
        "revenue VARCHAR(128)," +
        "currency VARCHAR(3)" +
        ")",
      function(err) {
        if (err) throw err;
        console.log("🚲");
      }
    );
  });
});

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/companies", (req, res) => {
  console.log("🚑", req.body);
  const company = req.body;

  const companyQueryValues = [
    company.name,
    company.yearFounded,
    company.revenue,
    company.currency
  ];

  console.log("🚛", companyQueryValues);

  connection.query(
    `
  INSERT INTO companies 
    (name, year_founded, revenue, currency) 
VALUES 
    (?, ?, ?, ?);`,
    companyQueryValues,
    function(err) {
      if (err) throw err;

      res.status(200).send(`Added ${company.name}`);
    }
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
