const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const userRouter = require('./user');

app.use('/users/',userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("111222333")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
