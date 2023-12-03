# Challenge 01

At the North Pole Toy Factory, each toy has a unique identification number.

However, due to an error in the toy machine, some numbers have been assigned to more than one toy.

Find the first ID number that has been repeated, **where the second occurrence has the smallest index**!

In other words, if there is more than one repeating number, you should return the number whose second occurrence appears first in the list. If there are no repeating numbers, it returns -1.

```js
const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Although 2 and 3 are repeated the 3 appears first for the second time

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// It is -1 since no number is repeated

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
```

> The elves say this is a technical test from Google.

## Earned score

![220 points](../../.github/01-challenge-score.png)
