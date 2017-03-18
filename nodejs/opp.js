var person = {
  ho       : "Nguyen",
  ten      : "Hao",
  chaomung : function () {
    console.log("Chao ban " + this.ho + "" + this.ten);
  }
}
person.chaomung();

console.log(person["ten"]);
