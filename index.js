const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');
const mysql = require('mysql');

const loge = require('./middleware/logger')
const app = express();
//create connection
const db = mysql.createConnection({
    host:  'localhost',
    user: 'root',
    password : 'password'
}); 

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected');
});

app.get('/createdb',(req, res)=>{
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database Created..');
    });
});

// app.get('/', (req, res)=>{
//     //res.send("<h1>Hello World<\h1>");
//     res.sendfile(path.join(__dirname, 'html', 'index.html'));
// })
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(loge);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => res.render('index',{
    title: 'Members App', 
    members
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server starte on port ${PORT}`));
