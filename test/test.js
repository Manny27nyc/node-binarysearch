/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
var test = require('tap').test;
var bs = require('../index.js');

test("can find index",function(t){
  var key = bs([1,2,3,4,5,6,7,8],6,function(v,find){
    return (v - find);
  });

  t.equals(key,5,'should have found key 5 for value 6');
  
  key = bs([1,2,3,4,5,6,7,8],0);

  t.equals(key,-1,'should have not found a key for missing value');

  key = bs([1,2,3,4,5,6,7,8],8);

  t.equals(key,7,'should have found 7 for value 8');

  key = bs([1,2,3,4,5,6,7,8],1);

  t.equals(key,0,'should have found 0 for value 1');

  key = bs([1,2,3,4,5,6,7,8],9);

  t.equals(key,-1,'should have found -1 for value 9');

  t.end();

});

