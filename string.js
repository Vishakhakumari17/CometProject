let msg= "     Hello   ";

// let pass= prompt("enter your password");
// console.log(pass.trim());

let str= "   Random string    ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);
console.log(str.substring());
console.log(str.substr());
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.padStart());
console.log(str.padEnd());
console.log(str.charAt(6));
console.log(str.charCodeAt(6));
console.log(str.split(''));
console.log(str.slice(5, 12));
console.log(str.indexOf("Random"));
console.log(str.replace("Random","replace"));

let msg1 = "help!";
console.log(msg1.trim().toUpperCase());

let name= "ApnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));


let marks=[45,67.9,78];
console.log(marks[1]);
let stuNname= ["Shradha"];
console.log(stuNname);


// WAP to change the array content 
let numbers= [2,4,5,6,7,9];
function squareArray(arr){
    for(let i=0; i<arr.length; i++){
        arr[i]= arr[i] * arr[i];
    }
    return arr;
}

let squareNum= squareArray(numbers);
console.log(squareNum);


//WAP to demonstrate the use of Array functions: pop(), push(), sort(), reverse()
let menu= ["Dosa", "Samose", "Burger", "Pizza"];
console.log(menu.push("Chaumin"));
console.log(menu);
console.log(menu.pop());
console.log(menu);

//Date
const d= new Date("2024-08-30");
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getTime());

// WAP to call a function using submit button
let btn= document.getElementById("submit");
