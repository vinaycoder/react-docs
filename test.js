// function primeNumber(num){
//     for(let i = 2;i<num;i++){
//         if(num%i===0){
//             return 'Not a prime'
//         }
//         return 'Prime Number'
//     }
// }

// function IsPrime(num,i){
//     if(i===0 || n===1){
//         return 'Prime Number'
//     }
//     if(num <=2){
//         return num <=2 ? 'Prime Number' : 'Not a Prime Number'
//     }
//     if(num%i==0){
//         return 'Not a Prime Number'
//     }else{
//         return IsPrime(num,i-1)
//     }
   
// }

function binarySearch(arr,n){
    let start = 0,end = arr.length-1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]===n){return true;}
        if(arr[mid]<n){
            start=mid+1
        }else{
            end =mid-1
        }
    }
    return false;
}

(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
1
4
3
2

console.log(false == '0') 
console.log(false === '0')

var person = {
    name: 'shoaib',
    identity: function (){
        return this.name;
    }
};
var personCopy = person.identity;
console.log(personCopy()); // 
console.log(person.identity()); //shoaib

var name = "shoaib";
var age = 26
var info = function () {
  console.log(name);
  console.log(age);
  var name = 20;
};
info();

name==undefined
age = 26























