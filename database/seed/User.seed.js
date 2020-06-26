require('../DBConnect');
let User = require("../model/User");
var users =[
    {
        email:'pvthanh98it@gmail.com', 
        password: '123',
        refreshPassword: ''
    }
];

async function insertUsers(){
    console.log("Inserting users");
    User.create(users).then(()=>console.log("users inserted!")).catch((err) => {throw err;});;
}

insertUsers();