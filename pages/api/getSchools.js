// pages/api/getSchools.js
import { connect } from 'your-mysql-connector'; // Use your MySQL connector library

export default async function handler(req, res) {
  // Connect to MySQL and fetch data from 'schools' table
  const connection = await connect();
  const [schools] = await connection.query('SELECT id, name, address, city, image FROM schools');

  res.status(200).json(schools);
}
