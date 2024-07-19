var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of Countries and Print its Original Order
var countriesToVisit = ["China", "Demark", "Brazil", "Argentina"];
console.log("Orginal Order:", countriesToVisit);
// Print the Array in Alphabatical order without modifying the Actual Array List
console.log(";Alphabatical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that the array is still in its Orignal order
console.log("Still in Orignal Order:", countriesToVisit);
// Print the Array in Reversed order  without modifying the Actual Array List
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
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
