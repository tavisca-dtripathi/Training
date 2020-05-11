var StringOperations = /** @class */ (function () {
    function StringOperations(inputString) {
        this.randomString = inputString;
    }
    StringOperations.prototype.GetOccurances = function (key, inputString) {
        var indexesOf = new Array();
        var charArray = inputString.toLowerCase().split("");
        charArray.forEach(function (v, i) {
            if (v == key) {
                indexesOf.push(i);
            }
        });
        return indexesOf;
    };
    StringOperations.prototype.GetStatements = function (inputString) {
        var statements = inputString.split(".");
        var count = 0;
        statements.forEach(function (v, i) {
            if (statements[i].length > 0) {
                statements[i] = statements[i].trim();
                statements[i] = statements[i].replace(statements[i].charAt(0), statements[i].charAt(0).toUpperCase());
                console.log(statements[i]);
            }
            else
                statements.splice(i, 1);
        });
        return statements;
    };
    return StringOperations;
}());
var stringOperations = new StringOperations("Define a string variable with data of 100 characheters in it and perform the following operation on the data - Find out the indexes and occurances of character 'a' in it - Findout number of statements in the string. value after. symbol - Convert the first character of the statement in Upper case.");
var statements = stringOperations.GetStatements(stringOperations.randomString);
console.log("Number of Satatement = " + statements.length);
var indexes = stringOperations.GetOccurances("a", stringOperations.randomString);
console.log("Number of occurances of a = " + indexes.length + " and indexes of occurances = " + JSON.stringify(indexes));
