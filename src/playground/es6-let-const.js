var nameVar ='Rituraj';
nameVar = 'Mike';
var nameVar = 'vats'; 
// with var variable we can reassing and also redefine
console.log('nameVar',nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
// var nameLet => Wrong
// with let variable we can reassing and but not redefine
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// with const variable we can'not reassing and not redefine
console.log('nameConst',nameConst);

function getPetName()
{
    var petName ='Hal';
    return petName;
}
// var ,const ,let are function scoped variable

var fullName = 'Rituraj Vats';
if(fullName){
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
// const and let are blocked level scope except var variable