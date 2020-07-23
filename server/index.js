const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', createProxyMiddleware({ target: 'http://54.176.86.126/', changeOrigin: true }));
app.use('/reviews', createProxyMiddleware({ target: 'http://18.224.95.187/', changeOrigin: true }));
app.use('/carousel', createProxyMiddleware({ target: 'http://54.215.84.53/', changeOrigin: true }));
app.use('/photogallery', createProxyMiddleware({ target: 'http://ec2-18-221-5-8.us-east-2.compute.amazonaws.com:3004/', changeOrigin: true }));

app.listen(port, () => console.log(`Listening at http://localhost:${port}/`));