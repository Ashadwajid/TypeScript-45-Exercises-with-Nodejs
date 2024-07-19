let guestlist = ["Ashad", "Usman", "Ahzam", "Rohan"];

let dontCome = guestlist[0];

console.log(dontCome, "Nahi Ahh Sakhta");

guestlist.splice(0, 1, "Mujtaba");

guestlist.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));