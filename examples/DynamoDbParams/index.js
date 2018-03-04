const _params = {};
const methodDependency = {
  AttributesToGet: ['get', 'scan', 'query', 'batchGet']
}
class Parameters{
  constructor(table, method){
    if(!table) throw 'Table property is required';
    if (!method) throw 'Method property is required';
    Object.assign(_params, {TableName: table,} );
  }
  /** @method
  * @name select
  * 
  * @param {(string|string[])} params - Some select param or array of select params
  *  
  * */
  select(params){
    //TODO add array elements validation
    if (typeof params === 'string' || Array.isArray(params)) {
      if(_params.AttributesToGet) {
        console.log('concat', params);
        _params.AttributesToGet = _params.AttributesToGet.concat(params)
      }else{
        Object.assign(_params, {
          AttributesToGet: params,
        });
      }
    } else console.error(`Wrong params - ${params}. It's required and it's must be array or string`);
    return this;
  }
  getQuery(){
    return _params;
  }
}

const test = new Parameters('table','get');
const query = test.select(['test']).select(2).getQuery();
console.log(query);
// test.select = ['asdasd'];
// console.log(test.params);

// var params = {
//   Key: { /* required */
//     '<AttributeName>': someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */ ,
//     /* '<AttributeName>': ... */
//   },
//   TableName: 'STRING_VALUE',
//   /* required */
//   AttributesToGet: [
//     'STRING_VALUE',
//     /* more items */
//   ],
//   ConsistentRead: true || false,
//   ExpressionAttributeNames: {
//     '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
//     /* '<ExpressionAttributeNameVariable>': ... */
//   },
//   ProjectionExpression: 'STRING_VALUE',
//   ReturnConsumedCapacity: INDEXES | TOTAL | NONE
// };
// documentclient.get(params, function (err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else console.log(data); // successful response
// });
