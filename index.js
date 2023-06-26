
const express = require('express');
const routes = require('./router/routes');

const app = express();
const port = 3000;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
