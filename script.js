//print odd numbers in an array [1,2,3,4,5,6,7,8,9,10,11,12,13]

/*var result = [];
function odd(arr){
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  return result;
}
console.log(odd([15,18,23,14,16,24]));
*/

//using annoymous function

/*var result = [];
var a = function (arr){
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  return result;
}
console.log(a([15,18,23,14,16,24]));
*/

//IIFE
// (function (a,b){
//     console.log (a+b)
//  })(1,2)
//({})()
/*var result = [];
(function (arr){
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  console.log(result) 
})([1,2,3,4,5,6,7,8])
*/

//Arrow functions (ES6)

/*var result = [];
var odd =(arr)=>{
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  return result;
}
odd([15,18,23,14,16,24]);
*/
//var variablename=()=>{}variablename()