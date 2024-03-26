
function intersection(arr1, arr2) {
    const ans = [];
    for (let num of arr1) {
        if (arr2.includes(num)) {
            ans.push(num);
        }
    }
    return ans;
}
const arr1 = [1, 3, 5, 7, 9];
const arr2 = [1, 4, 9, 16, 25];

const intersectingNumbers = intersection(arr1, arr2);
console.log("Intersection of the two arrays:", intersectingNumbers);
