console.log("Assingment1");

//Sidomulyo, Ryan Yedid-Yah
//Bokko, Shalom Joan
//Purba, Joshua Reinhard Loundren

//CONCAT
var string1 = "Hello";
var string2 = "World";
var n = string1.concat(string2); //concat berguna untuk mengabungkan berbagai variabel kata yang berbeda.
 console.log(n);

 //INCLUDES
 let text = "                       hayy";
let result = text.includes("hayy"); //includes berguna untuk membalikan nilai true ketika variabelnya sama dan ketika berbeda akan membalikan nilai false.
console.log(result);

//LENGTH
let text2 = "Hello World!";
let length = text2.length; // length digunakan untuk mencari tahu panjang sebuah string.jadi kalau suatu text itu kosong maka panjang stringnya 0.
console.log(length);

//SPLIT
let text3 = "How are you doing today?";
const myArray = text3.split(" ");   // kegunaan dari split adalah digunakan untuk membagi string menjadi array substring, dan mengembalikan array 
console.log(myArray); 

//SLICE
let text4 = "Hello world!";
let potong = text4.slice(1, 4);  // Slice berguna untuk memotong array menjadi array baru atau menjadi subarray dari array asal
console.log(potong);

//SUBSTRING
let text5 = "Hello world!";
let potong2 = text5.substring(4, 1);    // memiiliki kegunaan yang sama seperti SLICE, tetapi pada substring dapat memotong kata dari kanan ke kiri (jumlah start dapat lebih besar dari jumlah stop)
console.log(potong2);

//ToLowerCase
let text6 = "HELLO WORLD";
let kecil = text6.toLowerCase();    // jadi kegunaan dari Lowercase adalah untuk mengubah huruf kapital menjadi huruf kecil 
console.log(kecil);

//ToUpperCase
let text7 = "hello world";
let besar = text7.toUpperCase();    // jadi kegunaan dari Lowercase adalah untuk mengubah huruf kapital menjadi huruf kecil 
console.log(besar);

//TRIM
let text8 = "Hello World!";
let potong3 = text8.trim();  //dapat disimpulkan bahwa kegunaan trim ini bisa menghapus atau mengembalikan index sebuah kata yang memiliki spasi menjadi seperti semula.
console.log(potong3);

//ValueOF
let text9 = "Hello World!";
let asli = text9.valueOf(); // ValueOf dapat digunakan untuk mengembalikan nilai asli suatu array
console.log(asli);
