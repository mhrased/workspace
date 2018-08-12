import Person from './person'

class Student extends Person{

   constructor(name, email,id){
      super(name, email)
      this.id = id
   }

   welcome(){
      super.print() 
      console.log(` & id is ${this.id}`)
      
   }

}

export default Student;