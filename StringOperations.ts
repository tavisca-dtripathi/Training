class StringOperations {
    public randomString: string;
    constructor(inputString: string){
        this.randomString = inputString;
    }

    GetOccurances(key : string, inputString : string) : Array<number> {
        let indexesOf = new Array<number>();
        let charArray = inputString.toLowerCase().split("");
        charArray.forEach((v:string,i:number) => {
            if(v == key){
            indexesOf.push(i);
            }
        });
        return indexesOf;
    }

    GetStatements(inputString : string) : Array<string> {
        let statements = inputString.split(".");
        let updatedStatements = new Array<string>();
        statements.forEach((statement, i: number) => {
            if(statement.length > 0){
                statement = statement.trim();
                statement = statement.replace(statement.charAt(0),statement.charAt(0).toUpperCase());
                updatedStatements.push(statement)
                console.log(statement);
            }
        });
        
        return updatedStatements;
    }
}

let stringOperations = new StringOperations("Define a string variable with data of 100 characheters in it and perform the following operation on the data - Find out the indexes and occurances of character 'a' in it - Findout number of statements in the string.. value after. symbol - Convert the first character of the statement in Upper case.");
let statements = stringOperations.GetStatements(stringOperations.randomString);
console.log(`Number of Satatement = ${statements.length}`);
let indexes = stringOperations.GetOccurances("a",stringOperations.randomString);
console.log(`Number of occurances of a = ${indexes.length} and indexes of occurances = ${JSON.stringify(indexes)}`);
