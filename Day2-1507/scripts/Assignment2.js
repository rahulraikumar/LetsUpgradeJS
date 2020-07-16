let str= "I am a letsUpgrade student!!!";

//slice(start, end)
let slicedStr = str.slice(7,18); //parameters are the indexes
let negSlcStr = str.slice(-3); //negative parameters accepted

console.log("str = ", str);
console.log("slicedStr = ", slicedStr);
console.log("negSlcStr = ", negSlcStr);

//substring(start, end) -- its similar to slice()
let subString = str.substring(19,26); //substr doesnt take negative parameters
console.log("subString = ", subString);

//substr(start, length) --> second parameter is the length of the extracted part
let subStr = str.substr(11, 7);
console.log("subStr = ", subStr);


//replace() method will replace a part of the string
let replacedStr = str.replace("student", "rowdy");
console.log("replacedStr = ", replacedStr);

//trim() --> it removes white spaces from both sides of a string
let str1 = "      Hi people!!!     "
let trimmedStr = str1.trim();
console.log("str1 = ", str1);
console.log("trimmedStr = ", trimmedStr);