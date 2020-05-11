class ArrayOperations {
    public names: Array<string>;
    constructor() {
        this.names = new Array<string>();

        this.names.push("Ram");
        this.names.push("Rameshwar");
        this.names.push("Suresh");
        this.names.push("Raju");
    }

    SortingByStringLength(names: Array<string>): Array<string> {
        if (names != null && names.length > 0) {
            names.sort(function (a, b) {
                return a.length - b.length;
            });
        }
        return names;
    }

    ReverseString(names: Array<string>): Array<string> {
        if (names != null && names.length > 0) {
            names.forEach((name, i: number) => {
                names[i] = name.split("").reverse().join("");
            });
        }
        return names;
    }
}

let arrayOperation = new ArrayOperations();

let sortedArray = arrayOperation.SortingByStringLength(arrayOperation.names);
console.log(`Sorted Array by String length => ${JSON.stringify(sortedArray)}`);
let reversedString = arrayOperation.ReverseString(sortedArray);
console.log(`Reversed string => ${JSON.stringify(reversedString)}`);

