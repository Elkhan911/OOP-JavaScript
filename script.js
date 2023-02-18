// 1. Создайте объект класса Employee и выведите его в консоль.
class Employee {
  show(name, age) {
    return name + " " + age;
  }

  showName() {
    return this.name;
  }

  showSalary() {
    return this.salary;
  }
}

let employee1 = new Employee();

console.log(employee1);

// 2. В объект класса Employee запишите свойства name, age и salary.
employee1.name = "Khan";
employee1.age = 28;
employee1.salary = 6000;

console.log(employee1, employee1.name, employee1.age, employee1.salary);

// 3. Создайте несколько объектов класса Employee.
let employee2 = new Employee();
employee2.name = "Raul";
employee2.age = 30;
employee2.salary = 4000;

console.log(employee2);

// 4. Выведите на экран сумму зарплат созданных вами работников.
let sumEmployeeSalaries = employee1.salary + employee2.salary;

console.log(sumEmployeeSalaries);

//5. Сделайте в вашем классе Employee какой-нибудь тестовый метод. Вызовите его.
// Передайте в ваш тестовый метод имя и зарплату работника.

console.log(employee1.show(employee1.name, employee1.age));

// 6. В объект класса Employee запишите свойства name и salary.
// Сделайте метод, который выведет на экран имя работника.
// Сделайте метод, который выведет на экран зарплату работника.

console.log(employee2.showName(), employee2.showSalary());

// 7. В объект класса Student запишите свойства name и surn
class Student {
  letterUp(str) {
    str = str[0].toUpperCase() + str.slice(1);
    return str;
  }
}

let student1 = new Student();
student1.name = "john";
student1.surname = "Snow";

console.log(student1.name + " " + student1.surname);

// 8. Сделайте вспомогательный метод, который будет получать первый символ строки и делать его заглавным.
console.log(student1.letterUp(student1.name));
