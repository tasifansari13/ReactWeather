var names = ['Tasif', 'Raja', 'Pankaj'];

var persion = {
  name: 'Tasif',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};
persion.greet();

// challenge area

function add(a, b) {
  return a + b;
}

var addStatement = (a, b) => a + b;
var addExpression = (a, b) => {
    return a + b;
}
console.log(addStatement(3, 4));
console.log(addExpression(22, 4));


console.log(1 + 3);
console.log(9 + 0);
