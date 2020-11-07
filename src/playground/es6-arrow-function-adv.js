//argument object - no longer bound with arrow functions

const add =(a,b) => {
  return a + b;
};
console.log(add(55,1));

const user ={
    name: 'Rituraj',
    cities:['Chandigarh','Mohali'],
    //printPlacesLived : function(){  //syntax of es5
        printPlacesLived() { //syntax of es6
        const cityMessagess = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        } ) ;    // this keyword is accesible here
        
        
        // this.cities.forEach((city) => {   // with the use of arrow function you can resolve the issue
        //    console.log(this.name+' has lived in ' + city);    //this keyword is not acessible here          
        
        return cityMessagess;
    }
};
console.log(user.printPlacesLived());

// Challenge Area

const multiplier ={
    numbers: [1,2,3],
    multiplyBy : 2,
  multiply ()  {
        return this.numbers.map((number) =>  number*this.multiplyBy);
  }
};
console.log(multiplier.multiply())