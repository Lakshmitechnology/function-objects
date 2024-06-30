var objectLitral={
    firstname:"lakshmi",
    lastname:"Saravanan",
    Programmer:"Lakshmi has good programmer"
}
console.log(objectLitral.Programmer)
// string to json 
console.log(JSON.stringify(objectLitral))


// JSON to string
var stringval=`{"firstname":"lakshmi","lastname":"Saravanan","Programmer":"Lakshmi has good programmer"}`
console.log(JSON.parse(stringval))