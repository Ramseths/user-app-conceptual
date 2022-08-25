const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.set('port', 3200);
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.listen(app.get('port'), () => {
    console.log('Activo en el puerto 3200');
});

const userList = [{
        id: 1,
        user: 'Ram'
    },
    {
        id: 2,
        user: 'admin'
    }
];

app.get('/', (req, res) => {
    res.json(userList);
});

app.post('/create', (req, res) => {
    //const { id, user } = req.body;
    try {
        userList.push(req.body);
        res.json({ "message": "Registrado correctamente" });
    } catch (err) {
        res.status(500).end();
    }
});