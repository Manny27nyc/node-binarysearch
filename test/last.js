/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
var test = require('tap').test;
var bs = require('../index.js');


test("can get last",function(t){
  var key = bs.last([1,2,3,3,3,4],3);

  console.log('last',key);

  t.equals(key,4,' should have got 4 as key because it is index of the last 3');

  t.end();
});
