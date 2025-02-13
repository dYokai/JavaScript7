// 1 - Using map create a new array that doubles every number

const numbers1 = [1, 2, 3, 4, 5]

const doubledNumbers = numbers1.map(num => num * 2)

console.log(doubledNumbers)

// 2 - Using filter creates an array showing only even numbers

const numbers2 = [1, 2, 3, 4, 5]

const filteredNumbers = numbers2.filter(num => num % 2 === 0)

console.log(filteredNumbers)

// 3 - Using some creates an array that checks if at least one number is positive

const numbers3 = [-1, -2, -3, -4, -5]

const hasPositiveNumber = numbers3.some(num => num > 0)

console.log(hasPositiveNumber)

// 4 - Using every checks if all numbers are positive

const numbers4 = [1, 2, 3, 4, 5]

const allPositive = numbers4.every(num => num > 0)

console.log(allPositive)