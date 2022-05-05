
import { evalPostExpression } from './src/index';
const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  const exp = req.body.expression
  const result = evalPostExpression(exp)

  const data = {
    result
  }
  res.json(data)
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});