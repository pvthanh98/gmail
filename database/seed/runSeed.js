require('../DBConnect');
var Comment = require('../model/Comment');
 Comment.create({
        comment_content: 'Bình luận cấp trên',
        post_id: '5ed866ffba4fe01438db5b5a',
        user_id: '5ed85e3f459f372918607c78',
        chilren: ['5ed8b98e1fbca222380e37c1','5ed8b98e1fbca222380e37c3']

 }).then(()=>{
     console.log("ok");
 });
// take turn to run each function. 'I havent found the solutions to run all'