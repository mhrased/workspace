// var obj = { };
// var obj1 = new Object;

// console.log(obj);
// console.log(obj1);


var student = {
   name : "Hasan Rased",
   school : "Nawab Habibullah",
   college : "Shaheed Ramizuddin Cant.",
   university : "Uttara University",
   age : 24,
   Result : function(){
         console.log(this.school + " : gpa 5, " + this.college + " : gpa 5, " + this.university + " : cgpa 3.5");
         
   },
};

student.skill =["html","javascript","worpress","css","php"];

// console.log(student);

// student.Result();

// student.skill.forEach(element => {
//    console.log(element);
// });

// console.log(student['age']);

for (var props in student){
   console.log(props + ' : ' + student[props]);
}
