const router = require('express').Router();
const parser = require('../parser');


// http://localhost:3000/api/post/*/users/
router.post('/*', function (req, res){
  console.log('api/post');

  let pathArr = req.path.split("/").filter(d => d.length > 0);
  
  
  parser(pathArr).then(
    (r) => {
      console.log("run only 1 time")
      res.json({r: r})
    },
    (err) => {
      res.json({err})
    }
  );
});

module.exports = router;
