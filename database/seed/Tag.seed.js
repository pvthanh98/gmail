require('../DBConnect');
let Tag = require("../model/Tag");
let Category = require("../model/Category");


async function insertTags(){
    console.log("Inserting tags");
    var tags =[];
    await Category.findOne({cat_name: "Công Nghệ"}, 'id').then((categories)=>{
        tags.push({tag_name:'AI', cat_id: categories._id})
        tags.push({tag_name:'Cloud computing', cat_id: categories._id})
        tags.push({tag_name:'Blockchain', cat_id: categories._id})
    });

    await Category.findOne({cat_name: "Tiếng Anh"}, 'id').then((categories)=>{
        tags.push({tag_name:'IELTS', cat_id: categories._id})
        tags.push({tag_name:'TOIEC', cat_id: categories._id})
        tags.push({tag_name:'Communication', cat_id: categories._id})
        tags.push({tag_name:'C1', cat_id: categories._id})
    });
    await Category.findOne({cat_name: "Lập Trình"}, 'id').then((categories)=>{
        tags.push({tag_name:'NodeJS', cat_id: categories._id})
        tags.push({tag_name:'PHP', cat_id: categories._id})
        tags.push({tag_name:'JAVA', cat_id: categories._id})
        tags.push({tag_name:'C#', cat_id: categories._id})
    });

    await Category.findOne({cat_name: "Website"}, 'id').then((categories)=>{
        tags.push({tag_name:'Web_NodeJS', cat_id: categories._id})
        tags.push({tag_name:'Web_PHP', cat_id: categories._id})
        tags.push({tag_name:'Ajax', cat_id: categories._id})
        tags.push({tag_name:'HTML', cat_id: categories._id})
        tags.push({tag_name:'DOM', cat_id: categories._id})
    });

    Tag.create(tags).then(()=>console.log("Tags inserted")).catch((err) => {throw err;});;
}

insertTags();
