const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = 3005;

app.get('/products', (req, res) => {
    res.send({
        error: false,
        code: 200,
        message: "OK",
        data: [
            {
                id: 1,
                title: 'Teclado gameaaar',
                imageAlias: 'tecladoGamer',
                description: 'Teclado gamer XABEO--111000000',
                price: 99.99,
                stock: 10
            },
            {
                id: 2,
                title: 'Mouse gamer',
                imageAlias: 'mouseGamer',
                description: 'Mouse gamer XABEO--111000000',
                price: 199.99,
                stock: 10
            },
            {
                id: 3,
                title: 'Audífonos gamer',
                imageAlias: 'audífonosGamer',
                description: 'Audífonos gamer XABEO--111000000',
                price: 299.99,
                stock: 10
            },
            {
                id: 4,
                title: 'Tarjeta gráfica NVIDIA',
                imageAlias: 'tarjetaNvidia',
                description: 'NVIDIA gtx 1000 XABEO--111000000',
                price: 399.99,
                stock: 10
            }
        ]
    });
});

app.listen(port, () => {
    console.log('Server Proxy ready :' + port);
});