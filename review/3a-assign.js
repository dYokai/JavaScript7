let age = 25
let distance = 10.5
let bigTimeMillis = 12345678n

bigTimeMillis++
++bigTimeMillis // Προηγείται η αύξαση σε σχέση με το Postfix 
age = age + 2
distance -= 5

console.log(age, distance, bigTimeMillis)