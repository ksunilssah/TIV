const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 3000;

LoadJSONFile = (fileName) => {
  const filePath = `./data/${fileName}`;
  const json = fs.readFileSync(filePath);
  return JSON.parse(json);
}


app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/volume_shocker', (req, res) => {
  const result = LoadJSONFile('volume-shocker.json');
  result.long.map((item) => {
    item.lastPrice = Math.floor(Math.random() * 100);
    item.changePrice = (Math.random() * 5).toFixed(2);
    item.pChange = (Math.random() * 5).toFixed(2);
    item.totalTurnover = Math.floor(Math.random() * 1000000);
  });
  result.short.map((item) => {
    item.lastPrice = Math.floor(Math.random() * 100);
    item.changePrice = -(Math.random() * 5).toFixed(2);
    item.pChange = -(Math.random() * 5).toFixed(2);
    item.totalTurnover = Math.floor(Math.random() * 1000000);
  });
  res.send({ ...result });

})

app.get('/high_momentum', (req, res) => {
  const result = LoadJSONFile('high-momentum.json');
  result.long.map((item) => {
    item.lastPrice = Math.floor(Math.random() * 100);
    item.changePrice = (Math.random() * 5).toFixed(2);
    item.pChange = (Math.random() * 5).toFixed(2);
    item.totalTurnover = Math.floor(Math.random() * 1000000);
  });
  result.short.map((item) => {
    item.lastPrice = Math.floor(Math.random() * 100);
    item.changePrice = -(Math.random() * 5).toFixed(2);
    item.pChange = -(Math.random() * 5).toFixed(2);
    item.totalTurnover = Math.floor(Math.random() * 1000000);
  });
  res.send({ ...result });
})

app.get('/sectoral_view', (req, res) => {
  const result = LoadJSONFile('sectoral-view.json');
  result.map((item) => {
    item.lastPrice = Math.floor(Math.random() * 100);
    item.changePrice = (Math.random() * 5).toFixed(2);
    item.pChange = (Math.random() * 5).toFixed(2);
  });
  res.send(result);
});

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, app);
server.listen(port, () => {
  console.log(`App listening at https://localhost:${port}`)
})