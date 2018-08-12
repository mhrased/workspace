


class Person {

   constructor(name, email){
      this.name = name
      this.email = email
   }


   print(){
      console.log(` My Name is "${this.name}" & my email id is "${this.email}" ` );
      
   }

}

export default Person;