// Creating a Guestlisty Array
let guestList = ["Ashad", "Usman", "Ahzam", "Rohan"];

// Makimg Variable For Those People Who Cant Come
let dontCome = guestList[0];

// Print The Name of Guest who cant come
console.log(dontCome, "Nahi Ahh Sakhty");

// Add or Remove Values of Guest List Array
guestList.splice(0, 1, "Mujtaba");

// Message Print For Bigger Table
console.log("Good News ! We Have Found a Bigger Table For Dinner");

// Adding a new value at starting index of array
guestList.unshift("Ali");

// Adding a new value at ending index of array
guestList.push("Zain");

// Making a Variable for storing a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "usama");

// Print Message of Updated list
console.log("Updated List of our Guests");

// Sending a invatation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me?`));