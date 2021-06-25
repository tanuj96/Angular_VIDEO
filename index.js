const express = require('express')
const port = 5000
const app = express();
const multipart = require('connect-multiparty')
const multipartMiddleware = multipart({uploadDir: './videos'});
const bodyParser = require("body-parser");


app.get('/api/upload',(req,res)=>{
    res.send('hi')
})

app.post('/api/upload', multipartMiddleware, (req, res) => {
    res.json({
        'message': 'Video uploaded'
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.listen(port, () => {
    console.log('server started')
})