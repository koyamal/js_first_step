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

/**
 * 分割代入
 */
// const myProfile = {
//   name: "Tom",
//   age: 28
// };
// const msg1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(msg1);

// const { name, age } = myProfile;
// const msg2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(msg2);

// const myProfile = ["Tom", 28];
// const msg3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(msg3);

// const [name, age] = myProfile;
// const msg4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(msg4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
// sayHello();
// sayHello("Tom");

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["tanaka", "yamada", "suzuki"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const newNameArr = nameArr.map((name) =>{
//   if (name === "yamada"){
//     return name
//   }else{
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) =>
//   num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です";
// console.log(checkSum(30, 20));

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// || は左側がfalseなら右側を返す。左側がtrueなら左
// const num = null;
// const num2 = undefined;
// const fee = num || "金額未設定です";
// const fee2 = num || num2;
// console.log(fee);
// console.log(fee2);

// && は左側がtrueなら右側を返す。左側がfalseなら左
// const num3 = null;
// const fee3 = num3 && "何か設定されました";
// console.log(fee3);

// const num4 = null || 5;
// console.log(num4);
