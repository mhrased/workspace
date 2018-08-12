// const a = 10;
// const b = 20;

// const sum = (a,b) => a+b;

// console.log(sum(a,b));
// console.log('setup webpack server');
// console.log('working auto');

// // alert('This is Es6')

// const print = a => { console.log('My age id ' + (a+10)); }

// print(a);

// const x = () => {console.log('a is not undefined')}
// x()


// const Obj = {
//    a,
//    b,
//    print : (a,b) => { console.log(a + b) }  
// }

// Obj.print(a,b)
// console.log(Obj.a)


// let name = 'Hasan Rased'
// let email = 'rsaedr007@gmail.com'
// let age = 24

// const res = {
//    name,
//    email,
//    age,
//    print : function() {
//       setTimeout((name) => { console.log('name : ' + this.name) },2000)
//    }
// }

// res.print(name);


// const arr =['Hasan Rased','prianjol yalam','rasel']

// let [f,g,h] = arr

// console.log(h)

// const obj = {
//    fname : 'Hasan',
//    lname : 'rased'
// }

// let {fname , lname} = obj
// console.log(lname);

// let ln = 'Mahmudul'
// let fn = 'Rasel'

// const printName = ({fn, ln}) => { console.log(`First Name : ${fn} & Last Name : ${ln}`) }

// printName({ln,fn})




// const umb = (...numbr) => { return numbr.reduce((z,n) => z+n)}

// console.log(umb(10,20,30,50,25));


// let obj12 = {
//    m : 'Prianjoly',
//    n : 'Alam'
// }

// let obj13 = {
//    // ...obj12,
//    n: 'Ketso',
//    o: 18
// }

// console.log(obj13.n);


// import * as Math from './math'

// import {add , mod} from './math'

// console.log(mod(10,4));



// import Person from './person'


// console.log(Person);


// let x1 = new Person('Hasan Rased', 'rasedr007@gmail.com')

// console.log(x1.print());

import Student from './student'

console.log(Student);

let n = new Student('Rasel Mahmud','rasel@gmail.com', 26)

console.log(n.welcome());

