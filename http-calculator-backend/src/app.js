const express = require('express');
const bodyParser = require('body-parser');
const calculatorRoutes = require('./routes/calculator');

const app = express();
const PORT = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/calculator', calculatorRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});