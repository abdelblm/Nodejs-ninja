const Blog = require('../models/blog');
// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const blog_index = () => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { title: 'All blogs', blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_details = (req, res) =>{
     const id = req.params.id;
     Blog.findById(id)
       .then((result) => {
         res.render('details', { blog: result, title: 'Blog Details' });
       })
       .catch((err) => {
         console.log(err);
       });

}

module.exports = {
  blog_index,
};
