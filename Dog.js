var chalk = require('chalk'); 
function Dog(name){
    this.name=name;
}
Dog.prototype.sayHi = function(){
    console.log("Hello! I'm dog, my name is "+chalk.red(this.name));
}
module.exports=Dog;