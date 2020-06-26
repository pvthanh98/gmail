const express = require("express");
const app = express();
const http = require("http");
require("dotenv").config();
http.createServer(app).listen(8080, ()=>{
    console.log("server running")
})
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static(__dirname + '/public'));

require("./database/DBConnect");
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
var randomstring = require("randomstring");

var User = require('./database/model/User');
// phần đăng nhập làm bình thường, chỉ cần kiểm tra match email và password là ok. không cần cầu kì nên pass qua

app.get('/login', (req,res)=>{
    res.render("login");
})

app.post('/login', (req,res)=>{
    User.findOne({email:req.body.email,password:req.body.password},function(err, user){
        if(err) throw err;
        if(user){
            res.render("loginsuccess")
        } else {
            res.render("loginfail")
        }
    })
})

//================================= kết thúc phần đăng nhập ==============================================//


app.get('/forgotpassword', (req,res)=>{     // chuyển về giao diện cho người dùng nhập email
    res.render("email");
})
app.post('/forgotpassword', async (req,res)=>{
    let secret = randomstring.generate();   // tạo ra một chuỗi ngẫu nhiên đóng vai trò như một mã xác thực
    let user;
    User.findOneAndUpdate({email:req.body.email},{refreshPassword : secret} ,function(err, user_found){       // update refreshPassword trong database
        if(err) throw err;
        if(!user_found) res.send("Email không tồn tại trong hệ thống") /// email khong ton tai trong he thong 
        return;
    });

    await User.findOne({email:req.body.email}).then(function(user_found){
        user = user_found;
    });             // tìm user 

    let urlReset = "http://localhost:8080/" +"changepassword/"+ user.id + "/"+ secret;    // url gửi về client để reset password
    const send = require('gmail-send')({
        user: process.env.user,
        pass: process.env.pass,
        to:   req.body.email,
        subject: 'Refresh password',
    });


    send({
        text: urlReset,  
    }, (error, result, fullResult) => {
        if (error) console.error(error);
        console.log(result);
    });
    res.send("Kiểm tra email của bạn");
})


//
app.get('/changepassword/:id/:token', async (req, res)=>{       // xác thực thông tin token và id
    let user;
    await User
            .findOne({_id:req.params.id,refreshPassword:req.params.token})
            .then((user_found)=> user = user_found )
            .catch((err)=> {
                throw err;
            });

    if(user){
        res.render("changepassword", {user});   // nếu token và id tồn tại thì render về trang changepasssword
    } else {
        res.sendStatus(403)
    }
})


app.post('/changepassword', async (req, res)=>{
    User.findByIdAndUpdate(req.body.id,{password : req.body.password, refreshPassword : ''} ,function(err, user){
        if(err) throw err;
        res.send("change password successfully <a href='/login'>dang nhap</div>")
    });
})


app.get('/register',(req, res)=>{
   res.render('register');
})


app.post('/register', async (req, res)=>{
    User.create({
        email:req.body.email,
        password: req.body.password,
        refreshPassword:''
    }).then(function(ok){
        res.send("them thanh cong <a href='/login'>Login</a>");
    })
})
