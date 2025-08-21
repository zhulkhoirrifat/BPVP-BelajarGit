const express = require('express');
const router = require('./src/routers/main');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})