// 1 - Create a new array where people under 30 are included

const people = [
    {name: 'Alice', age: 30},
    {name: 'Bob', age: 25},
    {name: 'Charlie', age: 35}
];

const underThirty = people.filter(person => age < 30)

console.log(underThirty)

// 2 - Creates a new array with names only

const names = people.map(name => people.name)

console.log(names)