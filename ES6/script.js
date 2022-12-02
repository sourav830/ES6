class Cars
{
      constructor(name)
      {
            this.carname = name;
            console.log("I have a " + this.carname +"," + " it is a Mustang");
      }
      info()
      {
            document.write("I have a " + this.carname +"," + " it is a Mustang");
      }

}
class Car extends Cars
{
      info()
      {
            super.info();
            console.log("I have a " + this.carname +"," + " it is a Mustang");
      }
} 
let a = new Car("swift");
a.info();