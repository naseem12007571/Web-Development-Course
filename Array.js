const myArray= [2,4,5,6,7]
// console.log(myArray[2]) // indexing ans 5
 const myhero= ["virat kohli", "kartik aryan"] // this also array

 const myarray2= new Array(5,6,7,8,9) // more method declare the array


 // method of array

 myArray.push(6)
//  console.log(myArray)

 myArray.pop()
//  console.log(myArray) 

//  myArray.unshift(12)   // it will shift the 12 in starting 
//  console.log(myArray)

//  myArray.shift()
//  console.log(myArray)  // it will remove the starting element

// console.log(myArray.includes(5))  // it will give answer boolean true or false value present or not
// console.log(myArray.indexOf(8))  // it will give the index of 8 exist or not in not casr -1


//slice or splice 

console.log("A",myArray)

const myn3 = myArray.slice(1,4) // 1 se start and 3 tk and 4 not include hoga mean rnage not include
console.log(myn3)

console.log("B",myArray)

const myarr4= myArray.splice(1,3)
console.log("c",myArray)   // it will give value of without splice splice se bachi value provide kararega
console.log(myarr4)










 



