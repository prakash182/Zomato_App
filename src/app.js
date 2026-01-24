const express = require('express');

const app = express();


app.use(express.json());
app.use(CookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);



module.exports = app;