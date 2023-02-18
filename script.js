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
