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
app.use(express.static('public')); 
/* 
在express server提供靜態檔案服務  express.static為中介軟體方法
而app在此是express的元件, 這裡使用app.use去掛載這個中介軟體方法
*/
app.use('/js', express.static(__dirname + '/js')); // 第一個參數為 route名稱, 第二參數為實際檔案路徑(__dirname為當下目錄位置, 也就是express的起點程式app.js所在的位置)

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

app.get('/jquery', (req, res)=>{
	res.render('jquery.html');
})


app.listen(3000, function () {
	console.log('This is port 3000 Bro !!');
});
