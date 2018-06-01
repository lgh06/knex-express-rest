module.exports = function (knex, column){
  console.log('into parser/select');
  return knex.select(...column.split(","));
}
