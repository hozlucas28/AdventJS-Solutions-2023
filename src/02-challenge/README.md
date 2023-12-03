# Challenge 02

In Santa's workshop, the elves have a list of gifts they want to make and a limited set of materials.

Gifts are text strings and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of craftable gifts.

A gift can be made if we have all the necessary materials to make it.

```js
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'train' YES because its letters are in 'tronesa'
// 'bear' YES because its letters are in 'tronesa'
// 'ball' NO because its letters are NOT in 'tronas'

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
```
