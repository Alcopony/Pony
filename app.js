const express = require('express')
const {sequelize} = require('./db/models')

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Привет, мир!");
});


app.listen(PORT, async () =>
{
    console.log('Веб сервер слушает порт', PORT);

    try{
        await  sequelize.authenticate();
        console.log('БД-сервер подключён успешно');
    }catch(err){
        console.log('БД-сервер не подключён');
        console.log(err.message)
    }

});


