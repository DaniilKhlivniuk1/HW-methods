
const fruits = ["apple", "pear", "mango", "banana"]
const fruitsJoin = fruits.join(",");
console.log(fruitsJoin)
let task1 = "";
for (let i = 0; i < fruits.length; i++) {
  task1 += fruits[i];
  if (i === fruits.length - 1) {
    break;
  }
  task1 += ", ";
}
console.log(task1);

const cards = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5",
];
console.log(cards)

const deleteCard = cards.splice(cards.indexOf("Карточка-3"), 1);
console.log(deleteCard);

cards.push("Карточка-6")
console.log(cards)

cards.splice(2, 1, "НоваКарта-4");
console.log(cards);