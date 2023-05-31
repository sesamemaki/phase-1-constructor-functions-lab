function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}
let samson = new Scooter(2015, "red", "swoosh");
// console.log(samson.year)

function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}
let allison = new Driver("Allison", "16 years", "2 years");
//console.log(allison.age)

function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}
let poshHotel = new PickupLocation("123 Broadway", "New York City");
console.log(poshHotel.city)
