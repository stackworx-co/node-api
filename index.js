const express = require('express');
const path = require('path');
const uuid = require('uuid');

const loge = require('./middleware/logger')
const app = express();

// app.get('/', (req, res)=>{
//     //res.send("<h1>Hello World<\h1>");
//     res.sendfile(path.join(__dirname, 'html', 'index.html'));
// })


//app.use(loge);

app.use(express.json());
//app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server starte on port ${PORT}`));
