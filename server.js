require('dotenv').config();

const http = require('http');
const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const userRouter = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(userRouter);

const server = http.createServer(app);
const PORT = process.env.PORT || 10010;
server.listen(PORT, () => {
  console.log(`server start : http://localhost:${PORT}/`);
});
