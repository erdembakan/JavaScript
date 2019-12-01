// Object Listeral
// const emp1 = {
//     name : "James",
//     Salary : 4000,
//     age: 27,
//     ShowInfos: function(){console.log("Showing Infos...");}
// };

// const emp2 = {
//     name : "Richard",
//     Salary : 2700,
//     age : 23,
// };

// console.log(emp1);
// console.log(emp2); 

function Employee (name,age,salary){

    this.name = name;
    this.salary = salary;
    this.age = age;

    console.log(this); // Shows the object of function scope.
}

const emp1 = new Employee("James",29,4700);
const emp2 = new Employee("Richard",25,3100);