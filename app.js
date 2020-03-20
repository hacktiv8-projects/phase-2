require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes');
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use('/', router);
// app.use('/api', router);
// semua routing selain yg dipunya * << 404

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})