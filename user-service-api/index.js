const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json([{
      name: 'bob',
      email: 'bob@gmail.com'
    },
    {
      name: 'Alice',
      email: 'alice@gmail.com'
    },
  ]);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
