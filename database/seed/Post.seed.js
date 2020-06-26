require('../DBConnect');
let Post = require("../model/Post");
let User = require("../model/User");
let Tag = require("../model/Tag");

async function insertPosts(){
    console.log("Inserting Post");
    var posts =[];
    await User.findOne({ email:'pvthanh98it@gmail.com' }, 'id')
            .then(async (user)=>{
                await Tag.findOne({tag_name:'NodeJS'}, 'id').then((tag)=>{
                    posts.push({ 
                            post_name:"Lý Do Nên Học NodeJS Ngay Từ Hôm Nay",
                            post_link : 'ly-do-nen-hoc-nodejs-ngay-tu-hom-nay',
                            describe:'NodeJS được trình làn vào năm 2010 là một công nghệ được nhiều người tin dùng',
                            author_id: user.id,
                            tag_id: tag.id, 
                            post_content: 'NodeJS được trình làn vào năm 2010 là một công nghệ được nhiều người tin dùng NodeJS được trình làn vào năm 2010 là một công nghệ được nhiều người tin dùng NodeJS được trình làn vào năm 2010 là một công nghệ được nhiều người tin dùng NodeJS được trình làn vào năm 2010 là một công nghệ được nhiều người tin dùng NodeJS được trình làn vào năm 2010 là một công nghệ được nhiều người tin dùng NodeJS được trình làn vào năm 2010 là một công nghệ được nhiều người tin dùng NodeJS được trình làn vào năm 2010 là một công nghệ được nhiều người tin dùng NodeJS được trình làn vào năm 2010 là một công nghệ được nhiều người tin dùng NodeJS được trình làn vào năm 2010 là một công nghệ được nhiều người tin dùng NodeJS được trình làn vào năm 2010 là một công nghệ được nhiều người tin dùng NodeJS được trình làn vào năm 2010 là một công nghệ được nhiều người tin dùng. NodeJS được trình làn vào năm 2010 là một công nghệ được nhiều người tin dùng NodeJS được trình làn vào năm 2010 là một công nghệ được nhiều người tin dùng NodeJS được trình làn vào năm 2010 là một công nghệ được nhiều người tin dùng NodeJS được trình làn vào năm 2010 là một công nghệ được nhiều người tin dùng ',
                            focus: true
                    });
                });

                await Tag.findOne({tag_name:'PHP'}, 'id').then((tag)=>{
                    posts.push({ 
                            post_name:"Những Framework Nổi Tiếng Của PHP",
                            post_link : 'nhung-framework-noi-tieng-cua-php',
                            describe:'PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server',
                            author_id: user.id,
                            tag_id: tag.id, 
                            post_content: 'PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server .',
                    });
                });

                await Tag.findOne({tag_name:'PHP'}, 'id').then((tag)=>{
                    posts.push({ 
                            post_name:"So Sánh PHP Và NodeJS",
                            post_link : 'so-sanh-php-va-nodejs',
                            describe:'PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server',
                            author_id: user.id,
                            tag_id: tag.id, 
                            post_content: 'PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server PHP là một ngôn ngữ lập trình được sử dụng chủ yếu cho server .',
                            focus: true
                    });
                });

                await Tag.findOne({tag_name:'TOIEC'}, 'id').then((tag)=>{
                    posts.push({ 
                            post_name:"Cách Làm Bài Thi TOIEC Hiệu Quả",
                            post_link : 'cach-lam-bai-thi-toiec-hieu-qua',
                            describe:'Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung ',
                            author_id: user.id,
                            tag_id: tag.id, 
                            post_content: 'Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung .',
                            focus: true
                    });
                });

                await Tag.findOne({tag_name:'TOIEC'}, 'id').then((tag)=>{
                    posts.push({ 
                            post_name:"Ứng Dụng TOIEC Khi Đi Làm",
                            post_link : 'ung-dung-toiec-khi-di-lam',
                            describe:'Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung ',
                            author_id: user.id,
                            tag_id: tag.id, 
                            post_content: 'Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung Có 4 cách làm chủ yếu trong bài thi TOIEC nên tập trung .',
                      
                    });
                });
                await Tag.findOne({tag_name:'JAVA'}, 'id').then((tag)=>{
                    posts.push({ 
                            post_name:"Lập Trình Android Với JAVA",
                            post_link : 'lap-trinh-android-voi-java',
                            describe:'Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động',
                            author_id: user.id,
                            tag_id: tag.id, 
                            post_content: 'Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động Java là ngôn ngữ được sử dụng phổ biến nhất trong lập trình di động ',
                 
                    });
                });
                await Tag.findOne({tag_name:'NodeJS'}, 'id').then((tag)=>{
                    posts.push({ 
                            post_name:"Xử Lý Bất Đồng Bộ Trong NodeJS",
                            post_link : 'xu-ly-bat-dong-bo-trong-nodejs',
                            describe:'JavaScipt là ngôn ngữ bất đồng bộ. Nó không chạy tuần tự theo từng dòng',
                            author_id: user.id,
                            tag_id: tag.id, 
                            post_content: 'JavaScipt là ngôn ngữ bất đồng bộ. Nó không chạy tuần tự theo từng dòng JavaScipt là ngôn ngữ bất đồng bộ. Nó không chạy tuần tự theo từng dòng JavaScipt là ngôn ngữ bất đồng bộ. Nó không chạy tuần tự theo từng dòng JavaScipt là ngôn ngữ bất đồng bộ. Nó không chạy tuần tự theo từng dòng JavaScipt là ngôn ngữ bất đồng bộ. Nó không chạy tuần tự theo từng dòng JavaScipt là ngôn ngữ bất đồng bộ. Nó không chạy tuần tự theo từng dòng JavaScipt là ngôn ngữ bất đồng bộ. Nó không chạy tuần tự theo từng dòng JavaScipt là ngôn ngữ bất đồng bộ. Nó không chạy tuần tự theo từng dòng JavaScipt là ngôn ngữ bất đồng bộ. Nó không chạy tuần tự theo từng dòng JavaScipt là ngôn ngữ bất đồng bộ. Nó không chạy tuần tự theo từng dòng JavaScipt là ngôn ngữ bất đồng bộ. Nó không chạy tuần tự theo từng dòng JavaScipt là ngôn ngữ bất đồng bộ. Nó không chạy tuần tự theo từng dòng JavaScipt là ngôn ngữ bất đồng bộ. Nó không chạy tuần tự theo từng dòng JavaScipt là ngôn ngữ bất đồng bộ. Nó không chạy tuần tự theo từng dòng JavaScipt là ngôn ngữ bất đồng bộ. Nó không chạy tuần tự theo từng dòng ',
    
                    });
                });
                await Tag.findOne({tag_name:'Cloud computing'}, 'id').then((tag)=>{
                    posts.push({ 
                            post_name:"Ubuntu Và Những Điều Cần Biết Để Quản Trị Trên Cloud",
                            post_link : 'ubuntu-va-nhung-dieu-can-biet-de-quan-tri-tren-cloud',
                            describe:'Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. ',
                            author_id: user.id,
                            tag_id: tag.id, 
                            post_content: 'Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. Viết tới bài này là hơi đuôi rồi. Tính đi ngủ đây. ',
                            focus: true
                    });
                });
            })
    

    await Post.create(posts).then(()=> console.log("Post inserted")).catch((err) => {throw err;});;
}

insertPosts();
