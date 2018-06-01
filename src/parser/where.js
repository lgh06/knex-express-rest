module.exports = function (prev, whereCondition, whereValue){
  //
  console.log('into parser/where');

  
  if(whereCondition && whereValue){
    prev = prev.where(whereCondition, whereValue);
  }
  

  return prev;
}
