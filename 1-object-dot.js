var person = new Object();

person["firstName"] = "Lakshmi";
person["LastName"] = "Sravanan";
person.age = 27;

person.address = new Object();
person.address.street = "11 6th cross";
person.address.city = "chennai";
person.address.state = "TN";

// method
person.getfullname = function () {
  return `${this.firstName} ${this.LastName}`;
};

console.log(person.getfullname());
