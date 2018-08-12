var people = {
   name : 'Hasan Rased',
   func : function(){
      setTimeout(function(){
            console.log(this);
            
            console.log('This is '+ this.name);
            
      }.bind(this),2000);
   }
};

people.func();


function book(name, age, occu){
      this.name = name;
      this.age = age;
      this.occu = 'ocu'
}


book.prototype = {
      hello : function(){
            console.log('Name : ' + this.name + ' , Age : '+ this.age);
            
      },

      email : 'rasedr007@gmail.com',

      another : function(){
            console.log(this.occu);
            
      }
}

var p1 = new book('Hasan' , 24 , 'student');
var p2 = new book("RAsed", 22 ,'freelanchar');
console.log(p1);
p2;



function book() {
      console.log(this.name + ' : ' + this.id);     
}

var obj = {
      name : 'Rased',
      id : 01
}

var obj2 = {
      name : "Hasan",
      id :  02
}

// var res =  book.bind(obj);
// res();

book.call(obj2);
book.apply(obj);