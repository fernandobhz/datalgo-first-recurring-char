const firstRecurringChar = array => {
  const map = {};

  for (let item of array) {
    if (!map[item]) {
      map[item] = 1;
    } else if (map[item]) {
      return item;
    }
  }
}

console.log(firstRecurringChar([2,5,1,2,3,5,1,2,4]))
console.log(firstRecurringChar([2,1,1,2,3,5,1,2,4]))
