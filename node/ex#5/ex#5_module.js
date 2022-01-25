// não apontam pro this
console.log(global === this); // false
console.log(module === this); // false

// refere ao this
//console.log(module.exports === this); // true

this.sayHello = function() {
  console.log('Hello!');
}
/*
const sayBye = () => {
  console.log('Bye!');
}

module.exports = {
  sayBye
}*/