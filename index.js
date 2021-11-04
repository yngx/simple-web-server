const express = require('express');
const app = express();
const port = 3010;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/leadform', (req, res) => {
  console.log('Recieved data!');
  console.log(JSON.stringify(req.body, null, 2));
  res.status(200).end();
});

app.post('/dealform', (req, res) => {
  console.log('Recieved data!');
  console.log(JSON.stringify(req.body, null, 2));
  res.status(200).end();
});


app.listen(port, () => {
  console.log(`Simple server listening at http://localhost:${port}`);
});