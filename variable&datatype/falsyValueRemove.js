// Create a function that remove falsy value from an array.

// Code:

function removeFalsyValues(dataList) {
    const cleanData = dataList.filter(data => data);
    console.log(cleanData)
}

const mixedData = ["Mamun", 1, 0, "", NaN, undefined, "Developer", 100, ["A", 5]];

removeFalsyValues(mixedData)