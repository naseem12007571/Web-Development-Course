
let str="Naseem"
console.log(str[1])

//Template Literals this method use for combine string we can print like a sentence 
// `` this is a string interpolation 
let specialString = `Hello Naseem How are you `
console.log(specialString)

let stttr= "Naseem"
console.log(stttr.slice(2))  // 2 se upper jitne string banega sab print kardega
console.log(stttr.slice(1,4))  // 1 se 4tk print karayega

// or we can declare string like that
const gamename = new String ("naseem")

console.log(gamename[0]);

console.log(gamename.length)
console.log(gamename.toUpperCase())


//can we check character is which position
console.log(gamename.charAt(2))
console.log(gamename.indexOf('s'))

const anotherString= gamename.substring(0,4)
console.log(anotherString)

const moreString = gamename.slice(-3, 6) // negative give reverse value 
console.log(moreString)

// more thing
const newString= "  naseem  "
console.log(newString)
console.log(newString.trim())  // trim remove the space 

const ural="http://naseem@gmail.com%20"
console.log(ural)
console.log(ural.replace("%20", "fine")) // we can replace
console.log(ural.includes("gmail")) // we can find keyboard  present or not




















