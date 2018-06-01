var knex = require('../pool');
var selectParser = require('./select');
var whereParser = require('./where');
var fromParser = require('./from');

module.exports = function (pathArr){
  //
  console.log('into parser/index');
  let [column, table, whereCondition, whereValue] = pathArr;

  let q = selectParser(knex, column);
  if(whereCondition && whereValue){
    q = whereParser(q, whereCondition, whereValue);
  }
  
  q = fromParser(q, table);
  

  return q.map(function (row){
    return row
  });
}
