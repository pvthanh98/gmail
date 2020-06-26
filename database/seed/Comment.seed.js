require('../DBConnect');
let Post = require("../model/Post");
let User = require("../model/User");
let Comment = require("../model/Comment");

async function insertComment(){
    console.log("Inserting Comment");
    var comments =[];
    await User.findOne({ email:'pvthanh98it@gmail.com' }, 'id')
            .then(async (user)=>{
                await Post.findOne({post_link : 'ly-do-nen-hoc-nodejs-ngay-tu-hom-nay'}, 'id').then((post)=>{
                    comments.push({ 
                        comment_content: 'Bài viết rất hay và ý nghĩ',
                        post_id: post.id,
                        user_id: user.id,
                    });
                });


            });

    await User.findOne({ email:'nvtanh@gmail.com' }, 'id')
            .then(async (user)=>{
                await Post.findOne({post_link : 'ly-do-nen-hoc-nodejs-ngay-tu-hom-nay'}, 'id').then((post)=>{
                    comments.push({ 
                        comment_content: 'Học node sao này có dễ tìm việc làm không anh?',
                        post_id: post.id,
                        user_id: user.id,
                    });
                });
            });

    await User.findOne({ email:'lmkan@gmail.com' }, 'id')
            .then(async (user)=>{
                await Post.findOne({post_link : 'ly-do-nen-hoc-nodejs-ngay-tu-hom-nay'}, 'id').then((post)=>{
                    comments.push({ 
                        comment_content: 'Mình thật sự cảm thấy khó để điều khiển bất đồng bộ',
                        post_id: post.id,
                        user_id: user.id,
                    });
                });
            });

    await User.findOne({ email:'ntkthuy@gmail.com' }, 'id')
        .then(async (user)=>{
            await Post.findOne({post_link : 'ly-do-nen-hoc-nodejs-ngay-tu-hom-nay'}, 'id').then((post)=>{
                comments.push({ 
                    comment_content: 'Triển khai web bằng nodejs có tốn kém nhiều không?',
                    post_id: post.id,
                    user_id: user.id,
                });
            });
        });

    await Comment.create(comments)
    .then(()=> console.log("Comments inserted"))
    .catch((err) => {throw err;});


}
insertComment();
