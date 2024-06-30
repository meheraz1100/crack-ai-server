const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { connect } = require('./utils/dbconnect');

// global middleware
app.use(cors());
app.use(express.json());

connect();

// routes
const paintingRoute = require('./routes/painting.route')
app.use('/paintings', paintingRoute);

app.get('/', (req, res) => {
    res.send({ data: 'Server runnig!', status: 200 });
})


app.listen(port, () => {
    console.log('server running on port ' + port);
});
