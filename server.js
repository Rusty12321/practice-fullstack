const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const dotenv = require("dotenv");
dotenv.config();

const pg = require("pg");
const { Pool } = pg;
const pool = new Pool({connectionString: process.env.DATABASE_URL});
pool.connect();

const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get('/test', (req, res) => {
    res.json({"hello": "world"})
})

app.get('/api/songs', (req, res) => {
    pool.query('SELECT * FROM playlist').then((result) => {
        res.send(result.rows);
    })
})

app.listen(port, () => {
    console.log(`server is listening on port:${port}`);
})