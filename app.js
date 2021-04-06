const express = require('express');
const app = express();

const cors = require('cors');

const corsOptions = {
	origin: ['http://www.example.com', 'http://localhost:3000'],
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
	allowedHeaders: [
		'Content-Type',
		'Authorization',
		'Access-Control-Allow-Origin',
	],
};

app.use(cors(corsOptions));


app.engine('html', require('ejs').renderFile); // 使用html解析
app.set('view engine', 'ejs'); // view engine為固定格式, 使用ejs引擎(可置換)


app.get('/home', function (req, res)  // 進入首頁
{
    res.render('index.html');
});

app.get('/member', function (req, res) {
	res.render('member.html');
});

app.get('/member/:ID', function (req, res) {
	res.render('memberprofile.html');
});

app.get('/membertest', (req, res)=>{
	res.send('Hello Bitch!!');
})

app.listen(3000, function () {
	console.log('This is port 3000 Bro !!');
});
