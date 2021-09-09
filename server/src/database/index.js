const mysql = require("mysql2");
const sanitizeHtml = require("sanitize-html");

const options = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}; // MySQL Options
const connection = mysql.createConnection(options).promise(); // Create Connection

// Function to Sanitize and Prevent SQL Injections
async function query(sql, args) {
  // Prevent SQL Injections
  if (args)
    args.forEach((arg, i) => {
      args[i] = sanitizeHtml(arg, {
        allowedAttributes: {}, // Prevent HTML Attributes
        allowedTags: [], // Prevent HTML Tags
      });
    });
  try {
    const result = await connection.execute(sql, args); // Execute Queries
    return result[0]; // Return Query Rows
  } catch (e) {
    return { status: 400, error: e.message, code: "mysql-error" }; // Return MySQL Error
  }
}

module.exports = {
  connection,
  query,
};
