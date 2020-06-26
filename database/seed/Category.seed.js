require('../DBConnect');
let Category = require("../model/Category");
var categories =[
    { cat_name: "Công Nghệ" },
    { cat_name: "Tiếng Anh" },
    { cat_name: "Lập Trình" },
    { cat_name: "Website" }
];


async function insertCategories(){
    console.log("Inserting Category");
    await Category.create(categories).then(()=>{
        console.log("Categories inserted!");
    }).catch(function(err){
        throw err;
    })
}

insertCategories();