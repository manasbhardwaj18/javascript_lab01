const languages = ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift", "Go", "Rust", "TypeScript", "PHP"];
function longestString(arr) {
    let ans = "";
    for (let str of arr) {
        if (str.length > ans.length) {
            ans = str;
        }
    }
    return ans;
}

const longestLanguage = longestString(languages);
console.log("Longest programming language:", longestLanguage);
