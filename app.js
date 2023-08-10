const express = require('express');
const app = express();

require('dotenv').config();

const db = require('./app/configs/db');
db();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(require('./app/routes/router.auth'));
app.use(require('./app/routes/router.blog'));
app.use(require('./app/routes/router.category'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));