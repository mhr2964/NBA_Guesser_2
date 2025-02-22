const express = require('express');

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const path = require('path');

const filePath404Page = path.resolve(__dirname, '../client/404.html');
console.log(filePath404Page);
const app = express();
app.use(express.static('client'));

const indexRouter = require('./routes/index.js');

// ** COMMENT OUT ALL THE ROUTES **
app.use('/', indexRouter);

app.all('*', (req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});

// app.use((req, res, next) => {
//     res.status(404).sendFile(filePath404Page);
//   })

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
