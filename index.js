//全局变量
// var a = "yangye";
//  console.log(a);
//局部变量
// let a="yy";
// window.onload = function(){
//     console.log(a);
// }
// 测试let局部申明
//只在区块里面申明，看控制台显示什么
// var a = 2;
// {
//     let a = 3;
// }
// console.log(a);

// 用var申明的循环
// for (let i=0;i<10;i++){
//     console.log('循环体中：'+i);
// }
// console.log('循环体外：'+i);

// 数组结构解构的方式
// let [a,b,c,d] = [1,2,3];
// console.log(d);
// 解构的默认值  undefined相当于什么都没有，b是默认值。
// let [a,b="yy"] = ['杨烨',undefined];
// console.log(a+b);   // 控制台显示“杨烨yy”
// undefined和null的区别
// let [a,b="yy"]=['杨烨',null];
// console.log(a+b); //控制台显示“杨烨null”

//对象解构赋值
// let {foo,bar} = {bar:'杨烨',foo:'狗'};
// console.log(foo+bar);   //控制台打印结果为狗杨烨

// 扩展运算符
// 对象扩展运算符
// function taiji(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
// taiji(2,1,3);
// 声明两个数组arr1和arr2，然后我们把arr1赋值给arr2，然后我们改变arr2的值，发现arr1的值也改变了
// let arr1 = ['yang','ye','dog'];
// //let arr2 = arr1;
// let arr2 = [...arr1];
// console.log(arr2);
// arr2.push('yyg');
// console.log(arr2);
// console.log(arr1);
// rest ...
// function taiji(second,a,...arg){
//     console.log(arg.length);
// }
// taiji(0,1,2,3,4,5,6,7);

// 字符串模板
//es5拼串
// let yy='杨烨';
// let dog='dog yy xiaoxixi'+yy+'qishixinli mamaipi';
// document.write(dog);
//es6拼串
// let yy='杨烨';
// let dog=`dog yy xiaoxixi${yy}qishixinli mamaipi`;
// document.write(dog);
// 字符串模板对运算的支持
// let a=1;
// let b=2;
// let result=`${a+b}`;
// document.write(result);

//字符串查找
//es5写法
// let yy='杨烨';
// let dog='dog yy xiaoxixi'+yy+'qishixinli mamaipi';
// document.write(dog.indexOf(yy)>0);
//es6写法
// let yy='杨烨';
// let dog=`杨烨dog yy xiaoxixi${yy}qishixinli mamaipi`;
// document.write(dog.includes(yy));
// // // 判断开头是否存在
// document.write(dog.startsWith(yy));
// // //判断结尾是否存在
// document.write(dog.endsWith(yy));

//6.数字操作 es5也有
// 二进制 Binary 0B开头
// let binary = 0B010101;
// console.log(binary);
// // 八进制 0o开头
// const octal = 0o666;
// console.log(octal);

// 如何判断是否是数字
// let a = 11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('yy'));
// console.log(Number.isFinite(7));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));
// ES5 判读NaN
console.log("******************************");
console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN('taiji'));
console.log(isNaN(123));
console.log(isNaN({}));
console.log(isNaN(100+'2a'));
console.log("#############################");
// ES6 判读Number
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN('taiji'));
console.log(Number.isNaN(123));
console.log(Number.isNaN({}));
console.log(Number.isNaN(100+'2a'));
console.log("#############################");

// let a= 777.7;
// console.log(Number.isInteger(a)); //判断是否为整数
// console.log(Number.parseInt(a)); //777
// console.log(Number.parseFloat(a));//777.7

// ES6新增的数组知识
// let json ={
//     '0':'yy',
//     '1':'杨烨',
//     '2':'蓟县烨哥',
//     length:3
//
// //    length必须写，
// }
// console.log(json);
//把json数组转换成array  Array.from方法
// let arr = Array.from(json);
// console.log(arr);

// Array.of方法
// let  arr = Array.of(1,3,2,6,7);
// console.log(arr);

//find() 实例方法
// let  arr = [1,2,3,4,5,6,7,8.9];
// console.log(arr.find(function (value,index,arr) {
//     return index>6;
// }));

// fill
// let  arr=['杨烨','yy','goubi','烨哥','狗王'];
// arr.fill('小轩',0,1);
// arr.fill('卤蛋',3,4);
// console.log(arr);
// // fill左闭右开

