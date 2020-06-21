// FILTER (I PRZYPOMNIENIE MAP)
const arr = [34, 219, 109, 33, 67, 14, 999];

// Filter
const oddNumbers = arr.filter((number) => number % 2);
const evenNumbers = arr.filter((number) => !(number % 2));
const numbresBiggerThan100 = arr.filter((number) => number > 100);

// Map
const double = arr.map((number) => number * 2);

//forEach
arr.forEach((number, index) => {
    arr[index] = number * 2;
})