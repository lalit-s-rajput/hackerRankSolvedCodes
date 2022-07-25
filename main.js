/*
function runningSum (arr) {
    //let outPtArr = [];
    //outPtArr[]
    for(let i=1;i<arr.length;i++){
        arr[i] = arr[i-1] + arr[i];
    }
    console.log(arr);
};
runningSum([1,2,3,4]);
*/

/*
function pivotIndex (nums) {
    let left = 0;
    let right = 0;
    let total = nums.reduce((acc,item)=>{
        return acc+=item;
    },0);
    right = (total===0)?-1:total;
    console.log(right);
    for(let i=0;i<=nums.length;i++){
        if(left==right){
            return i-1;
        }else {
            left+=(i==0)?0:nums[i-1];
            right = (i==0 && !total)? 0 : right;
            right =  total -left -nums[i];
        }
    }
    return -1;
};
// [-1,-1,0,1,1,0] 5
// [1,7,3,6,5,6] 3
// [2,1,-1] 0
let data = pivotIndex([2,1,-1]);
console.log(data);
*/

/*
function moveZeroes (nums) {
    if(!nums.length || nums.length===1) return nums;
    let arrLength = nums.length;
    for(let i=0;i<arrLength-1;i++){
        if(nums[i-1]==0){
            i--;
            arrLength--;
        }
        if(!nums[i]){
            let j = i;
            while(j<arrLength-1){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
                j++;
            }
        }
    }
    return nums;
};
console.log(moveZeroes([0,0,1]));
*/



// for(var i = 0; i < 5; i++) {
//     setTimeout((val) => {
//     console.log(val);
//   }, 1000,i);
//   }
/*
  var obj1 = {
    address : "Pune,India",
    getAddress:()=>{
    console.log(this.address); 
  }
}
var obj2 = {address:"Bangalore"};
// obj2.getAddress();

// obj1.getAddress.call(obj2);

function add (val) {
    return function(val1){
        return function(val2){
            return val+val1+val2;
        }
    }
};

*/

// let data = add(1);
// data1 = data(2);
// data3 = data1(3);

// console.log(add(1)(2)(3));
// add(1)(2)(3); // currying

// let result = (function(){
//     return 2;
// })();

// result();
// if array then call again
// find element push to the array

// let result = [];
// function flattenArray (arr) {
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){ // arr has length arr.length
//             flattenArray(arr[i]);
//         } else {
//             result.push(arr[i]);
//         }
//     }
// }

// flattenArray([1, [2, [3, 4]]]);
// console.log(result);

/* 
input  - [0,10,30,16,40,14], 30
output  - [[30, 0], [16, 14]]
*/
                    30  +  20 === 30
// 2 pointer but  30-0  30-10

// function addTwo (arr,sum) {
//     let sumOfValues = {}; // {0:30, 10:20,30:0, 16:14, 14:16,40:-10 }
//     let outPutArrat = []; // {30:0, 20:20, 0:30, 14:16, 16:14,-10:40 }
//     for(let i=0;i<arr.length;i++){
//         if(sumOfValues[arr[i]]==sum){
//             outPutArrat.push(arr[i]);    
//         } else{
//             sumOfValues[arr[i]] = sum-arr[i];
//         }
//     }
//     for(let i in sumOfValues){
//         if(sumOfValues[i]>0 && 30-sumOfValues[i]==i){
//             outPutArrat.push(i);
//         }
//     }
//     console.log(sumOfValues);
//     console.log(outPutArrat);
// };
// addTwo([0,10,30,16,40,14],30);

/*
function test(strtDara){
    let arr = [];
    let str = '';
    for(let i=strtDara.length-1;i>=0;i--){
        if(strtDara[i]===' '){
            arr.push(str);
            str = '';
        }else{
            str+=strtDara[i];
            if(i==0){
                arr.push(str);
            }
        }
    }
    console.log(arr);
    let testData = arr.reverse().join(' ');
    console.log(testData);
}

test.prototype.d = 45;
let data1 = new test('fdhf dfhf');
console.log(data1.d); // oop
// test('I am name');

let obj1 = obj2;

 obj1 = JSON.parse(JSON.stringify(obj2));


 function d(e){
    e();
 }

 function e(){

 }

 // set and weakset

 // async and await

 // 

 
 */
/*
let isdividedbythree = false;
let isdividedbyfive = false;
 for(let i=1;i<100;i++){
     isdividedbythree = false;
     isdividedbyfive = false;
    if(i%3==0){
        isdividedbythree = true;
    }
    if(i%5==0){
        isdividedbyfive = true;
    }
    if(isdividedbythree && isdividedbyfive){
        console.log('fooBar:',i);
        continue;
    }
    else if(isdividedbythree){
        console.log('foo:',i);
        continue;
    }else if(isdividedbyfive){
        console.log('Bar:',i);
        continue;
    }
 }

*/

// binary search
/*
function binarySearch (arr,target) {
    let start = 0;
    let end = arr.length;
    mid = Math.ceil((start+end)/2);
    while(start!=end){
        if(target==arr[mid]){
            return mid;
        }else if(target<arr[mid]){
            end = mid;
        }else{
            start = mid;
        }
        mid = Math.ceil((start+end)/2);
    };
    return -1;
};
console.log(binarySearch([-1,0,3,5,9,12],9));
// binarySearch([-1,0,3,5,9,12],9);
*/

// contanins Dupicate
/*
function containsDuplicate (nums) {
    let obj = {};
    for(let i=0;i<nums.length;i++) {
        if(!obj[nums[i]]){
            obj[nums[i]] = 1;
        }else{
            return false;
        }
    };
    return true;
};
console.log(containsDuplicate([1,2,3,1]));
*/

/*
function slidingWindow (arr,k) {
    let maxSum = 0;
    let currentSum = 0;
    let j;
    let loopVar = k;
    for(let i=0;i<arr.length-k;i++){
        loopVar = k;
        j=i;
        while(loopVar>0){
            currentSum+=arr[j];
            j++;
            loopVar--;
        }
        maxSum = Math.max(maxSum,currentSum);
        currentSum = 0;
    }
    console.log(maxSum);
};

slidingWindow([1, 4, 2, 10, 23, 3, 1, 0, 20],4);
*/

/*
function maxProfit (prices) {
   let min = prices[0];
   max = 0;
   let data
   for(let i=1;i<prices.length;i++){
        min = (min<prices[i])?min:prices[i];
        // data = 
        if(prices[i]-min>max){
            max = prices[i]-min;
        }
   }
   console.log(max);
};
maxProfit([7,6,4,3,1]);
// maxProfit([7,1,5,3,6,4]);
*/

/*
function lengthOfLongestSubstring (s) {
    let obj = {};
    let count = 0;
    let max = 0;
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]){
            max = Math.max(max,count);
            i-=count;
            count = 0;
            obj = {};
           }else{
               obj[s[i]] = 1;
               count++;
               if(i==s.length-1){
                max = Math.max(max,count);
               }
        }
    }
    return max;
};
 // console.log(lengthOfLongestSubstring("pwwkew")); //3
// console.log(lengthOfLongestSubstring("abcabcbb")); //3
//console.log(lengthOfLongestSubstring("aab")); //2
// console.log(lengthOfLongestSubstring("dvdf")); //2

*/



const user = {
    id: 158034,
    firstName: 'Edwin',
    lastName: 'aldrin',
    address: [
        {
            street: 'New Delhi',
            pinCode: '114566'
        }
    ],
    phoneNumber: [
        {
            number: '1234567890',
            isPrimary: true
        },
        {
            number: '1428567890'
        }
    ],
    createdOn: Date.now(),
    isAdmin: true,
    profilePhoto: null
}

function getCloned(objData){
     let obj = {};
     if(Array.isArray(objData)){
        for(let i=0;i<objData.length;i++){
            if(!Array.isArray(objData[i]) && typeof(objData[i])!=="object"){
                obj[i] = objData[i];
            }else if(typeof(objData[i])==="object" && !Array.isArray(objData[i])){
                obj[i]=getCloned(objData[i]);
            }else if(Array.isArray(objData[i])){
                obj[i]=getCloned(objData[i]);
            }else {
                return;
            }
        }
     }else{
        for(let i in objData){
            if(!Array.isArray(objData[i]) && typeof(objData[i])!=="object"){
                obj[i] = objData[i];
            }else if(typeof(objData[i])==="object" && !Array.isArray(objData[i])){
                getCloned(objData[i]);
            }else if(Array.isArray(objData[i])){
                obj[i]=getCloned(objData[i]);
            }else {
                return;
            }
            
            // obj[] = arg[i];
        }
     }
    return obj;
}
const clonedUser = getCloned(user);
console.log(clonedUser);


/*
let arr = [{name:'lalit'},'rajput',[1,2,3]];
let clonedArr = [];

function arrayCloner(arr) {
    console.log(arr);
    console.log(typeof(arr));
    switch(typeof(typeof(arr))){
        case 'object':
            let obj = {};
            for(let i in arr){
                obj[i]=arr[i];
            }
            return obj;
            break;
        case 'array':
            let arrData = [];
            for(let i=0;i<arr.length;i++){
                if(typeof(arr[i]=='object')){
                    clonedArr.push(arrayCloner(arr[i]));
                }
            }
            break;
        default:
            clonedArr.push(arr);
    }
}
arrayCloner(arr);
console.log(clonedArr);
*/
