var ArrayOperations = /** @class */ (function () {
    function ArrayOperations() {
        this.names = new Array();
        this.names.push("Ram");
        this.names.push("Rameshwar");
        this.names.push("Suresh");
        this.names.push("Raju");
    }
    ArrayOperations.prototype.SortingByStringLength = function (names) {
        if (names != null && names.length > 0) {
            names.sort(function (a, b) {
                return a.length - b.length;
            });
        }
        return names;
    };
    ArrayOperations.prototype.ReverseString = function (names) {
        if (names != null && names.length > 0) {
            names.forEach(function (name, i) {
                names[i] = name.split("").reverse().join("");
            });
        }
        return names;
    };
    return ArrayOperations;
}());
var arrayOperation = new ArrayOperations();
var sortedArray = arrayOperation.SortingByStringLength(arrayOperation.names);
console.log("Sorted Array by String length => " + JSON.stringify(sortedArray));
var reversedString = arrayOperation.ReverseString(sortedArray);
console.log("Reversed string => " + JSON.stringify(reversedString));
