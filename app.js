const express = require('express')

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Привет, мир!");
});


app.listen(PORT, () =>
{
    console.log('Веб сервер слушает порт', PORT);
});


