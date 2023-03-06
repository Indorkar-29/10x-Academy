let text = "Hello World, Good Morning";
console.log(text.length); //25
console.log(text.charAt(2)); //l
let part = text.slice(2, 8);
console.log(part); //"llo Wo"
part = text.slice(-2, -8);
console.log(part); //
part = text.slice(-8, -2);
console.log(part); //" Morni"
part = text.slice(-8, 2);
console.log(part);
part = text.slice(2, -8);
console.log(part); //"llo World, Good"
part = text.slice(-8);
console.log(part); //" Morning"
part = text.slice(2);
console.log(part); //"llo World, Good Morning"
part = text.substring(2, 8);
console.log(part); //"llo Wo"
part = text.substring(-2, -8);
console.log(part);
part = text.substring(-8, -2);
console.log(part);
part = text.substring(-8, 2);
console.log(part); //"He"
part = text.substring(2, -8);
console.log(part); //"He"
part = text.substring(-8);
console.log(part); //"Hello World, Good Morning"
part = text.substring(2);
console.log(part); //"llo World, Good Morning"
console.log("Substr"); //"Substr"
part = text.substr(2, 8);
console.log(part); //"llo Worl"
part = text.substr(-2, -8);
console.log(part);
part = text.substr(-8, -2);
console.log(part); //" M"
part = text.substr(-8, 2);
console.log(part);
part = text.substr(2, -8);
console.log(part); //" Morning"
part = text.substr(-8);
console.log(part); //"llo World, Good Morning"
part = text.substr(2);
console.log(part);


// String Operations:
// Length: The length property returns the length of a string:
// Example:
// let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = txt.length;
// charAt(): The charAt() method returns the character at a specified index (position) in a string:
// Example:
// let text = "HELLO WORLD";
// let char = text.charAt(0);
// Extracting String Parts:
// There are 3 methods for extracting a part of a string:
// 1) slice(start, end): extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: the start position, and the end position (end not included).
// Example:
// Slice out a portion of a string from position 7 to position 13 (13 not included):
// let str = "Lotus, Rose, Sunflower";
// let part = str.slice(7, 13);
// ans = "Rose, "
// If a parameter is negative, the position is counted from the end of the string.
// This example slices out a portion of a string from position -12 to position -6:
// Example:
// let str = "Lotus, Rose, Sunflower";
// let part = str.slice(-12, -6);
// ans = "e, Sun"
// If you omit the second parameter, the method will slice out the rest of the string:
// Example:
// let str = "Lotus, Rose, Sunflower";
// let part = str.slice(7);
// ans = "Rose, Sunflower"
// or, counting from the end:
// Example:
// let str = "Lotus, Rose, Sunflower";
// let part = str.slice(-12);
// ans = "e, Sunflower"
// 2) substring(start, end): The difference is that start and end values less than 0 are treated as 0 in substring().
// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
// The substring() method extracts characters from start to end (exclusive).
// The substring() method does not change the original string.
// If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
// Start or end values less than 0, are treated as 0.
// Example:
// let str = "Lotus, Rose, Sunflower";
// let part = str.substring(7, 13);
// ans = "Rose, "
// If you omit the second parameter, substring() will slice out the rest of the string.
// 3) substr(start, length): The difference is that the second parameter specifies the length of the extracted part.
// The substr() method extracts a part of a string.
// The substr() method begins at a specified position, and returns a specified number of characters.
// The substr() method does not change the original string.
// To extract characters from the end of the string, use a negative start position.
// Example:
// let str = "Lotus, Rose, Sunflower";
// let part = str.substr(7, 6);