var guestlist = ["Ashad", "Usman", "Ahzam", "Rohan"];
var dontCome = guestlist[0];
console.log(dontCome, "Nahi Ahh Sakhta");
guestlist.splice(0, 1, "Mujtaba");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
