var tools = {};
tools.mount_routes = function (app, r, pre){
  pre = pre || '';
  for(var k in r){
    var file = '/' + pre + '' + k + '.js';
    // console.log('mount route ' + file + " ");
    var path = '';
    if(typeof r[k] == 'object'){
      // console.log('this is a obj');
      tools.mount_routes(app, r[k], pre + k + '/');
    }else if(k === 'index'){
      path = '/' + pre;
      app.use(path, r[k]);
    }else{
      path = '/' + pre + '' + k;
      app.use(path, r[k]);
    }
  }
};

var jwt = require("jsonwebtoken");

// auth token鉴权
tools.authHandler = function (req, res, next){
  console.log('auth');
  let token = req.get('x-auth-t') || req.query.token;
  console.log(token)
  if(token){
    jwt.verify(token, 'secrethash', function (err, decoded){ //TODO secrethash
      if(err === null){
        next();
      }else{
        res.status(403).json({error: 'error'});
      }
    });
  }else{
    res.status(403).json({error: 'error'});
  }
}

module.exports = tools;
