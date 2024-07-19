// Making a Array of Countries and Print its Original Order
let countriesToVisit: String[] = ["China", "Demark", "Brazil", "Argentina"];
console.log("Orginal Order:", countriesToVisit);

// Print the Array in Alphabatical order without modifying the Actual Array List
console.log(";Alphabatical Order:", [...countriesToVisit].sort());

// Show that the array is still in its Orignal order
console.log("Still in Orignal Order:", countriesToVisit);

// Print the Array in Reversed order  without modifying the Actual Array List
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that the array is still in its Orignal order
console.log("Still in Orignal Order:", countriesToVisit);

// We have changed the Orignal Array Order Now
console.log("Orignal Array Reversed:", countriesToVisit.reverse());

// Print the array to show that it's back to its orignal order
console.log("Back to Orignal Order", countriesToVisit.reverse());

// Print the array to show that its order has been changed in Alphabatical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// We have changed the Orignal Array Order now
console.log("Orignal Array Reversed:", countriesToVisit.reverse());