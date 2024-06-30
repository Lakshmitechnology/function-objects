var person={
    firstName:"Lakshmi",
    LastName:"Saravanan",
    age:27,
    adress:"No 11 6th cross school street",
    street:"street",
    city:"checnnai",
    state:"Tamil Nadu",
    getFullName:function(){
      return `My father Name is: ${this.LastName},My age is: ${this.age} and my location is: ${this.adress}`
      
    }
    

}
console.log(`person ${person.firstName}`)
console.log(person.getFullName())