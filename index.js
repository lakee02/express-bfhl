const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.post('/bfhl', (req, res) => {
  const e=[];
  for (var i = 0; i < req.body.data.length; ++i) {
    if ((req.body.data[i] % 2) == 0) {
        e.push(req.body.data[i]);
  }
  const o=[];
  for (var i = 0; i < req.body.data.length; ++i) {
    if ((req.body.data[i] % 3) != 0) {
        o.push(req.body.data[i]);
  }
  const cArray=[]
  for (var i = 0; i < req.body.data.length; ++i) {
        req.body.data[i].toUpperCase() 
        c.push(req.body.data[i].toUpperCase() );
  }
  string.toUpperCase()
}
  const data = {
    is_success: 'true',
    user_id: 'john_doe_17091999',
    email: 'john@xyz.com',
    roll_number: 'ABCD123',
    odd_numbers: o,
    even_numbers: e,
    alphabets: cArray,
  };

  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
