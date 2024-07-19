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

// Inform that ponly two guests can be invited for dinner 
console.log("Unfortunately, the new dinner table wont arrive on time, so I can invite only two guests to dinner with me");

// Using while-loop to remove guests from the array until only two names remain
while(guestList.length > 2){ 
    let removedGuests = guestList.pop(); 
    console.log(`Sorry, ${removedGuests} I cant invite you to dinner`);
}
// Sending a invitation to the last two guest on the list
console.log("Invitation to the last two Guests");

guestList.forEach(lasttwo=> console.log(`Luckly ${lasttwo}, you are stiull invited to dinner`));

// Removing last two guest from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);