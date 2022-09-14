/**
 * const, let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き";

// const変数は再宣言不可
// const val3 = "const変数を再宣言"

/**
 * テンプレート文字列
 */
// const name = "Tom";
// const age = 28;
// //「私の名前はTomです。年齢は28歳です。」
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// //従来の関数
// // function func1(str){
// //   return str;
// // }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(20, 15));
