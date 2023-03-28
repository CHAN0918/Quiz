let data1 = 1
let data2 = "1.23"
console.log(data1, typeof data1)
console.log(data2, typeof data2)

let data3 = data1.toString + parseInt(data2)
console.log(data3, typeof data3)

//array data
let data =["One",2, true]
console.log(data[2], typeof data[2])

//object data
let user ={name:"Soo",faculty:"FKEKK",phone:"12345",email:"soo@utem.edu.my"}
console.log (user.faculty)

user ={name:"chan", faculty:"FKEKK", phone:{office:"123456",mobile:"654321"},email: "chan@utem.edu.my"}
console.log(user.name)
console.log(user.phone.mobile)
console.log(user.phone.home)
console.log(user.email)

//parseInt
//parseFloat
//toString => number to String (changed to boolean)
//toString
