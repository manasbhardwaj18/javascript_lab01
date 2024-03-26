function findUniqueNumbers(arr) {
    return arr.reduce((unique, num) => {
        if (!unique.includes(num)) {
            unique.push(num);
        }
        return unique;
    }, []);
}

const numbers = [10, 20, 30, 45, 10, 23, 30, 56, 78, 10, 45, 90];
const uniqueNumbers = findUniqueNumbers(numbers);
console.log("Unique numbers:", uniqueNumbers);
