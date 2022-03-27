const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 3000;

LoadJSONFile = (fileName) => {
  const filePath = `./data/${fileName}`;
  const json = fs.readFileSync(filePath);
  return JSON.parse(json);
};

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
});

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
});

app.get('/momentum_spike', (req, res) => {
  const result = LoadJSONFile('momentum-spike.json');
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
});

app.get('/pre_open_nifty50', (req, res) => {
  const result = LoadJSONFile('pre-open-nifty50.json');
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
});

app.get('/pre_open_niftybank', (req, res) => {
  const result = LoadJSONFile('pre-open-nifty-bank.json');
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
});

app.get('/pre_open_fo', (req, res) => {
  const result = LoadJSONFile('pre-open-fno.json');
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
});

app.get('/sectoral_view', (req, res) => {
  const result = LoadJSONFile('sectoral-view.json');
  result.map((item, index) => {
    item.lastPrice = Math.floor(Math.random() * 100);
    if (index > 2 && index < 5) {
      item.pChange = -(Math.random() * 5).toFixed(2);
      item.changePrice = -(Math.random() * 5).toFixed(2);
    } else {
      item.pChange = (Math.random() * 5).toFixed(2);
      item.changePrice = (Math.random() * 5).toFixed(2);
    }
  });
  res.send(result);
});

app.get('/index_view/:index', (req, res) => {
  const result = LoadJSONFile('nifty-auto.json');
  result.map((item) => {
    item.list.map((subItem) => {
      subItem.lastPrice = Math.floor(Math.random() * 100);
      subItem.changePrice = (Math.random() * 5).toFixed(2);
      subItem.pChange = (Math.random() * 5).toFixed(2);
    });
  });
  res.send(result);
});

app.get('/market_status', (req, res) => {
  const result = LoadJSONFile('market-status.json');
  result.index_price[2] = `${(Math.random() * 5).toFixed(2)}`;
  result.index_price[4] = `${(Math.random() * 5).toFixed(2)}`;
  result.NIFTY50.declines = -Math.floor(Math.random() * 10);
  result.NIFTY50.advances = Math.floor(Math.random() * 50);
  result.NIFTYBANK.declines = -Math.floor(Math.random() * 10);
  result.NIFTYBANK.advances = Math.floor(Math.random() * 50);
  result.FNO.declines = -Math.floor(Math.random() * 10);
  result.FNO.advances = Math.floor(Math.random() * 50);
  res.send(result);
});

app.get('/pre_open_stocks', (req, res) => {
  const result = LoadJSONFile('pre-open-stocks.json');
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
});

app.get('/pre_open_sectoral_view', (req, res) => {
  const result = LoadJSONFile('pre-open-sectoral-view.json');
  result.map((item, index) => {
    item.lastPrice = Math.floor(Math.random() * 100);
    if (index > 2 && index < 5) {
      item.pChange = -(Math.random() * 5).toFixed(2);
      item.changePrice = -(Math.random() * 5).toFixed(2);
    } else {
      item.pChange = (Math.random() * 5).toFixed(2);
      item.changePrice = (Math.random() * 5).toFixed(2);
    }
  });
  res.send(result);
});

app.get('/get_header', (req, res) => {
  const result = LoadJSONFile('header-stock.json');
  for (const [key, item] of Object.entries(result)) {
    if (key == 'NIFTY50') {
      item.ltp = Math.floor(Math.random() * 10000);
      item.pChange = -(Math.random() * 2).toFixed(2);
    } else {
      item.ltp = Math.floor(Math.random() * 10000);
      item.pChange = (Math.random() * 2).toFixed(2);
    }
  }
  res.send(result);
});

app.get('/pre_open_index_view/:index', (req, res) => {
  const result = LoadJSONFile('pre-open-index-view.json');
  result.map((item) => {
    item.list.map((subItem) => {
      subItem.lastPrice = Math.floor(Math.random() * 100);
      subItem.changePrice = (Math.random() * 5).toFixed(2);
      subItem.pChange = (Math.random() * 5).toFixed(2);
    });
  });
  res.send(result);
});

app.get('/get_candle/:id', (req, res) => {
  const result = LoadJSONFile('15-minute-breakout.json');
  res.send(result);
});

app.get('/get_strikes', (req, res) => {
  const result = LoadJSONFile('strike-price.json');
  res.send(result);
});

app.post('/get_trending_oi', (req, res) => {
  const result = LoadJSONFile('oi.json');
  res.send(result);
});

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
};

const server = https.createServer(options, app);
server.listen(port, () => {
  console.log(`App listening at https://localhost:${port}`);
});

/*
Up down should be button
zero handling in case of zero color should be white.
API: get_trending_oi
payload:
		{	symbol: BANKNIFTY,
			expiry: 2022-02-17
			time_interval: 3, 5, 15, 30, 45, 60
			strikes: [16500,16550,16700]
			date: 2022-02-17
    }

    get_strikes
*/
