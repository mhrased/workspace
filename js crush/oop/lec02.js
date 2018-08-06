function Func(name, author) {
   this.name = name;
   this.author = author;
}

var p1 = new Func('Math' , 'Hasan');
var p2 = new Func('Chymestry' , 'Kowshik');

var p3 = new Func('English' , 'Sabbir');
var p4 = new Func('Accounting' , 'Rony');

p1;
p2;
p3;
p4;

var arr = [p1,p2,p3,p4];
// console.log(arr);

arr.forEach(ele => {
   console.log(ele.name +" => "+ ele.author);
});

for(var props in p2){
   console.log(props + " => " + p2[props]);
}

console.log(p1.constructor);
