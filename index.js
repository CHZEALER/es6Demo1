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
// // function taiji(...arg){
// //     console.log(arg[0]);
// //     console.log(arg[1]);
// //     console.log(arg[2]);
// //     console.log(arg[3]);
// // }
// // taiji(2,1,3);
// // 声明两个数组arr1和arr2，然后我们把arr1赋值给arr2，然后我们改变arr2的值，发现arr1的值也改变了
// // let arr1 = ['yang','ye','dog'];
// // //let arr2 = arr1;
// // let arr2 = [...arr1];
// // console.log(arr2);
// // arr2.push('yyg');
// // console.log(arr2);
// // console.log(arr1);
// // rest ...
// // function taiji(second,a,...arg){
// //     console.log(arg.length);
// // }
// // taiji(0,1,2,3,4,5,6,7);

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

//es6箭头函数
// 默认值  es6箭头函数
// function add(a,b){//es5中不能有默认值
//     // 'use strict'
//     return a+b;
// }
// console.log(add.length);
// var add=(a,b=1)=>a+b;
// console.log(add(3,7));

// 此处获得的参数的个数是必须传递参数的个数，如果有默认自则不计入其内
// 有严谨模式‘use strict’函数有默认值的时候是不行的
// function add(a,b=1){
//     // 'use strict'
//     return a+b;
// }
// console.log(add.length);
//这时控制台打印出了2，但是如果我们去掉严谨模式，并给第二个参数加上默认值的话，
// 这时候add.length的值就变成了1， 也就是说它得到的是必须传入的参数。
// // // 此处获得的参数的个数是必须传递参数的个数，如果有默认自则不计入其内

//对象的函数解构 json/
// let json = {
//     a:'yy',
//     b:'yangye'
// }
// function fun({a,b="烨"}) { //{ }json要加大括号
//     console.log(a,b);
// }
// fun(json);

//数组解构
// let arr = ['yy','ss','yangye'];
// function fun(a,b,c,d='qq'){
//     console.log(a,b,c,d='ww')
// }
// fun(...arr);

// in的用法
// let obj ={ //类似于键值对检索
//     a:'yy',
//     b:'yege'
// }
// //c指key
// console.log('c' in obj);


// 数组判断

// let arr=[,,,];
// console.log(arr.length); //3 ,若最后一个为空，则显示最大的数组下标
// console.log(0 in arr);  // false,这里的0指的是数组下标位置是否为空。
// let arr1=['yy','yege'];
// console.log(0 in arr1);  // true，指数组下标为0的位置是否为空
// console.log(0 in arr);

// 数组遍历 forEach,filter,some,map替换
// let arr = ['yy','yege','ludan'];
// arr.forEach((val,index)=>console.log(index,val));
// arr.filter(x => console.log(x));
// arr.some(x => console.log(x));
// console.log(arr.map(x=>'web'));
// 数组转换成字符串
// let arr = ['yy','yege','ludan'];
// console.log(arr.toString());
// console.log(arr.join('|'));


//es6对象

//对象赋值
// let name = 'yangye';
// let  home = '蓟县';
// var obj = {name,home};
// console.log(obj);

//key值的构建
// let key = 'type'
// var obj={
//     [key]:'dog'
// }
// console.log(obj);

//自定义对象方法
// let obj = {
//     add:function(a,b){
//         return a+b;
//     },  //多个自定义方法用，隔开
//     xxx:function (a,b) {
//         return a*b;
//     }
// }
// console.log(obj.add(1,2));
// console.log(obj.xxx(4,6));

// Object.is( ) 对象比较
// // ===同值相等 is严格相等
// let obj1={name:'yy'};
// let obj2={name:'yy'};
// console.log(obj1.name===obj2.name);
// console.log(Object.is(obj1.name,obj2.name));
// console.log(+0===-0);
// console.log(NaN===NaN);
// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));


//assign，可以用于对象合并
// let a={a:'yy'};
// let b={b:'yangye'};
// let c={c:'dog'};
// let d=Object.assign(a,b,c);
// console.log(d);

// Symbol  ES6新增的

// Symbol的打印
// let yy = Symbol('杨烨');
// console.log(yy);
// console.log(yy.toString());


// //symbol在对象中的应用
// let yangye = Symbol();
// let  obj = {
//     [yangye]:'goubi'
// }
// console.log(obj[yangye]);
// obj[yangye]='小孤儿';
// console.log(obj[yangye]);


//Symbol对象元素的保护作用
// let  obj = {name:'yy',father:'qige'};
// let age = Symbol();//保护age
// obj[age]=30;
// console.log(obj);
// for (let a in  obj){//循环输出对象时，隐藏age
//     console.log(obj[a]);
// }
// console.log(obj[age]);

//set声明

 let setary =new Set(['yy','yangye','yege','dog']);
// setary.add('lujunshuang');
// console.log(setary);
// // has查找set中的值
// console.log(setary.has('yege'));

// Set值的增删改
// setArr.clear(); //删除全部
// // 删除一个
// setArr.delete('web');
// console.log(setArr);

//循环输出

//for...of
// for (let it of  setary){
//     console.log(it);
// }
// forEach
// setary.forEach((value => console.log(value)));
// size属性  size属性可以获得Set值的数量。
// console.log(setary.size);


//^*^*^*^*^*^WeakSet的声明  这块有个坑，如果则会输出两遍obj的值
// let weakObj = new WeakSet();
// let obj={a:'lj',b:'梁娟'};
// let obj1 = obj;
// // let obj1={a:'lj',b:'梁娟'};
// weakObj.add(obj);
// weakObj.add(obj1);
// console.log(weakObj);

//map数据类型
// json

// let json={
//     name:'lj',
//     skill:'web'
// };
// console.log(json.name);
//
//
// var map = new Map();
// map.set(json,'I am');
// console.log(map);
// map.set('lj',json);
// console.log(map);

//map增删查
//get 取值
// console.log(map.get('lj'));
// delete 删除特定的值
// map.delete(json);
// console.log(map);
// clear 删除全部的值
// map.clear();
//size
// console.log(map.size);
//has
// console.log(map.has('lj'));

//Proxy声明
// var pro = new Proxy({//方法的主体
//         add: function (val) {
//             return val + 77;
//         },
//         name: '我是杨烨我是狗'
//     },{ //钩子函数，方法预处理
// // get
//     get: function (target, key ,property) { //target：目标值，key，目标的key值
//         console.log('come in Get')
//         return target[key];
//     },
// // set
//     set:function(target,key,value,recriver){ //value:要改变的值
//         console.log(` setting ${key} = ${value}`);
//         return target[key] = value+'222';
//     }
//
//
// });
// console.log(pro.add(23),pro.name);
// console.log(pro.name);
// pro.name='yyyyyyy'
// console.log(pro.name);

//apply的使用
// let target = function(){
//     return 'I am lj';
// }
// let handler={
//     apply(target,ctx,args){
//         console.log('do apply');
//         return Reflect.apply(...arguments);
//     }
// }
// let pro = new Proxy(target,handler);
// console.log(pro());



//promise

// let state = 1;
// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭完成')
//     }else{
//         reject('洗菜做饭-错误')
//     }
// }
//
// function step2(resolve,reject){
//     console.log('2.开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭')
//     }else{
//         reject('坐下来吃饭-错误')
//     }
// }
//
// function step3(resolve,reject){
//     state = 0;
//     console.log('3.开始-收拾桌子');
//     if(state==1){
//         resolve('收拾桌子')
//     }else{
//         reject('收拾桌子-错误')
//     }
// }
//
// new Promise(step1).then(function(val){
//     console.log(val);
//     return new Promise(step2);
// }).then(function(val){
//     console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
// });







