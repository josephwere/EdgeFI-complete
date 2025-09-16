
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/users');
const partnerRoutes = require('./routes/partners');
const adminRoutes = require('./routes/admin');
const investorRoutes = require('./routes/investors');

const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/partners', partnerRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/investors', investorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`EdgeFi backend running on port ${PORT}`));
