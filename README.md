## knex-express-rest  
dynamic rest api without any schema.   

Node.js version >= 8  


猜想已验证。 

> http://localhost:3000/api/get/列名/表名/where条件/where值  
> 多个列名可用,分割，也可用*查询所有列  
> 其它用法待扩充

TODO：where(>,<, is not null...) / limit  

> inspired by GraphQL 
and [APIJSON](https://github.com/TommyLemon/APIJSON) 
and [leancloud](https://leancloud.cn/docs/rest_api.html)
and [Parse](https://github.com/parse-community/parse-server)
