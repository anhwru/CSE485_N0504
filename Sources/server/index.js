const express = require('express');
const app = express();
var cors = require('cors');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
app.use(bodyParser.json());
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(cors());
var Chance = require('chance');




// tạo kết  nối cơ sở dữ liệu
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "company",
    charset : "utf8",
    timezone: 'utc+7'

});

app.listen('3001',()=>console.log('started'));


// Xử lý khi người dùng post dữ liệu về server
app.post('/mail', function(req, res){
    // trạo mã xác nhận hoá đơn
        var chancestr = new Chance();
        var chance = chancestr.cf();
    // lấy dữ liệu người dùng vừa gửi về để xử lý email
    var email = req.body.email,
        fullname = req.body.fullname,
        phonenumber = req.body.phonenumber,
        address = req.body.address,
        cre = req.body.cre,
        tendv = req.body.tengoi,
        giadv = req.body.gia;

    let sql = 'insert into hoadon set ?';
    var dl= {
        email: email,
        tenkhach: fullname,
        diachi: address,
        sdtkh: phonenumber,
        sotkkh: cre,
        mahd: chance,
        tendv: tendv,
        giadv :giadv,
        ttthanhtoan:'Chưa thanh toán'

    };
    conn.query(sql,[dl],(error,data)=>{
        if(error){console.log(error)}
        else {
            res.send('ok')
        }
    });
// gửi mail với nodemailer
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'anhnv620@wru.vn',
                pass: 'nodejs625'
            }
        });
        let mailOptions = {
            from: 'RNode.com',
            to: email,
            subject: 'Mã hoá đơn từ Rnode',
            html:'<p>Xin chào ' + fullname  +' !'+
                '<p>Bạn có đơn đặt hàng tại Rnode<br/></p>'+
                '<p>Tên dịch vụ: '+tendv+'</br></p>' +
                '<p>Giá tiền: '+giadv+' đồng </p>'+
                '<p>Mã đơn hàng của bạn là: '+chance +'</p>'+
                '<p>Hãy sử dụng mã đơn hàng này để xem chi tiết hoá đơn của bạn tại rnode.com/invoice <br/></p>'+
                '<b style="color: red"><i>Lưu ý: </i> Hãy bảo mật mã đơn hàng này tránh tình trạng không mong muốn trong quá trình sử dụng dịch vụ của chúng tôi</b>'
        };
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            // console.log('Message sent: %s', info.messageId);
            // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        });
    });

});


// lấy dữ liệu của người muốn xem hoá đơn sau đó thực hiện ánh xạ với csdl
app.get('/hoadon', function(req, res){
    let vemail = req.query.email,
        vcode = req.query.vcode;
    let te = vemail;
    let tc = vcode;
    console.log(te+tc);
    var sql = 'select * from hoadon where email like ? and mahd like ?';
    conn.query(sql, [te,tc], function (err, result) {
        if (result == '')
        {
            console.log("Không có kết quả");
        }
        else
        {
            res.send(result);
        }
    });
});


// chỉ cho localhost:3000/hosting lấy dữ liệu từ datahost từ index.js server
app.get('/datahost',(req,res)=>{
    conn.connect(function() {
        conn.query("SELECT * FROM host", function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    });
});
// lấy data từ localhost:3000/dataseo
app.get('/dataseo',(req,res)=>{
    conn.connect(function() {
        conn.query("SELECT * FROM seoontop", function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    });
});


// chỉ cho localhost:3000/template lấy dữ liệu từ datahost từ index.js server
app.get('/datatemplate',(req,res)=>{
    conn.connect(function() {
        conn.query("SELECT * FROM template", function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    });
});

// phần login cho trang chủ
app.post('/login', function(req, res){

    var username = req.body.email,
        passwords = req.body.password;
    console.log(username + passwords)
});


