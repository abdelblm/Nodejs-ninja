const express = require('express');
const router = express.Router();
blogControllers = require('../controllers/blogControllers');

router.get('/', blogControllers.blog_index);

//POST
router.post('/', blog) 

router.get('/create', blogControllers.blog_create_get)

router.get('/:id', blogControllers.blog_details);

//DELETE
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/blogs' });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
