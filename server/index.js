const express = require('express');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const PORT = 9000;
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../static')));

app.listen(PORT, () => {console.log('PS is Up')});