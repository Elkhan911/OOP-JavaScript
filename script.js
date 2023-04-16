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
  getInicials(name, surname) {
    return name[0] + " " + surname[0];
  }
}

let student1 = new Student();
student1.name = "john";
student1.surname = "snow";

console.log(student1.name + " " + student1.surname);

// 8. Сделайте вспомогательный метод, который будет получать первый символ строки и делать его заглавным.
console.log(student1.letterUp(student1.name));

// 9. Сделайте метод, который вернет инициалы студента, то есть первые буквы его имени и фамилии.
console.log(
  student1.getInicials(
    student1.letterUp(student1.name),
    student1.letterUp(student1.surname)
  )
);

// 10. Объявите в классе Tutor свойства name и surn.
// При объявлении добавьте вашим свойствам некоторые значения.

class Tutor {
  name = "Leo";
  surname = "Ivanov";

  showName() {
    return this.name;
  }
}

let tutor1 = new Tutor();

console.log(tutor1.showName());

// 11. Сделайте конструктор класса Teacher.

class Teacher {
  constructor() {
    console.log("+++");
  }
}

new Teacher();

// 12. Передайте в конструктор класса Employee имя и зарплату работника

class Developer {
  constructor(name, salary) {
    console.log(name + " " + salary);
  }
}

new Developer("Den", "5000");
new Developer("Kent", 8500);

// 13. Передайте в конструктор класса Engineer имя и зарплату работника и запишите их в соответствующие свойства.
// Сделайте метод, который будет выводить имя работника.
// Сделайте метод, который будет выводить зарплату работника.
// Сделайте метод, который будет увеличивать зарплату работника на 10%.

class Engineer {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  showName() {
    return this.name;
  }

  showSalary() {
    return this.salary;
  }

  upSalary() {
    return this.salary + this.salary * 0.1;
  }
}

let engineer1 = new Engineer("Tom", 5000);

console.log(engineer1);
console.log(engineer1.showName());
console.log(engineer1.showSalary());
console.log(engineer1.upSalary());

// 14. В классе Professor сделайте три приватных свойства: имя, зарплату и возраст.
// Передайте параметром конструктора значения этих свойств.
// Сделайте метод, который выведет данные работника.

class Professor {
  #name;
  #salary;
  #age;

  constructor(name, salary, age) {
    this.#name = name;
    this.#salary = salary;
    this.#age = age;
  }

  showData() {
    return this.#name + " " + this.#salary + " " + this.#age;
  }
}

let professor1 = new Professor("Luis", 8000, 28);

console.log(professor1.showData());

//
