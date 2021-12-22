const express = require('express')
const app = express()
const port = 3000

getData = () => {
  const rowData = [];
  rowData.push(
    {
      symbol: "HAVELLS",
      volume: Math.floor(Math.random() * 550000),
      LTP: Math.floor(Math.random() * 20),
    },
    {
      symbol: "EXIDEIND",
      volume: Math.floor(Math.random() * 550000),
      LTP: Math.floor(Math.random() * 300),
    },
    {
      symbol: "PAYTM",
      volume: Math.floor(Math.random() * 550000),
      LTP: Math.floor(Math.random() * 600),
    },
    {
      symbol: "YESBANK",
      volume: Math.floor(Math.random() * 550000),
      LTP: Math.floor(Math.random() * 20),
    },
    {
      symbol: "SBI",
      volume: Math.floor(Math.random() * 550000),
      LTP: Math.floor(Math.random() * 300),
    },
    {
      symbol: "TATAMOTORS",
      volume: Math.floor(Math.random() * 550000),
      LTP: Math.floor(Math.random() * 600),
    },
  );
  return rowData;
};
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/stocks', (req, res) => {
  const result = getData();

  res.send({ result })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})