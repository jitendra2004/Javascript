// Strings

const { arr } = require("./Day08");

// 1.Declaration of strings
let str1='i am jitendra';
let str2="i am mahendra";
let str3=`i am dharmendra`;
console.log(str1,str2,str3);

// 2.concatentation of strings
console.log(str1+str2+str3);

// 3.Special character print 
console.log("this is the best game \n just like pubg mobile game");  // next line
console.log("this is the best game \\n just like pubg mobile game");  // \n
console.log('"this is the best game just like pubg mobile game"');  // ""
console.log("'this is the best game \\n just like pubg mobile game'");  // ''

// 4.Accessing character by [] charAt()
let str="jitendra";
console.log(str[0],str[1]);
console.log(str.charAt(0),str.charAt(2));

// 5.case conversion
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// 6.Searching in string
console.log(str.includes("jit"));
console.log(str.indexOf("endra"));
console.log(str.lastIndexOf("a"));

// 7.Slice and substring
console.log(str.slice(1,3));
console.log(str.substring(1,4));
console.log(str.substr(0,5));

// 8.Replace and split
let str4=" this is best game is pubg mobile ";
console.log(str4.replace("is","in"));
console.log(str4.replaceAll("is","in"));
console.log(str4.split(""));

// 9.trim
console.log(str4.trim());
console.log(str4.trimEnd());
console.log(str4.trimStart());


// 10.New keyword
let str5=new String("mahendra");
console.log(str5);
console.log(typeof str5);
console.log(arr.includes(10));
