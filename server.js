const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Career-Ops</h1><p>The server is running at <a href="http://localhost:3000">http://localhost:3000</a>.</p>');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Career-Ops server listening on http://localhost:${PORT}`);
});
