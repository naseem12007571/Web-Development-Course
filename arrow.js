
const user={
    username: "naseem",
    price: 999,

    wellcomeMessage: function(){
        console.log(`${ this.username},  wellecome to the course  `  )  // this func use for access the value of scope
         // this refer to the current contests contests means value 
    }
}

user.wellcomeMessage() 
user.username="sam"   // so here we can  this refer to the current contests  means current value pickup karta h
user.wellcomeMessage()  // print sam so this use for current value 

// console.log(this)  // we have print global so got {} empty
// and if we check in brower inspectinside so got there window ob

 // some more thing (this) will not work in function work in only object
function chai(){
    let username = "naseem"
    console.log(this.username);  // this will not work in  function it work for object
}
// chai()


// inside the arrow function aslo not working (this)

const chai1 = () =>{
    let username= "naseem"
    console.log(this.username)
}

// chai1() 

//////////////////// ARROW FUNCTION //////////////////////////

// declaration of arrow function 
// () =>  
// and we can hold in varibale 
const addtwo = (num1,num2)=>{
    return num1+num2 

}
      console.log(addtwo(10,2))

      // or more method we can declare

      const addtwo1 =(num1,num2) => num1+num2 // we can use (num1+num2) like it
      console.log(addtwo1(2,5))





