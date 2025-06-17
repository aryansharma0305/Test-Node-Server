const fs = require('fs');
const https = require('https');
const http = require('http');
const express = require('express');
const app = express();

// Your existing HTML
const basicHtml = `<!DOCTYPE html>
<html>
<head>
    <title>My App</title>
</head>
<body>
    <h1>Welcome to My App</h1>
    <p>This is a simple HTML page served by Express.</p>
</body>
</html>
`;

app.get('/', (req, res) => {
  res.send(basicHtml);
});

// Redirect HTTP (port 80) to HTTPS
http.createServer((req, res) => {
  res.writeHead(301, { "Location": `https://${req.headers.host}${req.url}` });
  res.end();
}).listen(80);

// HTTPS setup with Let's Encrypt certs
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/notsapp.aryan-sharma.xyz/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/notsapp.aryan-sharma.xyz/fullchain.pem')
};

https.createServer(options, app).listen(443, () => {
  console.log(`🚀 HTTPS server running at https://notsapp.aryan-sharma.xyz`);
});
