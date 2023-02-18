// 1. Создайте объект класса Employee и выведите его в консоль.
class Employee {}
let employee1 = new Employee();

console.log(employee1);

// 2. В объект класса Employee запишите свойства name, age и salary.
employee1.name = "Khan";
employee1.age = 28;
employee1.salary = 4000;

console.log(employee1, employee1.name, employee1.age, employee1.salary);

// 3. Создайте несколько объектов класса Employee.
let employee2 = new Employee();
employee2.name = "Raul";
employee2.age = 30;
employee2.salary = 6000;

console.log(employee2);

// 4. Выведите на экран сумму зарплат созданных вами работников.
let sumEmployeeSalaries = employee1.salary + employee2.salary;

console.log(sumEmployeeSalaries);
