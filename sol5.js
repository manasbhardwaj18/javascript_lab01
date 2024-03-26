for (let i = 1; i <= 10; i++) {
    let result = '';
    for (let j = 1; j <= i; j++) {
        result += '3';
        if (j < i) {
            result += '+';
        }
    }
    result += '=' + (3 * i);
    console.log(`3 * ${i} = ${result}`);
}
