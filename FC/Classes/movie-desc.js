let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Define your class here
// your class name should be 'Movie' and  method name as 'run'
class Movie {
    constructor(lm, nc, lg) {
        this.lengthInMinutes = lm;
        this.numCharacters = nc;
        this.language = lg;
    }
    run() {
        return ("This is a " + this.language + " movie with " + this.numCharacters + " characters and is " + this.lengthInMinutes + " minutes long.")
    }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE

let language = readLine();
let numCharacters = readLine();
let lengthInMinutes = readLine();

let movie = new Movie(lengthInMinutes, numCharacters, language)
console.log(movie.run());