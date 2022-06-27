require('dotenv').config();

const http = require('http');
const express = require('express');
const cors = require('cors');

const homeRoutes = require('./routes/home');
const detailRoutes = require('./routes/detail');
const reservationRoutes = require('./routes/reservation');
const myPageRoutes = require('./routes/myPage');
const wishListRoutes = require('./routes/wishList');
const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup');

const app = express();
app.use(cors());
app.use(express.json());

app.use(homeRoutes);
app.use(detailRoutes);
app.use(reservationRoutes);
app.use(myPageRoutes);
app.use(wishListRoutes);
app.use(loginRoutes);
app.use(signupRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({ message: err.message });
});

const server = http.createServer(app);
const PORT = process.env.PORT || 10010;

const start = async () => {
  try {
    server.listen(PORT, () => {
      console.log(`server start : http://localhost:${PORT}/`);
    });
  } catch (err) {
    console.err(err);
    await prisma.$disconnect();
  }
};

start();
