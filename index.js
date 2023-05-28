const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Boss is sitting..........')
})

app.listen(port, () => {
    console.log(`bistro boss is running on :${port}`)
})