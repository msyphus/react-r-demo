const express = require('express')
const app = express()
const port = 8000

const bananaRoutes = require('./Routes/bananaRoutes');
const RRoutes = require('./Routes/RRoutes');

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.use('/api/bananas', bananaRoutes);
app.use('/api/RRoutes', RRoutes);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});