var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var fs = require('fs');
var ipAddress = '127.0.0.1:3010'
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'note'
})
var urlencodeParser = bodyParser.urlencoded({
    extended: true,
    limit: '1024mb'
})
app.use(bodyParser.json({ limit: '1024mb' }));
var staticSource = 'C:/Users/79263/Desktop/project/note';
app.use(express.static(staticSource));
app.get('/index.html', function (req, res) {
    res.send(__dirname + "/" + "index.html");
});
app.post('/submit', urlencodeParser, function (req, res) {
    var writeContent = '<!DOCTYPE html><html>' + req.body.content + '</html>';
    var sqlWords = {
        note_id: null,
        note_name: req.body.fileName + '.html',
        note_path: 'http://' + ipAddress + '/server/note/' + req.body.fileName + '.html',
        user_id: 1,
        note_date: new Date().toDateString()
    }
    if (!(req.body.fileName == null || !req.body.fileName)) {
        fs.writeFile('./note/' + req.body.fileName + '.html', writeContent, function (err) {
            if (err) {
                res.json({
                    failed: 'Writing file is fialed'
                });
                return;
            }
            else {
                fs.exists('./note/' + req.body.fileName + '.html',function(flag){
                    if(!flag){
                        connection.query('insert into note set ?', sqlWords, function (err, result) {
                            res.json({
                                success: 1
                            });
                            return result;
                        })
                        console.log(flag)
                    }
                })
                return;
            }
        });
    }
    else {
        res.json({
            failed: 'File name errror'
        });
        return;
    }
});
app.post('/selectAllNote', urlencodeParser, function (req, res) {
    connection.query('select * from note',function(err,result){
        res.json(eval(result))
    })
})
app.post('/replaceNote', urlencodeParser, function (req, res) {
    connection.query('select note_path,note_name from note where note_id='+req.body.note_id,function(err,result){
        res.json(eval(result))
        // console.log(eval(result)[0].note_path)
    })
})
var server = app.listen(3010, function () {
    var host = server.address().address;
    var port = server.address().port
    console.log('Note server started at http://%s%s', host, port)
})