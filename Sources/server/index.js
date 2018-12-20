const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "company",
    charset : "utf8"
});
app.get('/',(req,res)=>{
    conn.connect(function(err) {
    if (err) throw err;
        conn.query("SELECT * FROM host limit 0,3", function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    });
});
app.listen('3001',()=>console.log('started'));


// lấy dl ra

// // kiểm tra kết nối
// conn.connect(function (err){
//     //nếu có nỗi thì in ra
//     if (err) throw err.stack;
//     //nếu thành công
//     console.log('Kết nối thành công');
// });
//
// đóng kết nối giải phóng băng thông
// conn.end(function(err) {
//     if (err) throw err;
//     console.log("Đã đóng kết nối");
// });