const threeStrings = ['One', 'Two', 'Three'];
const threeThings = ['One', 2, false];
const threeEmpties = [[],[],[]];
const emptyObject = {};
const someObject = {
    id: 1,
    email: 'example@text.com',
    password: '********',
};
const secondObject = [
    {width: 2, height: 3},
    {width: 3, height: 3},
    {width: 4, height: 3},
];
const anotherObject = {
    string: 'String',
    array: ['One', 'Two', 3],
    square: {width: 1, height: 1},
};
console.log('8:', typeof(threeEmpties[1]));
console.log('9:', typeof(anotherObject.square));
const fiveRandoms = [
    Math.random().toFixed(2),
    Math.random().toFixed(2),
    Math.random().toFixed(2),
    Math.random().toFixed(2),
    Math.random().toFixed(2),
];
fiveRandoms.push(6);
fiveRandoms.shift(threeThings);
fiveRandoms.pop();
console.log(fiveRandoms.length);
fiveRandoms.pop();
fiveRandoms.splice(2, 1);

console.log(fiveRandoms);
