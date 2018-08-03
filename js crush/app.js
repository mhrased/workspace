// var age = 23;
// var name = "Hasan Rashed";
//  skill =["HTML", "JavaScript", "CSS", "JQuery"];

// console.log(name);
// console.log(age);
// console.log(100 == "100");
// console.log(skill);
// console.log(typeof skill);



// var x = 18;

// if (x =>18) {
//    console.log("You can Eligible");
   
// }else{
//    console.log("You can't Eligible");
// }


// for (let i = 0; i < skill.length; i++) {
//    console.log(skill[i].toUpperCase());
// }

// console.log(skill.length);


// skill.forEach(function(name){
//    console.log(name + " Course");
// });



//function

// function myFunc(name,greet) {
//    console.log(greet + ' ' + name);
// }

// myFunc("Hasan", "Hello");

// var a = add(2)(5);

// function add(x){
//    return function(y){
//       return x+y;
//    }
// }

// console.log(a);


// var b = addd(2,5);

// function addd(x,y) {
//    return x+y;
   
// }
// console.log(b);


// var c = sub(2)(5);

// function sub(x){
//    return function(y){
//       return y-x;
//    }
// }

// console.log(c);


// var d = mul(2)(5)(4);

// function mul(x){
//    return function(y){
//       return function(z) {
//          return x*y*z;
//       }
//    }
// }

// console.log(d);

// var x = "i'm a lasagna hog".split("").reverse().join("");
// console.log(x);

// var foo = "Hello";
// (function() {
//   var bar = " World";
//   console.log(foo + bar);
// })();
// console.log(foo +bar);


// var fool = [];
// fool.push(1);
// fool.push(2);
// fool.pop();
// fool.pop();

// console.log(fool);

// console.log(fool.length);



// var foo = {n: 1};
// var bar = foo;
// foo.x = foo = {n: 2};
// console.log(foo.x);

// console.log('one');
// setTimeout(function() {
//   console.log('two');
// }, 0);
// Promise.resolve().then(function() {
//   console.log('three');
// })
// console.log('four');



// function cal(a,b){

//     function add(){
//       return a+b;
//     }
//     function subtr() {
//       return a-b;
//     }
//     function multy(){
//       return a*b;
//     }
//     function devide() {
//       return a/b;
//     }

//     return add() + " " + subtr() + " " + multy() +" "+ devide();

// }

// console.log(cal(21,5));

// function hello(n,callback) {
//   callback(n);
// }

// hello("Hasan Rased", function(args){
//   console.log("Hello " + args);
// });

// hello("Wpdev",function(s){
//   console.log("Welcome to our community " + s);
//   console.log("Length of " + s + " is = " + s.length);
// });



// var usr1 ={
//   name : "Hasan rashed",
//   id   : 01,
//   mail : "rasedr007@gmaiul.com",
//   age  :22,
//   phn  : 01515211297
// };


// var usr1 = [
//   {name : 'Hasan Rashed' , age : 22 , mail : 'rasedr007@gmail.com'},
//   {name : 'Mahmud' , age : 12 , mail : 'rasel.wp@gmail.com'},
//   {name : 'Mehedi' , age : 21 , mail : 'rased.wd@gmail.com'},
//   {name : 'Sabbir Hossain' , age : 28 , mail : 'sabbir@gmail.com'},
//   {name : 'Polash' , age : 27 , mail : 'polash@gmail.com'},
//   {name : 'Prianjoly' , age : 17 , mail : 'prity@gmail.com'},
//   {name : 'Nihar' , age : 15 , mail : 'nihar@gmail.com'},
//   {name : 'fardin Ahmed' , age : 12 , mail : 'farhan@gmail.com'}
// ];

// //usr1;


// function usrDetails(prsn , callback){

//   for (var i =0; i< usr1.length ; i++ ) {
//     console.log("person name : " + prsn[i].name);

//     if(prsn[i].age >= 20){
//       callback(prsn[i].mail, i);
//     }else{
//       console.log("index number is " + i + " & you are too little......");
      
//     }

//   }
// }

// usrDetails(usr1 , function(p,q){
//   console.log("index number is " + q +" & your email is : " + p);
// });


// function data(data, clb1, clb2) {
//   console.log(data);
//   clb1(data);
//   clb2(data);
  
// }

// data("This is Not Android App Development", function(d){
//   var x = d.toUpperCase();
//   console.log(x);
  
// }, function(s){
//   var y = s.toLowerCase();
//   console.log(y);
//   var z = s.split('');
//   console.log(z);++
//   var h = z.reverse();
//   console.log(h);
//   var g = h.join("");
//   console.log(g);
//   // console.log(g.replace(/^./, g[0].toUpperCase()));
  
// });


var arr1 = [10,40,3, 45,33,26,21,2,7,3,0,65];

// arr1.sort(function(a,b){
//   return a-b;
// });
// console.log(arr1);



var arr2 = [
  {name : 'Hasan Rashed' , age : 22 , mail : 'rasedr007@gmail.com ', gender : 'male'},
  {name : 'Mahmud' , age : 26 , mail : 'rasel.wp@gmail.com', gender : 'male'},
  {name : 'Mehedi' , age : 21 , mail : 'rased.wd@gmail.com', gender : 'female'},
  {name : 'Sabbir Hossain' , age : 28 , mail : 'sabbir@gmail.com', gender : 'male'},
  {name : 'Polash' , age : 27 , mail : 'polash@gmail.com', gender : 'male'},
  {name : 'Prianjoly' , age : 17 , mail : 'prity@gmail.com', gender : 'female'},
  {name : 'Nihar' , age : 15 , mail : 'nihar@gmail.com', gender : 'female'},
  {name : 'fardin Ahmed' , age : 12 , mail : 'farhan@gmail.com', gender : 'male'}
];
 

// // arr2;
// arr2.sort(function(a,b){
//   return a.age - b.age;
// });

// console.log(arr2);

// arr2.sort(function(a,b){
//   if(a.name > b.name){
//     return 1;
//   } else if(a.name < b.name){
//     return -1;
//   } else{
//     return 0;
//   }
// });

// console.log(arr2);
// var newArr =[];

// arr1.forEach(function(ele){
//   console.log(ele);
//   if(ele % 2 == 1){
//     newArr.push(ele);
//   }
//   newArr.sort(function(a,b){
//       return a-b;
//   });
// });

// console.log(newArr);
// console.log(typeof(newArr));


// var newAr = arr1.filter(function(ele){
//   return ele % 2 == 0;
// });

// console.log(newAr);

// function filtDeta(fil, callback){
//   var newAar = [];
//   for(var i = 0 ; i< fil.length; i++){
//     if(callback(fil[i])){
//       newAar.push(fil[i]);
//     }
//   }
//   return newAar; 
// }

// var y = filtDeta(arr1 , function(element){
//   return element % 2 == 1; 
// } );
// console.log(y);




// var z = newArr.join();
// console.log(z);
// console.log(typeof(z));


// function loop(arr, callback){
//   for (let i = 0; i < arr1.length; i++) {
//     //console.log(arr[i]);
//     callback(arr[i] , i);
//   }
// }

// loop(arr1, function(ele, i){
//   console.log('Index is ' + i);
//   console.log('Element is ' + ele);
  
// });





var y = arr2.map(function (val){
  if(val.gender == 'male'){
    return "Mr. " + val.name;
  }else{
    return "Ms. " + val.name;
  }
});

console.log(y);



var h = arr1.reduce(function(a,b){
    return a+b;
});

console.log(h);




