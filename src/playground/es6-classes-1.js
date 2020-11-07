class Person 
{
   constructor (name='Anonymous' ,age=0){
       this.name=name ;
       this.age=age;
   }
   getGretting(){   //function
     //return 'Hi, I am ' +this.name + ' !';
     return `Hi. I am ${this.name}!.`;   //template string
   }
   getDescription()
   {
       return `${this.name} is ${this.age} year(s) old.`
   }
}

class Student extends Person{
   constructor(name,age,major){
    super(name,age);    //acess the parent class
    this.major=major;
  }
  hasMajor(){
      return !!this.major
  }
  getDescription(){    //overide the function
      let description = super.getDescription();
      
     if(this.hasMajor()){
         description += `Their major is ${this.major}.`;
     }
      return description;  
  }
}

class Traveler extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }

    addHomeLocation()
    {
        return !!this.homeLocation;
    }
    getGretting(){
        let address=super.getGretting();
    if(this.addHomeLocation())
    {
        address += `I'm visiting from ${this.homeLocation}.`;
    }
      return address;
    }
}

const me = new Traveler('Rituraj',21,'Chandigarh') ;

console.log(me.getGretting());

const other=new Traveler();
console.log(other.getGretting());