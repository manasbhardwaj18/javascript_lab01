try {
    const undefinedObject = undefined;
    console.log(undefinedObject.property);
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Caught TypeError:", error.message);
    } else {
        console.log("An error occurred:", error.message);
    }
}

try {
    const definedObject = { property: "value" };
    console.log(definedObject.property);
} catch (error) {
    console.log("An error occurred:", error.message);
}
