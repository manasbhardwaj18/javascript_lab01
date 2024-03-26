const cities = ["Nagpur", "Bhopal", "Delhi", "Udaipur"];
const city = prompt("Enter your city name:");
const idx = cities.indexOf(city);
if (idx !== -1) {
    console.log(`The city "${city}" exists at index ${idx}.`);
} else {
    console.log("Not Found");
}
