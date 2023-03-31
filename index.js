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
  const data = {
    is_success: '',
    user_id: 'john_doe_17091999',
    email: 'john@xyz.com',
    roll_number: 'ABCD123',
    odd_numbers: ['5'],
    even_numbers: [2, 4, 92],
    alphabets: 'B',
  };

  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
